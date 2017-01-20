var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile('index.html')
})


app.use("/api/student", require('./app/index'))

app.listen(3000, console.log('Server started'))