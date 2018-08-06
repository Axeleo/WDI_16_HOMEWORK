
var brushBox = $(".brush-box")

$("form").submit(function () {
  var setColor = $(".color-input")[0].value
  event.preventDefault()
  brushBox[0].style.backgroundColor = setColor
})


$(".wrapper").click(ev => {
  event.target.style.backgroundColor = 'green'
})