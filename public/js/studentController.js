//Função já criada
(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(student => {
            console.log(student)
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
 //Função já criada
 
 //Exemplo STACKOVERFLOW: http://pt.stackoverflow.com/questions/87035/como-imprimir-o-conte%C3%BAdo-de-uma-p%C3%A1gina-com-bootstrap-e-jquery 
 
    function studentDataPrint(student) {
        studentName(student.name);
        studentEmail(student.email);
        studentPhoto(student.photo);
        studentStatus(student.situation);
    }

    //Imprime o nome do Estudante
    function studentName(name) {
        $('#name').html(name);
     }
    
   //Imprime o ID do estudante
   function studentId(studentId){
        $("#studentId").html(studentId)
    }
    
    //Imprime e-mail do estudante    
    function studentEmail(email) {
        $('#email').html(email);
    }
    
    //Imprime a foto do estudante
    function studentPhoto(photo) {
        $('#photo').html('src', photo);
    }
  
    //Imprime o status do estudante
    function studentStatus(status) {
        $('#status').html(status);
    }
})();