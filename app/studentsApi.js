'use strict';

let students = require('./studentsDB.json');
module.exports = (() => {

    return {
        getStudent: getStudent
    };

    function getStudent(req, res, next) {
        let id = req.query.mat;
        if (id) {
            let student = students.find(student => student.id === id)
            if (student) {
                res.status(200).send(student);
            } else {
                res.status(200).send({ message: 'Student not found.' });
            }
        } else {
            res.status(400).send({ message: 'Parameter \'mat\' is missing in the query string.' });
        }
    }
})();