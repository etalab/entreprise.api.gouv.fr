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
set :user, 'deploy'
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

def samhain_db_update
  samhain_listfile = "/tmp/listfile-#{SecureRandom.hex(48)}"

  comment %{Updating Samhain signature database}
  command %{find "/var/www/entreprise.api.gouv.fr" >#{samhain_listfile}}
  command %{sudo /usr/local/sbin/update-samhain-db.sh #{samhain_listfile}}
  command %{rm -f #{samhain_listfile}}
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
    set :bundle_options, fetch(:bundle_options) + ' --clean'
    invoke :'bundle:install'
    command %( JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config_production.yml )
    invoke :cgu_to_pdf
    invoke :algolia_indexing
    invoke :'deploy:cleanup'
  end
  samhain_db_update
end

task :cgu_to_pdf do
  comment 'Generating PDF version of CGU'.green
  command %(pandoc pages/cgu.md -o _site/assets/cgu.pdf --pdf-engine=xelatex)
end

task :algolia_indexing do
  comment 'Indexing content on Algolia'.green
  command %{bundle exec ruby ./bin/algolia_indexer.rb}
end
