require'pry'

puts 'tempreature value'
starting_temp = {
'temp_value' => gets.chomp.downcase
}
puts 'tempreature unit either f, c or k '
temp_unit = gets.chomp.downcase

def tempreature_conversion(temp_value, temp_unit)
  temp_value = temp_value.to_i
  if temp_unit == 'f'
    converted_temp = {
      'to_celcius' => (temp_value - 32) / 1.8,
      'to_kelvin' => (temp_value + 459.67) / 1.8
    }
    puts "Your temp in Celcuis is #{converted_temp['to_celcius']} \n Your temp in kelvin is #{converted_temp['to_kelvin']}"
  elsif temp_unit == 'c'
    converted_temp = {
      'to_fahrenheit' => temp_value * 1.8 + 32,
      'to_kelvin' => temp_value + 273.15
    }
    puts "Your temp in Feahrenheit is #{converted_temp['to_fahrenheit']} \n Your temp in kelvin is #{converted_temp['to_kelvin']}"
  elsif temp_unit == 'k'
    converted_temp = {
      'to_celcius' => temp_value - 273.15,
      'to_fahrenheit' => temp_value * 1.8 - 459.67
    }
    puts "Your temp in Feahrenheit is #{converted_temp['to_fahrenheit']} \n Your temp in Celcius is #{converted_temp['to_celcius']}"
  end
end


tempreature_conversion(starting_temp['temp_value'], temp_unit)

while starting_temp['temp_value'] != 'quit' do 
  puts 'tempreature value or quit'
  starting_temp = {
  'temp_value' => gets.chomp
  } 
  if starting_temp['temp_value'] == 'quit'
    exit
  end
  puts 'tempreature unit either f, c or k '
  temp_unit = gets.chomp.downcase
  tempreature_conversion(starting_temp['temp_value'], temp_unit)
end

