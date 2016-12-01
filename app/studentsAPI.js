const studentsDB = require("./studentsDB.json");

function checkStatus(studentId) {
    var student = findStudent(studentId);
    var media = calculateMedia(student);
    if(media<50){
        console.log("Reproved");
    }else if(media<60){
        console.log("Final")
    }else{
        console.log("Approved")
    }
}

function findStudent(studentId) {
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

checkStatus("2017011");
