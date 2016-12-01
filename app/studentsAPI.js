"use strict"
const express = require("express")
const router = express.Router();
const studentsDB = require("./studentsDB.json");

function checkStatus(studentId) {
    var student = getStudentById(studentId);
    var media = calculateMedia(student);
    
    var result;
    
    if(media<50){
        result = "Reproved";
    }else if(media<60){
        result = "Final";
    }else{
        result = "Approved";
    }
    
    return result;
}

function getStudentById(studentId) {
    return studentsDB.find(student => student.id === studentId);
}

function calculateMedia(student) {
    var total = 0;
    for (var i = 0; i < 4; i++) {
        total+=student.grades[i]          
    }
    var media = total/4;

    return media;
    
}

router.get("/", (req, res) => {
    res.json(studentsDB);
})

router.get("/:studentId", function(req, res){
    let studentId = req.params.studentId
    let studentData = getStudentById(studentId)
    
    if(studentData) {
        res.json(studentData)
    }else{
        res.status(404).send("Not Found")
    }
})


module.exports = router
