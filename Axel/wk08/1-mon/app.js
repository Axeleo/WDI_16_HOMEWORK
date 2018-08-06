
var brushBox = $(".brush-box")

$(".color-form").submit(function () {
  var setColor = $(".color-input")[0].value
  event.preventDefault()
  brushBox[0].style.backgroundColor = setColor
})


$(".wrapper").mouseover(ev => {
  event.target.style.backgroundColor = brushBox[0].style.backgroundColor
})

$(".OMDB-background-form").submit(function () {
  event.preventDefault()
  OMDBRetrive()
})

function OMDBRetrive() {
  let options = {
    method:'GET',
    url:`http://omdbapi.com/`,
    dataType: 'json',
    data: {
      s: $(".OMDB-search-input")[0].value,
      apikey: '2f6435d9'
    }
  }
  $.ajax(options).done(backgroundSet)
}

const backgroundSet = response => {
  $('body').css('background-image', `url(${response.Search[0].Poster})`)
}