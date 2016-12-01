const path = __dirname + "/public/"

module.exports = function(app) {
    app.use ("/", function(request, responde) {
        responde.sendFile(path + "index.html")
    })
}

