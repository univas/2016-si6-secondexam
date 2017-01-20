
"use strict"
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", function (request, response) {
  response.sendFile('index.html')
})

app.use("/api/students", require("./app/studentsApi"))

const port = 9090
const hostname = 'localhost'
app.listen(port, _ => console.log(`Server started: http://${hostname}:${port}`))

