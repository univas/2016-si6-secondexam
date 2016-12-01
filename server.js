const express = require("express");
const bodyParser = require("body-parser")
var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('./public/index.html')
})

app.get('/')

app.use("/api/students", require ("./app/studentsAPI"));

app.listen(3000);