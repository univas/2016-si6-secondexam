'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let router = require('./router');

let app = express();

app.use(bodyParser.json());
router(app);

app.listen(8080, () => {
    console.log('Server on-line!');
});