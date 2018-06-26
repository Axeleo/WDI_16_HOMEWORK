console.log('trains running')

// put the trian lines into arrays
var alamein = ['Flinders', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenwaverly = ['Flagstaff', 'Central', 'Parliment', 'Richmond', 'Kooyong', 'Tooronga']
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Parahn', 'Windsor']

// create a origin and destination values
var startStation = prompt('PLEASE SELECT YOUR ORIGIN: Flinders, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie, Flagstaff, Central, Parliment, Richmond, Kooyong, Tooronga, Southern Cross, Richmond, South Yarra, Parahn, Windsor')
var endStation = prompt('SELECT YOUR DESTINATION: Flinders, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie, Flagstaff, Central, Parliment, Richmond, Kooyong, Tooronga, Southern Cross, Richmond, South Yarra, Parahn, Windsor')

// define variables
var journey = []
var startJourney 
var endJourney 
var startLine
var endLine

// create a function to find the index number of a station for start and end
function findOrigin(element) {
  if (element === startStation){
    return element
  }
}

function findDestination(element) {
  if (element === endStation) {
    return element
  }
}

// setup function expressable to find index of Richmond on any line
function findRichmond(element) {
  if (element === 'Richmond') {
    return element
  }
}

// search arrays for the origin and grab that array
// need to add two lines to prompt another response in case the user doesn't enter correct info
function originIndexFinder() {
  
  if (alamein.findIndex(findOrigin) != -1){
    startJourney = alamein.findIndex(findOrigin)
    startLine = alamein
  } else if (glenwaverly.findIndex(findOrigin) != -1){
    startJourney = glenwaverly.findIndex(findOrigin)
    startLine = glenwaverly
  } else  if (sandringham.findIndex(findOrigin) != -1){
    startJourney = sandringham.findIndex(findOrigin)
    startLine = sandringham
  } else {
    startStation = prompt('PLEASE SELECT YOUR ORIGIN: Flinders, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie, Flagstaff, Central, Parliment, Richmond, Kooyong, Tooronga, Southern Cross, Richmond, South Yarra, Parahn, Windsor')
    originIndexFinder();
  }

  // search arrays for destination and grab that value
  if (alamein.findIndex(findDestination) != -1) {
    endJourney = alamein.findIndex(findDestination)
    endLine = alamein
  } else if (glenwaverly.findIndex(findDestination) != -1) {
    endJourney = glenwaverly.findIndex(findDestination)
    endLine = glenwaverly
  } else if (sandringham.findIndex(findDestination) != 1){
    endJourney = sandringham.findIndex(findDestination)
    endLine = sandringham
  } else {
    endStation = prompt('SELECT YOUR DESTINATION: Flinders, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie, Flagstaff, Central, Parliment, Richmond, Kooyong, Tooronga, Southern Cross, Richmond, South Yarra, Parahn, Windsor')
    originIndexFinder();
  }
}


// call all funcitons
function ptPlanner() {
  originIndexFinder();
  singleLineJourney();
  changeLineJourneyStart();
  changeLineJourneyEnd();

  // turn journey array into string
  journeyString = journey.join(' ----> ')

  // return a printed version of the journey array
  console.log('Origin: ' + startStation + '\n Destination: ' + endStation + ' \n Your journey is, ' + journeyString + '\n Number of stations travelled: ' + (journey.length))
}

// only single line w/ conditoinal to find direction of travel
function singleLineJourney() {
  
  if (startLine === endLine) {
    if (startJourney < endJourney) {
      for (var i = startJourney; i <= endJourney; i++) {
        journey.push(startLine[i])
      }
    } else if (startJourney > endJourney) {
      for (var i = startJourney; i >= endJourney; i--) {
        journey.push(startLine[i])
      }
    }
  }
  
}

function changeLineJourneyStart() {

  if (startLine != endLine){
    if (startJourney < startLine.findIndex(findRichmond)){
      for (var i = startJourney; i <= startLine.findIndex(findRichmond); i++){
        journey.push(startLine[i])
      }
    } else if (startJourney > startLine.findIndex(findRichmond)) {
        for (var i = startJourney; i >= startLine.findIndex(findRichmond); i--) {
          journey.push(startLine[i])
        }
    }
  }
}

function changeLineJourneyEnd() {
  if (startLine != endJourney) {
    journey.pop()
    if (endLine.findIndex(findRichmond) < endJourney) {
      for (var i = endLine.findIndex(findRichmond); i <= endJourney; i++) {
        journey.push(endLine[i])
      }
    } else if (endLine.findIndex(findRichmond) > endJourney) {
        for (var i = endLine.findIndex(findRichmond) ; i >= endJourney; i--) {
          journey.push(endLine[i])
        }
    }
  }
}

// call the funciton so it runs after page loads
ptPlanner();