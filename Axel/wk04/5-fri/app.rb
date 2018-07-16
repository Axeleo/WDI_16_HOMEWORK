require_relative 'animal'
require_relative 'client'
require 'pry'


shelter = {
  'clients' => [],
  'animals' => []
}

def shelter_program(shelter)

  puts "select a task \n Display all animals: press a \n Display all clients: press b \n Create an animal: press c \n Create a client: press d \n Adopt an animal: press e \n Put animal up for adoption: press f \n or EXIT"

  response = gets.chomp

    if response == 'a'
      puts shelter['animals']

    elsif response == 'b'
      puts shelter['clients']

    elsif response == 'c'
      
      puts "Name the animal"
      new_name = gets.chomp
      puts "How old is the animal"
      new_age = gets.chomp
      puts "What is the animals gender"
      new_gender = gets.chomp
      puts "what species is the animal"
      new_species = gets.chomp
    
      puts "add some toys? (y/n)"
      toys_response = gets.chomp
      favourite_toys = []
      while toys_response == 'y'
        puts "Add a toy"
        new_toy = gets.chomp
        favourite_toys.push(new_toy)
        puts "add some toys? (y/n)"
        toys_response = gets.chomp
      end
      animal = Animal.new(new_name, new_age, new_gender, new_species, favourite_toys)
      puts "Your animal is #{animal}"
      shelter['animals'] << animal

    elsif response == 'd'

      puts "Client name"
      new_name = gets.chomp
      puts "Number of children?"
      num_children = gets.chomp
      puts "Clients age"
      new_age = gets.chomp

      puts "Does the client have any pets? (y/n)"
      clients_response = gets.chomp
      list_of_pets = []
      while clients_response == 'y'
        puts "add a pet"
        new_pet = gets.chomp
        list_of_pets.push(new_pet)
        puts "Does the client have any more pets? (y/n)"
        clients_response = gets.chomp
      end
      client = Client.new(new_name, num_children, new_age, list_of_pets)
      puts "the new client is #{client}"  
      shelter['clients'] << client

    elsif response == "e"
      puts "Choose an animal to adopt #{shelter['animals'].each {|animal| puts animal.name}}"

      adopt_animal_name = gets.chomp
      p adopt_animal_name
      holding_pen = []

      shelter['animals'].each do |animal|
        if animal.name == adopt_animal_name
          p animal
          animal_index = shelter['animals'].index(animal)
          p animal_index
          holding_pen.push(shelter['animals'][animal_index])
          p shelter
          shelter['animals'] - [animal]
        end
      end

      puts "You are adopting #{holding_pen[0].name}, select a client #{shelter['clients'].each {|client| puts client.name}}"
        
      adopt_client_name = gets.chomp
      p adopt_client_name

      shelter['clients'].each do |client|
        if client.name == adopt_client_name
          client_index = shelter['clients'].index(client)
          p client_index
          shelter['clients'][client_index].add_pet(holding_pen[0])
          p holding_pen
          holding_pen.pop()
        end
      end

    elsif response == 'f'

      puts "Which client wants to put a pet up for adoption? #{shelter['clients'].each {|client| puts client.name}}"

      client_giving_animal = gets.chomp

      shelter['clients'].each do |client|
        if client.name == client_giving_animal
          client_index = shelter['clients'].index(client)
          
          puts "which animal is going to be put up for adoption#{shelter['clients'][client_index].list_pets.each { |animal| puts animal.name}}"

          animal_to_adopt = gets.chomp
          shelter['clients'][client_index].list_pets.each do |animal|
            if animal == animal_to_adopt
            shelter['animals'].push(animal)
            shelter['clients'][client_index].remove_pet(animal)
            end
          end
        end
      end
    end



end

# fake animals

a1 = Animal.new('anjo', '4', 'm', 'dog')

a2 = Animal.new('cony', '5', 'm', 'cat')

c1 = Client.new('Tony', '2', '45')

c2 = Client.new('Margret', '1', '30')

shelter['animals'].push(a1)
shelter['animals'].push(a2)
shelter['clients'].push(c1)
shelter['clients'].push(c2)

shelter_program(shelter)



binding.pry

# cli program

# show a menu of options
# list all clients
# list all animals
# quit 
