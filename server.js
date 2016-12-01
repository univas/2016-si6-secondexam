"use strict"

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", function (req, res) {
    res.send('index.html')
})

app.use("/api/students", require("./app/studentApi"))

const hostname = "localhost"
const port = 3000

app.listen(port, function () {
    console.log(`Server started: http://${hostname}:${port}`)
})