require'pry'

a = ["Anil", "Erik", "Jonathan"]

# a[1]

# a.push('Axel')

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}


# h[1]

# h[2]

# h[:two]

# h[3] = 'Three'

# h[:four] = 4


is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]? "It's true!"
# What is the return value of is["Erik" == "Jonathan"]? "It's true!"
# What is the return value of is[9 > 10]? "It's false!"
# What is the return value of is[0]? error
# What is the return value of is["Erik"]? error

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}


# users['Jonathan'][:twitter]

# users["Erik"][:favorite_numbers].push(7)

# users['Axel'] = {
#     :twitter => "nerp",
#     :favorite_numbers => [11, 15, 85],
#   }

# users["Erik"][:favorite_numbers]

# users["Erik"][:favorite_numbers].min

# users["Anil"][:favorite_numbers].select {|num| num.even?}

# users["Anil"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Jonathan"][:favorite_numbers]

# array = users["Anil"][:favorite_numbers].concat users["Erik"][:favorite_numbers].concat users["Jonathan"][:favorite_numbers]

# array = array.sort.uniq

# OR 

# users.value.map do |hash|
#   hash[:favourtie_numbers]
# end.flattern.sort.uniq

binding.pry