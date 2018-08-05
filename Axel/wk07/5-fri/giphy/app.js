
var searchInput = $('.search-input')

function displayGIF(res) {
  res.data.forEach(imgInfo => { 
    $("main").append(`<img src=${imgInfo.images.original.webp}></img`)
  })
}

// http: //api.giphy.com/v1/gifs/search?q=pufferfish&api_key=wPUI7ePlTSoX5fpezs9mi4qbKjTPEc6v
function grab10Gif(offset) {
  var searchInput = $('.search-input').val()
  const options = {
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search',
    datatype: 'json',
    data: {
      q: searchInput,
      limit: 10,
      offset: offset,
      api_key: 'wPUI7ePlTSoX5fpezs9mi4qbKjTPEc6v',
    }
  }
  $.ajax(options).done(displayGIF)
}

function clearImages() {
  offset = 0
  $("main").empty()
}

var offset = 0

$(".search-form").submit(event => {
  event.preventDefault()
  clearImages()
  grab10Gif(offset)
})

$(window).scroll(function () {
  if ($(window).scrollTop() === $(document).height() - $(window).height()) {
    offset += 10
    grab10Gif(offset)
  }
})