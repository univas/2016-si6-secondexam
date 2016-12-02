"use strict"

// dependencies
const express = require("express");
var router = express.Router();
var router = require('./router.js');
const studentDB = require("./studentDB.json");

// private
function checkStudents(studentId) {
    return studentDB.find(student => studentId.id === studentId);
}

//Função de verificação do estudante

//Função para pegar o ID do estudante
function checkStudents(request, response) {
    var studentID = request.query.mat;
    if (studentID) {
        
        //checa ID
        var student = students.find(function(student){
             student.id === studentID; });
             
        //checa SITUACAO
        var student = students.find(function(student){
            student.id === studentID;
            student.situation = checkSituation(student)}); 
        
        if (student) {
            response.send(student);
        } else {
            response.send(student);
        }

//Função que verifica a situação do Aluno
function checkSituation() {
    var note = verifyNote(student);
    if (note < 50) {
        return 'REPROVADO';
    }
    else if (note >=50 && <60) {
        return 'FINAL';
    }
    else {
        return 'APROVADO';
    }

// public api

router.get("/", (request, response) => {
    response.json(studentDB);
});

router.get("/:studentId", (request, response) => {
   var studenId = request.params.studentId
   var studentData = checkStudents(studentId);
   if (studentData) {
      response.json(studentData);
   }
   else {
      response.status(404).send("Error 404 - Not Found!")
   }
});

// Exportando o ROUTER
module.exports = router;