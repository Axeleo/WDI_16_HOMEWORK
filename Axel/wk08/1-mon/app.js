
var brushBox = $(".brush-box")

$("form").submit(function () {
  var setColor = $(".color-input")[0].value
  event.preventDefault()
  brushBox[0].style.backgroundColor = setColor
})


$(".wrapper").mouseover(ev => {
  event.target.style.backgroundColor = brushBox[0].style.backgroundColor
})