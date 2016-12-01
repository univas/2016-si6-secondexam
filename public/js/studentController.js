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
            var status = checkStatus(student.id);
            console.log(status);
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()