require 'pry'

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

days_of_the_week.pop
days_of_the_week.unshift('Sunday')

days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],['Saturday', 'Sunday']]

days_of_the_week.pop

sorted_days = days_of_the_week[0].sort

puts sorted_days

binding.pry

