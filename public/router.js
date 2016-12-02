//Criação da rota

//Exemplo var path __dirname : http://stackoverflow.com/questions/7083045/fs-how-do-i-locate-a-parent-folder

var path = require('path');
path.resolve = __dirname + "/public/";

module.exports = function(app) {
   app.get("/", function(request, response) {
       response.sendFile(path + "index.html");
   });

  app.get("/api/students/:id", function (request, response) {
        const id = request.params.id;
       console.log(id);
    });
};

