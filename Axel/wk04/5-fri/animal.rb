
class Animal

  def initialize(name = '', age = '', gender = '', species = '', favourite_toys = [])
    @name = name
    @age = age
    @gender = gender
    @species = species
    @favourite_toys = favourite_toys
  end

  def name=(name)
    @name = name  
  end

  def name
    @name
  end

  def age=(num)
    @age = num
  end

  def gender=(gender)
    @gender = gender
  end

  def species=(species)
    @species = species
  end

  def add_toy(toy)
    @favourite_toys << toy
  end

  def remove_toy(toy)
    @favourite_toys.pop(toy)
  end

end