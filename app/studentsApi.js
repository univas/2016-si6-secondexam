'use strict';

let students = require('./studentsDB.json');
module.exports = (() => {

    return {
        getStudent: getStudent
    };

    function getStudent(req, res, next) {
        let id = req.query.mat;
        if (id) {
            let student = students.find(student => student.id === id);
            student.situation = getSituation(student);
            if (student) {
                res.status(200).send(student);
            } else {
                res.status(200).send({ message: 'Student not found.' });
            }
        } else {
            res.status(400).send({ message: 'Parameter \'mat\' is missing in the query string.' });
        }
    }

    function getSituation(student) {
        let grade = calculateGrade(student);
        if (grade < 50) {
            return 'Disapproved';
        }
        if (grade < 60) {
            return 'Final';
        }
        return 'Approved';
    }

    function calculateGrade(student) {
        if (student.grades.length) {
            return student.grades.reduce((previous, current) => previous + current, 0) / student.grades.length;
        }
        return 0;
    }
})();