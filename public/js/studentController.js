(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(function(student){
            $("#name").replaceWith(student.name);
            $("#email").replaceWith(student.email);
            $("#photo").attr('src',student.photo);
            $("#status").replaceWith(student.status);
            
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()