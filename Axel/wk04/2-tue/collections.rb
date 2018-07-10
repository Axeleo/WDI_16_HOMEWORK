require'pry'

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

# planeteers[1]

# planeteers.push('Heart')

# heros = planeteers.concat rangers

# heros.sort

# heros.shuffle

# heros.sample

# heros.select {|hero| hero =~ /^B/}

# HASHES

ninja_turtle = {
  name: 'Michelangelo',
  weapon: 'Nunchucks',
  radical: true
}

ninja_turtle[:age] = 55

ninja_turtle.delete(:radical)

ninja_turtle[:pizza_toppings] = ['cheese', 'pepperoni', 'peppers']

ninja_turtle[:pizza_toppings][0]

ninja_turtle.keys

# not sure if good enough, still prints toppings as an array, tried to_s and join, neither worked because other keys have string values

ninja_turtle.each do |turtle_things, turtle_value|
  p "#{turtle_things} #{turtle_value}"
end


binding.pry   