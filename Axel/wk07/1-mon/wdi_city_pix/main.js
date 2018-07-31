console.log('js')
var body = document.querySelector("body")
var optionList = document.querySelector("#city-type")

var NYC = document.createElement("option")
NYC.textContent = "NYC"

var SF = document.createElement("option")
SF.textContent = "SF"

var LA = document.createElement("option")
LA.textContent = "LA"

var SYD = document.createElement("option")
SYD.textContent = "SYD"

var ATX = document.createElement("option")
ATX.textContent = "ATX"

airportNodes = [NYC, SF, LA, SYD, ATX]

airportNodes.forEach(el => optionList.append(el))

optionList.addEventListener("change", event => {
  for (let i = 0; i < airportNodes.length; i++) {
    body.classList.remove(airportNodes[i].value.toLowerCase())
  }
  body.classList.add(event.target.value.toLowerCase())
})