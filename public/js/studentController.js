(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(student => {
            console.log(student);
            
            var h2 = document.getElementById('nome');
            h2.innerHTML = student.name;
            var email = document.getElementById('email');
            email.innerHTML = student.email;
            
            var status = document.getElementById('status');
            var media = (student.grades[0]+student.grades[1]+student.grades[2]+student.grades[3])/4;
            if ( media >= 60 ) {
                status.innerHTML = "Approved";
            } else if ( (media >= 50) && (media < 60) ) {
                status.innerHTML = "Final";
            } else {
                status.innerHTML = "Reproved";
            }
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()