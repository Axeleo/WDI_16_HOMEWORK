console.log('getting req')

//iffe
(function(){})()

var searchResults = document.querySelector('.search-results')
var cubeRight = document.querySelector('.right')
var searchForm = document.querySelector('.search-form')
// var searchBarText = document.querySelector(".search-input").value


const showResults = res => {
  let posterImg = document.createElement('img')
  posterImg.src = res.Search[0].Poster
  cubeRight.appendChild(posterImg)
  res.Search.forEach(movie => {
    let listTitle = document.createElement('li')
    let filmLink = document.createElement('a')
    filmLink.href = 'https://www.imdb.com/title/' + movie.imdbID
    filmLink.textContent = movie.Title
    listTitle.appendChild(filmLink)
    searchResults.appendChild(listTitle)
  })
}


const movieSearch = function() {
  var searchBarText = document.querySelector(".search-input").value
  const options = {
    method: 'GET',
    url: `http://omdbapi.com/?s=${searchBarText}&apikey=2f6435d9`,
    dataType: 'json',
  }
  $.ajax(options).done(showResults)
}

searchForm.addEventListener("submit", event => {
  event.preventDefault()
  movieSearch()
})

