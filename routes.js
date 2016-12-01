const path = __dirname + "/public/";

const studentsAPI = require('./app/studentsAPI.js');

module.exports = function(app) {    
    app.get("/", function(request, response) {
        response.sendFile(path + "index.html");
    });
    
    app.get("/api/students/:id", function (request, response) {
        const id = request.params.id;
        studentsAPI.find(id, response);
    });
}