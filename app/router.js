'use strict';

let studentsApi = require('./studentsApi');

module.exports = (server) => {
    server.get('/students', studentsApi.getStudent);
};
