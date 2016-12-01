const express = require("express");

var app = express();

//app.use(bodyParser.json());
//app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('./public/index.html')
})

app.use("/api/students", require ("./app/studentsAPI"));

app.listen(6000);