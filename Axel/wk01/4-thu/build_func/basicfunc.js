console.log('js function running')
// function 1
function combineWords(word1, word2) {
  return word1 + word2;
};
var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'

// function 2

function calculateYear(birthYear, currentYear) {
  return ('you are either ' + (currentYear - birthYear) + ' or '  + (currentYear - birthYear - 1))
};
console.log(calculateYear(1993, 2018));

// function 3

var radDogs = ['Max', 'Rex', 'Fido']

function lengths(array) {
  var lengthOfStrings = []
  for(i = 0; i < array.length; i++){
    lengthOfStrings.push(array[i].length)
  } 
  return lengthOfStrings
} 

// function 4

function transmogrifier(val1, val2, val3) {
  return (val1 + val2) * val3
}

// function 5

function wordReverse(string) {

  var splitString = string.split(' ');
  var outputString = ''
  for (i = splitString.length; i > 0 ; i--){
    outputString += (' ' + splitString[i - 1])
  }
  return outputString
} 
