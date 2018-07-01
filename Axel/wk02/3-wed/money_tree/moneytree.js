console.log('creating wealth')


var dollar = "$"
var space = " "
var createPyramid = function (row) {
  for (var i = 1; i < row + 1; i++) {
    console.log(space.repeat(row - i) + dollar.repeat(i + (i - 1)))
  }
}
