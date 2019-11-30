const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require("body-parser")
const handlebars = require('express-handlebars')

// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Add files
app.use(express.static(__dirname + "/public/"))

// Loading Routes
const indexRoute = require('./routes/Routes')

app.use('/', indexRoute)

// Server
module.exports = app

// app.listen(8686, function () {
//    console.log('servidor de teste##')
// })