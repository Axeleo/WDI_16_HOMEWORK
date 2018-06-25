// Data types

typeof 15
// Prediction: number
// Actual: nuber

typeof 5.5
// Prediction: number
// Actual: number

typeof NaN
// Prediction: number
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: boolean
// Actual: true


"hamburger" + "s"
// Prediction: 'hamburgers'
// Actual: 'hamburgers'

"hamburgers" - "s"
// Prediction: 'hamburger'
// Actual: Nan

"1" + "3"
// Prediction:'13'
// Actual: '13'

"1" - "3"
// Prediction: undefined
// Actual: -2

"johnny" + 5
  // Prediction: 'johnny5'
  // Actual:

  "johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN


// Arrays

// Array.push() // adds element to the back
// Array.pop() // removes element from the back
// Array.unshift() // adds element to the front
// Array.shift() // removes element from the front
// Array.join() // concatanates all elements into a string
// string.split() // splits a string into an array

var numbers = [2, 4, 6, 8]
numbers.pop() // [2, 4, 6]
numbers.push(10) // [2, 4, 6, 8, 10]
numbers.unshift(3) // [3, 2, 4, 6]

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
// will return ['dot', 'dash', pause', 'dash , 'dot']

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) // bands will now have beatles array
bands.unshift(stones) // bands will now have stones and beatles seperate arrays
bands[bands.length - 1].pop() // bands.length expression evaluates to 1 which selects the beatles and pops Pete
bands[0].shift() // will shift brian
bands[1][3] = "Ringo" // ringo is added as the third value of the beatles array

// Booleans & Comparison operators

// a   	b	      a AND b
// true	true    ? true
// true	false   ? false
// false	true  ? false
// false	false ? false

// a	    b	    a OR b
// true	true    ?  true
// true	false   ? true
// false	true  ? true
// false	false ? false

// a	b	  a != b
// 3	3   ? false
// 1	5   ? true
// 2	"2" ? false


// a	    b       !a AND(a OR b)
// true	  true    ?  false
// true	  false   ?  false
// false	true    ?  true
// false	false   ?  false

// Condidtionals

// with bonus 

var patron = {
  age: 19, 
  ID: false
}

if (patron.ID === true){
  if (patron.age > 21){
    console.log('come on in')
  } else if (patron.age > 18 && patron.age < 21){
    console.log('come on in but no drinking')
  } else if (patron.age < 18){
    console.log('too young')
  } else if (patron.age > 75){
    console.log('do you eant to be here?')
  }
} else {
  console.log('no ID, no entry')
}


// Fizz-Buzz

for (i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('fizzbuzz')
  } else if (i % 5 === 0){
    console.log('buzz')
  } else if (i % 3 === 0){
    console.log('fizz')
  } else {
    console.log(i)
  }
}

// Fizz-buzz function 
function fizzbuzz(i){
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(i)
  }
}