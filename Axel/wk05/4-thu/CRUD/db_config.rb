require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'terraform_db'
}

ActiveRecord::Base.establish_connection(options)