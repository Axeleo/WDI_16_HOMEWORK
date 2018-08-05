console.log('getting req')

//iffe
// (function(){})()

var searchResults = $(".search-results")[0]
var cubeRight = $('.right')[0]
var searchForm = $('.search-form')[0]

console.log($===jQuery)
// var searchBarText = document.querySelector(".search-input").value


const showResults = res => {
  let posterImg = document.createElement('img')
  posterImg.src = res.Search[0].Poster
  $(cubeRight).append(posterImg)
  res.Search.forEach(movie => {
    let listTitle = document.createElement('li')
    let filmLink = document.createElement('a')
    filmLink.href = 'https://www.imdb.com/title/' + movie.imdbID
    filmLink.textContent = movie.Title
    $(listTitle).append(filmLink)
    $(searchResult).append(listTitle)
  })
}


const movieSearch = function() {
  var searchBarText = $(".search-input")[0].value
  const options = {
    method: 'GET',
    url: `http://omdbapi.com/?s=${searchBarText}&apikey=2f6435d9`,
    dataType: 'json',
  }
  $.ajax(options).done(showResults)
}

$(searchForm).submit( event => {
  event.preventDefault()
  movieSearch()
})

