rest.use(express.static("public"))

rest.get("/",function(request,response){
    response.sendFile('index.html')
})


rest.use("rest/students",require("./app/rest"))


const hostname ="localhost"