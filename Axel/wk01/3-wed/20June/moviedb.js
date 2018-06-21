// create favourite movie object
var favouriteMovie = {
  title: 'The Lobster',
  duration: 144,
  starring: ['Colin Farrel', 'Rachel Weisz', 'Jessica Barden']
}
// create function to list details of favourite movie
function getMovieDetails(object) {
  console.log(object.title + ' lasts for ' + object.duration + ' and stars ' + object.starring.join(', '))
}
// Invoke fucntion
getMovieDetails(favouriteMovie)