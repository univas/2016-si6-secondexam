const express = require("express")
const Router = express.Router()
const studentDB = require("./studentsDB.json")

//api

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