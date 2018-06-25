// put the trian lines into arrays

var alamein = ['Flinders', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenwaverly = ['Flagstaff', 'Central', 'Parliment', 'Richmond', 'Kooyong', 'Tooronga']
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Parahn', 'Windsor']

// in Object
// var stations = {
//   alamein: ['Flinders', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
//   glenwaverly: ['Flagstaff', 'Central', 'Parliment', 'Richmond', 'Kooyong', 'Tooronga'],
//   sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Parahn', 'Windsor']
// }

// create a origin and destination values

var startStation = 'Burnley'
var endStation = 'Flagstaff'

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

var journey = []
var startJourney 
var endJourney 
var startLine
var endLine
// create a function which takes two params - start and end station
function ptPlanner(origin, destination) {
  
  // create an output journey array
  
  // search arrays for the origin and grab that array
  if (alamein.findIndex(findOrigin) != -1){
    startJourney = alamein.findIndex(findOrigin)
    startLine = 'alamein'
  } else if (glenwaverly.findIndex(findOrigin) != -1){
    startJourney = glenwaverly.findIndex(findOrigin)
    startLine = 'glenwaverly'
  } else {
    startJourney = sandringham.findIndex(findOrigin)
    startLine = 'sandringham'
  }

  // search arrays for destination and grab that value
  if (alamein.findIndex(findDestination) != -1) {
    endJourney = alamein.findIndex(findDestination)
    endLine = 'alamein'
  } else if (glenwaverly.findIndex(findDestination) != -1) {
    endJourney = glenwaverly.findIndex(findDestination)
    endLine = 'glenwaverly'
  } else {
    endJourney = sandringham.findIndex(findDestination)
    endLine = 'sandringham'
  } 

// if origin and destination are in same array push those values into journey array
// create conditionals for each line combination

// alamein line
// create conditoinal to find direction of travel

// only alamein
if (startLine === 'alamein' && endLine === 'alamein') {
  if (startJourney < endJourney) {
    for (var i = startJourney; i <= endJourney; i++) {
      journey.push(alamein[i])
    }
  } else if (startJourney > endJourney) {
    for (var i = startJourney; i >= endJourney; i--) {
      journey.push(alamein[i])
    }
  }
}

// starting alamein
if (startLine === 'alamein' && endLine === 'glenwaverly'){
  // inside alamein
  debugger
  if (startJourney < 1) {
    for (var i = startJourney; i = 1; i++) {
      journey.push(alamein[i])
    }
    debugger
  } else if (startJourney > 1) {
    for (var i = startJourney; i = 1; i--) {
      journey.push(alamein[i])
    }
  }
  debugger
  // inside glenwaverly
  if (endJourney < 3) {
    for (var i = endJourney; i = 3; i++) {
      journey.push(glenwaverly[i])
    }
  } else if (endJourney > 3) {
    for (var i = endJourney; i = 3; i--) {
      journey.push(glenwaverly[i])
    }
  }
} else if (startLine === 'alamein' && endLine === 'sandringham'){

}

//glenwaverly line
//create conditoinal to find direction of travel
if (startLine === 'glenwaverly' && endLine === 'glenwaverly') {
  if (startJourney < endJourney) {
    for (var i = startJourney; i <= endJourney; i++) {
      journey.push(glenwaverly[i])
    }
  } else if (startJourney > endJourney) {
    for (var i = startJourney; i >= endJourney; i--) {
      journey.push(glenwaverly[i])
    }
  }
}

//sandringham line
//create conditoinal to find direction of travel
if (startLine === 'sandringham' && endLine === 'sandringham'){
  if (startJourney < endJourney){
    for (var i = startJourney; i <= endJourney; i++){
      journey.push(sandringham[i])
    }
  } else if (startJourney > endJourney){
    for (var i = startJourney; i >= endJourney; i--) {
      journey.push(sandringham[i])
    }
  }
}


}





// if they are in sperate tables push all elements until interection at Richmond
// then push all values from richmond to destination into journey array

// return a printed version of the journey array