require 'pry'


class Robot

  def name
    increment_instruction
    @name
  end

  def initialize
  @name = generate_name
  @mac_address = 6.times.map { '%02x' % rand(0..255) }.join(':')
  @instruction_count = 0
  @creation_time = Time.now
  @instruction_time = Time.now
  end

  def generate_name
  "#{suffix}#{prefix}"
  end

  
  def instruction_count
    increment_instruction
    @instruction_time = Time.now
    @instruction_count
  end
  
  def timer
    increment_instruction
    puts "Time since last boot = #{time_since_creation} \n Time since created = #{time_since_instruction}"
  end
  
  def reset
    @instruction_time = Time.now
  end

  private 

  def second_since_creation
    time_since_creation = Time.now - @creation_time
    time_since_creation.round
  end

  def second_since_operation
    time_since_instruction = Time.now - @instruction_time
    time_since_instruction.round
  end


  def increment_instruction
    @instruction_count += 1
  end

  def prefix
    ('AAA'..'ZZZ').to_a.sample
  end
  
  def suffix
    ('11'..'99').to_a.sample
  end
end

binding.pry

