const express = require("express")
const Router = express.Router()
const studentDB = require("./studentsDB.json")

//api

function catchNameStudent(studentId){
    return studentsDB.find(student => student.id === studentId)
}


router.get("/", (request, response) => {
    response.json(studentsDB)
})

router.get("/:studentId", (request, response) => {
    let studentId = request.params.studentId
    let studentData = catchNameStudent(studentId)
    
    if(studentData){
        response.json(studentData)
    }
    else{
        response.status(404).send("Not Found")
    }
})


function situacao(nota1, nota2, nota3, nota4){
    var media = (nota1 + nota2 + nota3 + nota4) / 4
    var mensagem
    
    if(media < 50){
        mensagem = "Reprovado"
    }
    else if (media < 60) {
        mensagem = "Final"
    }
    else{
        mensagem = "Aprovado"
    }

}

module.exports = router