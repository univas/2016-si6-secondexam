(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(student => {
            printStudent(student)
        });
    }
    
    function printStudent(student){
        printName(student);
        printEmail(student);
        printImg(student);
        printStatus(student);
    }
    
    function printName(student){
        var name = document.getElementById('nameStudent')
        name.innerHTML = student.name;
        
    }
    
    function printEmail(student){       
        var email = document.getElementById('email');
        email.innerHTML = student.email;
    }
    
    function printImg(student){
       var photo = document.getElementById('photo');
       photo.src = student.photo
    }
    
    function printStatus(student){
        var notas = student.grades;
        var total = 0;
        
        for(var i = 0; i < 4; i++){
            total += notas[i]
        }
        
        var media = total/4;
        
        var status = document.getElementById('status')
        if(media < 50){
            status.innerHTML = "Reprovado"
        }else if(media < 60){
            status.innerHTML = "Final"
        }else{
            status.innerHTML = "Aprovado"
        }
    }
    

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()