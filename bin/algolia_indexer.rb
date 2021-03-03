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
  use_cases
]

OptionParser.new do |opts|
  opts.banner = "Usage: #{$0} [options]"

  opts.on('-h', '--help', 'Print this help') do
    puts opts
    exit
  end

  opts.on('-v', '--verbose', 'Print each entry built for Algolia') do |exec|
    options[:verbose] = true
  end

  opts.on('-d', '--dry-run', 'Do not send data to Algolia') do |exec|
    options[:dry_run] = true
  end

  opts.on('-t', '--types TYPES', Array, "Filters on types (available options: #{all_types.join(', ')})") do |types|
    options[:types] = types
  end
end.parse!

options[:types] ||= all_types

print "DRY-MODE ACTIVATED" if options[:dry_run]

begin
  require 'pry'
rescue LoadError
end

class AlgoliaIndexer
  attr_reader :options

  def initialize(options)
    @options = options
  end

  def run!
    options[:types].each do |type|
      public_send(type)
    end
  end

  def support
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

    index.replace_all_objects(support_entries, { safe: true }) unless options[:dry_run]
    print_entries('support', support_entries) if options[:verbose]
  end

  def documentation
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

    index.replace_all_objects(documentation_entries, { safe: true }) unless options[:dry_run]
    print_entries('documentation', documentation_entries) if options[:verbose]
  end

  def catalogue
    index = client.init_index('entreprise.api.gouv.fr_catalogue')

    index.set_settings({
      ranking: [
        'asc(position)',
        'words',
      ],
      searchableAttributes: [
        'title',
        'description',
        'providers',
      ],
      attributesForFaceting: [
        'kind',
        'providers',
      ],
    })
    add_synonyms_to_index(algolia_config['synonyms'], index)

    catalogue_files = Dir[File.join(root_path, './_catalogue/*.md')]

    catalogue_entries = catalogue_files.map do |catalogue_file|
      attributes = YAML.load_file(catalogue_file)

      {
        objectID: Digest::MD5.hexdigest(catalogue_file),
        kind: 'catalogue',
        label: attributes['label'],
        position: attributes['weight'].to_i,
        type: attributes['type'],
        title: attributes['title'],
        description: markdownify(attributes['description']),
        providers: attributes['providers'],
      }
    end

    index.replace_all_objects(catalogue_entries, { safe: true }) unless options[:dry_run]
    print_entries('catalogue', catalogue_entries) if options[:verbose]
  end

  def use_cases
    index = client.init_index('entreprise.api.gouv.fr_use_cases')

    index.set_settings({
      ranking: [
        'words',
      ],
      searchableAttributes: [
        'title',
        'content',
      ],
      attributesForFaceting: [
        'kind',
      ],
    })
    add_synonyms_to_index(algolia_config['synonyms'], index)

    use_cases_files = Dir[File.join(root_path, './_use_cases/*.md')]

    use_cases_entries = use_cases_files.map do |use_case_file|
      attributes = YAML.load_file(use_case_file)
      content = File.read(use_case_file).split("\n---\n")[-1].strip
      file_name_without_extension = use_case_file.split('/')[-1].gsub('.md', '')
      next unless attributes['enable']

      {
        objectID: Digest::MD5.hexdigest(use_case_file),
        id: file_name_without_extension,
        title: attributes['title'],
        kind: 'use_case',
        content: markdownify(content),
      }
    end.compact

    index.replace_all_objects(use_cases_entries, { safe: true }) unless options[:dry_run]
    print_entries('use_cases', use_cases_entries) if options[:verbose]
  end

  private

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
      ) unless options[:dry_run]
    end
  end

  def print_entries(kind, entries)
    print "Entries for #{kind}:\n\n"
    count = entries.count

    entries.each_with_index do |entry, index|
      print "[#{index+1}/#{count}]\n#{entry}\n"
    end

    print "====================\n"
  end

  def root_path
    @root_path ||= File.expand_path(
      File.join(
        File.expand_path(
          __dir__,
        ),
        '../',
      )
    )
  end

  def algolia_config
    @algolia_config ||= YAML.load_file(File.join(root_path, '_config.yml'))['algolia']
  end

  def algolia_secret_key
    @algolia_secret_key ||= File.read(File.join(root_path, './_algolia_api_key')).strip
  end

  def client
    @client ||= Algolia::Search::Client.create('4NUM23WKJI', algolia_secret_key)
  end
end

AlgoliaIndexer.new(options).run!
