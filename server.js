const express = require("express");
const bodyType = require("body-type");
const studentsDB = require("studentsDB.json");

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('index.html')
})