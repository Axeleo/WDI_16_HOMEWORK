require 'pry'
require 'io/console'


puts "enter filename \: "
filename = gets.chomp

def num_of_lines(file)
 counter = IO.readlines(file).length
 puts counter
end

num_of_lines(filename)