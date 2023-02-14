require 'mina/rails'
require 'mina/bundler'
require 'mina/git'
require 'mina/rbenv'
require 'colorize'
require 'securerandom'

ENV['domain'] || raise('no domain provided'.red)

ENV['to'] = 'production'
comment "Deploy to #{ENV['domain'].green}"

set :commit, ENV['commit']
set :application_name, 'entreprise.api.gouv.fr'

set :deploy_to, '/var/www/entreprise.api.gouv.fr'
set :repository, 'git@github.com:etalab/entreprise.api.gouv.fr.git'

set :forward_agent, true
set :port, 22

branch = ENV['branch'] || 'master'
set :branch, branch
ensure!(:branch)

set :shared_files, fetch(:shared_files, []).push(*%w[
  _algolia_api_key
])

namespace :bundle do
  desc 'Sets the Bundler config options.'
  task :config do
    comment %{Setting the Bundler config options (and cleaning default options)}
    set :bundle_options, -> { '' }
    command %{#{fetch(:bundle_bin)} config set --local deployment 'true'}
    command %{#{fetch(:bundle_bin)} config set --local path '#{fetch(:bundle_path)}'}
    command %{#{fetch(:bundle_bin)} config set --local without '#{fetch(:bundle_withouts)}'}
  end
end

task :samhain_db_update do
  command %{sudo /usr/local/sbin/update-samhain-db.sh "#{fetch(:deploy_to)}"}
end

task :remote_environment do
  if ENV['domain'] != 'localhost'
    # Be sure to commit your .ruby-version or .rbenv-version to your repository.
    set :rbenv_path, '/usr/local/rbenv'
    invoke :'rbenv:load'
  end
end

desc 'Deploys the current version to the server.'
task :deploy do
  # uncomment this line to make sure you pushed your local branch to the remote origin
  # invoke :'git:ensure_pushed'
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'bundle:config'
    invoke :'bundle:install'
    invoke :'bundle:clean'
    command %( JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config_production.yml )
    invoke :cgu_to_pdf
    invoke :algolia_indexing
    invoke :'deploy:cleanup'
  end
  invoke :'samhain_db_update'
end

task :cgu_to_pdf do
  comment 'Generating PDF version of CGU'.green
  command %(pandoc pages/cgu.md -o _site/assets/cgu.pdf --pdf-engine=xelatex)
end

task :algolia_indexing do
  comment 'Indexing content on Algolia'.green
  command %{bundle exec ruby ./bin/algolia_indexer.rb}
end
