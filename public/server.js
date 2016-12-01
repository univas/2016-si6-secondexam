"use strict"

const express = require ('express')
const api = express()

const port = 8080
const hostname = 'localhost'

app.listen (port, onStart())

function osStart() {
    console.log(`Server started at http://${hostname}:${port}`)
}