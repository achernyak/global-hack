# README

## Rails

``` bash
# rvm - ruby version manager
\curl -L https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm requirements
rvm install 2.3.1
rvm use 2.3.1
rvm rubygems current

# confirm ruby version (ruby 2.3.1)
ruby --version

# install gemfile deps
gem install bundler
bundle install

# database
rake db:create db:migrate db:seed

# start server on port 3000 (default)
rails s
```

## Front End
- Read public folder readme
