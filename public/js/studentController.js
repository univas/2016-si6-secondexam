(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(function(student){
            $("#name").replaceWith('<h2 id="name">' + student.name + '</h2>');
            $("#email").replaceWith('<span id="email">'+student.email+'</span>');
            $("#photo").attr('src',student.photo);
            $("#status").replaceWith('<span id="status">'+student.status+'</span>');
            
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()