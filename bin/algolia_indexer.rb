# frozen_string_literal: true

require 'algolia'
require 'yaml'
require 'digest'
require 'kramdown'

root_path = File.expand_path(
  File.join(
    File.expand_path(
      __dir__,
    ),
    '../',
  )
)

algolia_secret_key = File.read(File.join(root_path, './_algolia_api_key')).strip
client = Algolia::Search::Client.create('4NUM23WKJI', algolia_secret_key)

## Support
index = client.init_index('entreprise.api.gouv.fr_support')

index.set_settings({
  ranking: [
    'asc(position)',
  ],
  searchableAttributes: [
    'question',
    'answer',
  ],
  attributesForFaceting: [
    'label',
    'enable',
    'kind',
  ],
})

support_files = Dir[File.join(root_path, './_supports/*.md')]

support_entries = support_files.map do |support_file|
  attributes = YAML.load_file(support_file)

  {
    objectID: Digest::MD5.hexdigest(support_file),
    kind:     'support',
    position: attributes['position'].to_i,
    question: attributes['question'],
    answer:   Kramdown::Document.new(attributes['answer']).to_html,
    label:    attributes['label'],
    enable:   attributes['enable'],
  }
end

index.replace_all_objects(support_entries, { safe: true })
