
var timer = {
  reset: document.querySelector('#reset'),
  start: document.querySelector('#start'),
  pause: document.querySelector('#pause'),
  timerDisplay: document.querySelector('#timer'),
  timerInit: function () {
  timerStart = setInterval(timer.updateTime, 1000)
  },
  stopTimer: function () {
  clearInterval(timerStart)
  },
  seconds: 0,

  updateTime: function() {
  timer.seconds += 1
  timer.timerDisplay.textContent = timer.seconds
  },
  resetListener: reset.addEventListener('click', function () {
  timer.stopTimer()
  seconds = 0
  timer.timerDisplay.textContent = 'Stop Watch'
  }),
  startListener: start.addEventListener('click', function () {
  timer.timerInit()
  }),
  pauseListener: pause.addEventListener('click', function () {
  timer.stopTimer()
  })
  }
