"use strict"

const express = require ("express")
const bodyParser = require ("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", function (request, response) {
  response.sendFile("index.html")
})

app.use("/api/students", require("./app/studentsApi"))

