var snare = new Audio ('sounds/snare.wav')
var hiHat = new Audio ('sounds/hi-hat.wav')
var kick = new Audio ('sounds/kick.wav')

var snareHit = function () {
  snare.play()
}
var kickHit = function () {
  kick.play()
}
var hiHatHit = function () {
  hiHat.play()
}



var snareBtns = document.querySelectorAll('.snare button')

for (i = 0; i < 8; i++) {
  snareBtns[i].addEventListener('click', snareHit)

}


