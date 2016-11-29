"use strict"

const pad = require("pad")
const faker = require("faker")
const fs = require("fs")

function getRandomGrade() {
    return Math.floor(Math.random() * 100 + 1)
}

const studentsDB = []
faker.locale = "pt_BR"

for (let studentNumber = 1; studentNumber <= 100; studentNumber++) {
    const firstName = faker.name.firstName() 
    const lastName = faker.name.lastName()
    const year = 2017

    studentsDB.push({
        id: year + pad(3, studentNumber, "0"),
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

const output = JSON.stringify(studentsDB, null, 2)
fs.writeFile("./app/studentsDB.json", output, function(err) {
    if(err) throw err
    console.log("The studentsDB.js has been generated!")
})