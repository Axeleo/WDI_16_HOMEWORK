var numberOfKids = 6;
var partnersName = 'Sampson';
var geographicLocation = 'Australia';
var jobTitle = 'funemployed';

var fortune = document.createElement('p');
var fortuneText = document.createTextNode('You will be in ' + geographicLocation + ' working as ' + jobTitle + ' with ' + numberOfKids + ' of children and married to ' + partnersName);
fortune.appendChild(fortuneText);
document.body.appendChild(fortune);
console.log('you will be in ' + geographicLocation + 'working as ' + jobTitle + 'with ' + numberOfKids + ' of children and married to ' + partnersName);
