"use strict"

// Constantes para a criação do server
const express = require("express")
const bodyParser = require("body-parser")

// Configurações do EXPRESS
const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))

// Arquivo que será aberto
app.get("/", function (request, response) {
  response.sendFile("index.html")
})

// API do estudante
app.use("/api/student", require("./app/studentApi"))

// Subindo o servidor
const hostname = "localhost"
const port = 9000
app.listen(port, _ => console.log(`Server started: http://${hostname}:${port}`))