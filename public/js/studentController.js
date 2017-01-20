'use strict';

(() => {

    function getStudentById(id) {
        $.ajax({
            method: 'GET',
            url: '/students?mat=' + id
        }).done(student => printStudent(student));
    }

    $('form').on('submit', event => {
        let id = $('#studentId').val();
        getStudentById(id);
        return false;
    });

    function printStudent(student) {
        printName(student.name);
        printEmail(student.email);
        printPhoto(student.photo);
        printStatus(student.status);
    }

    function printName(name) {
        $('#name').html(name);
    }

    function printEmail(email) {
        $('#email').html(email);
    }

    function printPhoto(photo) {
        $('#photo').attr('src', photo);
    }
    
    function printStatus(status) {
        $('#status').html(status);
    }

})();