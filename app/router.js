'use strict';

module.exports = (server) => {
    server.get('/test', (req, res) => {
        res.sendStatus(200);
    });
};
