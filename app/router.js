'use strict';

let studentsApi = require('./studentsApi');

module.exports = (server) => {
    server.get('/student', studentsApi.getStudent);
};
