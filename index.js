'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let router = require('./app/router');

let app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

router(app);

app.listen(8080, () => {
    console.log('Server on-line!');
});