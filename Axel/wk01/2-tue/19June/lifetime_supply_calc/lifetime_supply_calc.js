var currentAge = 24;
var maxAge = 99;
var estimatedAmount = 4;
var totalEaten = ((maxAge - currentAge)*365*estimatedAmount)

var lifetimesupply = document.createElement('p');
var t = document.createTextNode('you will need ' + totalEaten + ' to last to ' + maxAge);
lifetimesupply.appendChild(t);
document.body.appendChild(lifetimesupply);