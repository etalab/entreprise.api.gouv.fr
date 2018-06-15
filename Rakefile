domains = %w[production1.entreprise.api.gouv.fr production2.entreprise.api.gouv.fr]

task :setup do
  domains.each do |domain|
    sh "bundle exec mina setup domain=#{domain}"
  end
end

task :deploy do
  domains.each do |domain|
    sh "bundle exec mina deploy domain=#{domain}"
  end
end

task :cgu_to_pdf do
  sh 'pandoc pages/cgu.md -o assets/cgu.pdf --latex-engine=xelatex'
end
