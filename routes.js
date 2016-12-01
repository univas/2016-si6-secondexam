const path = __dirname + "/public/";

module.exports = function(app) {
    app.get("/", function(request, response) {
        response.sendFile(path + "index.html");
    });
}