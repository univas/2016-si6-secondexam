"use strict"

const bodyParser = require ('body-parser')
const express = require ('express')
const api = express()

const port = 8080
const hostname = 'localhost'

require('./routes.js')(app)

app.use(bodyParser())
app.use(express.static("public"))

app.listen (port, onStart())

function onStart() {
    console.log(`Server started at http://${hostname}:${port}`)
}