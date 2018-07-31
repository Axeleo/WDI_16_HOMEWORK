console.log('getting req')

var searchBtn = document.querySelector('.search-btn')
var searchResults = document.querySelector('.search-results')
var cubeRight = document.querySelector('.right')

var showResults = function(res) {
  let posterImg = document.createElement('img')
  posterImg.src = res.Search[0].Poster
  cubeRight.appendChild(posterImg)
  res.Search.forEach(function(movie){
    let listTitle = document.createElement('li')
    let filmLink = document.createElement('a')
    filmLink.href = 'https://www.imdb.com/title/' + movie.imdbID
    filmLink.textContent = movie.Title
    listTitle.appendChild(filmLink)
    searchResults.appendChild(listTitle)
  })
}

var movieSearch = function() {
  var searchBarText = document.querySelector(".search-bar").value
  console.log(searchBarText)
  $.ajax({
    method: 'GET',
    url: "http://omdbapi.com/?s=" + searchBarText + '&apikey=2f6435d9',
    dataType: 'json',
  }).done(showResults)
}

searchBtn.addEventListener('click', movieSearch)
