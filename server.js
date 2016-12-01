"use strict"
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))


const hostname = 'localhost'
const port = 27016

app.listen(port, _ => console.log(`Server started: http://${hostname}:${port}`))