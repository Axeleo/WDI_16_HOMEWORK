require 'pry'

movie = {
  title: 'sharknado',
  year: 2000,
  stars: ['shark']
}

db = {
  2 => ['dt'],
  3 => ['inder', 'micael',],
  4 => ['megan', 'axel']
}

# db is a collection of things
db.each do |score, students|
  puts "#{score} #{students.join' '}"
end

# symbol -  :title - space efficiency as strings take up multiple memory ID's, symbols share same ID
binding.pry