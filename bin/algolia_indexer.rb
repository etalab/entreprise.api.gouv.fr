# frozen_string_literal: true

require 'algolia'
require 'yaml'
require 'digest'
require 'kramdown'
require 'kramdown-parser-gfm'
require 'optparse'

options = {}
all_types = %w[
  documentation
  support
  catalogue
]

OptionParser.new do |opts|
  opts.banner = "Usage: #{$0} [options]"

  opts.on('-h', '--help', 'Print this help') do
    puts opts
    exit
  end

  opts.on('-d', '--dry-run', 'Do not send data to Algolia') do |exec|
    options[:dry_run] = true
  end

  opts.on('-t', '--types TYPES', Array, "Filters on types (available options: #{all_types.join(', ')})") do |types|
    options[:types] = types || all_types
  end
end.parse!

$send_to_algolia = !options[:dry_run]

print "DRY-MODE ACTIVATED" unless $send_to_algolia

begin
  require 'pry'
rescue LoadError
end

def markdownify(content)
  Kramdown::Document.new(
    content,
    input: 'GFM',
    parse_block_html: true,
  ).to_html
end

def add_synonyms_to_index(synonyms_config, index)
  index.clear_synonyms

  synonyms_config.each do |synonym_config|
    hash = {
      objectID: "#{synonym_config['id']}",
    }

    if synonym_config['type'] == 'synonym'
      hash.merge!(
        synonyms: synonym_config['words'],
      )
    elsif synonym_config['type'] == 'oneWaySynonym'
      hash.merge!(
        input: synonym_config['input'],
        synonyms: synonym_config['words'],
      )
    else
      next
    end

    index.save_synonym(
      hash.merge(
        type: synonym_config['type'],
      ),
    ) if $send_to_algolia
  end
end

root_path = File.expand_path(
  File.join(
    File.expand_path(
      __dir__,
    ),
    '../',
  )
)

algolia_config = YAML.load_file(File.join(root_path, '_config.yml'))['algolia']
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
add_synonyms_to_index(algolia_config['synonyms'], index)

support_files = Dir[File.join(root_path, './_supports/*.md')]

support_entries = support_files.map do |support_file|
  attributes = YAML.load_file(support_file)

  {
    objectID: Digest::MD5.hexdigest(support_file),
    kind:     'support',
    position: attributes['position'].to_i,
    question: attributes['question'],
    answer:   markdownify(attributes['answer']),
    label:    attributes['label'],
    enable:   attributes['enable'],
  }
end

index.replace_all_objects(support_entries, { safe: true }) if $send_to_algolia

## Documentation
index = client.init_index('entreprise.api.gouv.fr_documentation')

index.set_settings({
  ranking: [
    'asc(position)',
    'words',
  ],
  searchableAttributes: [
    'panel_title',
    'panel_content',
  ],
  attributesForFaceting: [
    'kind',
  ],
})
add_synonyms_to_index(algolia_config['synonyms'], index)

documentation_files = Dir[File.join(root_path, './_documentation/*.md')]

documentation_entries = []

documentation_files.each do |documentation_file|
  attributes = YAML.load_file(documentation_file)

  attributes['panels'].each_with_index do |(key, hash), index|
    position = (attributes['weight'].to_i * 100) + index

    base_entry = {
      objectID: Digest::MD5.hexdigest("#{documentation_file}_#{key}"),
      id:       attributes['identifier'],
      kind:     'documentation',
      position: position,
      title:    attributes['title'],

      panel_id:       hash['id'],
      panel_title:    hash['title'],
      panel_content:  markdownify(hash['content']),
    }

    documentation_entries << base_entry
  end
end

index.replace_all_objects(documentation_entries, { safe: true }) if $send_to_algolia
