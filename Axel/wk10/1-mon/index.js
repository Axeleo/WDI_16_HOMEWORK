

const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.static('public'))
const PORT = 7777
const _ = require('lodash')
app.set('view engine', 'ejs')

const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
const colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]


// Routes

app.get('/', (req, res) => {
  let info = {
    name: '',
    compliments: _.sample(compliments),
    color: _.sample(colors)
  }
  res.render('index', info)
})

app.get('/:name', (req, res) => {
  let name = req.params.name
  let info = {
    name,
    compliments: _.sample(compliments),
    color: _.sample(colors)
  }
  res.render('index', info)
})
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`)
})






