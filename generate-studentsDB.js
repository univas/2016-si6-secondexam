"use strict"

const pad = require("pad")
const faker = require("faker");
faker.locale = "pt_BR"

function getRandomGrade() {
    return Math.floor(Math.random() * 100 + 1)
}

const studentsDB = []
for (let studentCode = 1; studentCode <= 100; studentCode++) {
    const firstName = faker.name.firstName() 
    const lastName = faker.name.lastName()
    const year = 2017

    studentsDB.push({
        code: year + pad(3, studentCode, "0"),
        name: faker.name.findName(firstName, lastName),
        email: faker.internet.email(firstName, lastName).toLowerCase(),
        photo: faker.image.people(128, 128),
        grades: [
            getRandomGrade(),
            getRandomGrade(),
            getRandomGrade(),
            getRandomGrade()
        ]
    })
}

console.log(JSON.stringify(studentsDB, null, 2));