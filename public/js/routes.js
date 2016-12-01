const path = __dirname + "/public/"

module.exports = function(app) {
    app.get ("/", function(request, response) {
        responde.sendFile(path + "index.html")
    })
}

app.post("/calcula", function(request, response) {
    
})





