var year = new Date().getFullYear()
var birthYear = 1993
var possibleAgeOne = (year - birthYear - 1)
var possibleAgeTwo = (year - birthYear)

var possibleAges = document.createElement('p');
var ageText = document.createTextNode('your are either ' + possibleAgeOne + ' or ' + possibleAgeTwo);
possibleAges.appendChild(ageText);
document.body.appendChild(possibleAges);