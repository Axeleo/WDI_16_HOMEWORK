
class Client
  def initialize(name = '', num_of_children = '', age = '', list_of_pets = [])
    @name = name
    @num_of_children = num_of_children
    @age = age
    @list_of_pets = list_of_pets
  end

  def name=(name)
    @name = name
  end 

  def name
    @name
  end

  def num_of_children=(num)
    @num_of_children = num
  end 

  def age=(num)
    @age = num
  end

  def add_pet(pet)
    @list_of_pets << pet
  end

  def remove_pet(pet)
    @list_of_pets -= [pet]

  end

  def list_pets
    @list_of_pets
  end
end