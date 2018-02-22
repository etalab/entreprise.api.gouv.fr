require 'mina/rails'
require 'mina/bundler'
require 'mina/git'
require 'mina/rbenv'
require 'colorize'


ENV['domain'] || raise('no domain provided'.red)

ENV['to'] ||= "production"
unless %w[sandbox staging production].include?(ENV['to'])
  raise("target environment (#{ENV['to']}) not in the list")
end

print "Deploy to #{ENV['to']} environment\n".green

set :user, 'deploy'
set :application_name, 'entreprise.api.gouv.fr'
set :domain, ENV['domain']

set :deploy_to, "/var/www/entreprise.api.gouv.fr_#{ENV['to']}"
set :repository, 'git@github.com:etalab/entreprise.api.gouv.fr.git'

set :forward_agent, true
set :port, 22

branch = ENV['branch'] || begin
                            case ENV['to']
                            when 'production'
                              'master'
                            when 'staging'
                              'staging'
                            when 'development', 'sandbox'
                              'develop'
                            end
                          end

set :branch, branch
ensure!(:branch)

task :remote_environment do
  if ENV['domain'] != 'localhost'
    # Be sure to commit your .ruby-version or .rbenv-version to your repository.
    set :rbenv_path, '/usr/local/rbenv'
    invoke :'rbenv:load'
  end
end

desc "Deploys the current version to the server."
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
    command %{ bundle exec jekyll build }
    invoke :'deploy:cleanup'
  end

end
