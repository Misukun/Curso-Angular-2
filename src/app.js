"use strict";
var Teacher_1 = require('./Teacher');
var newTeacher = new Teacher_1.Teacher('Jon', 'Rojí', []);
var add = function (name, years) {
    var newExpertise = {
        expertise: name,
        yearsOfExperience: years
    };
    newTeacher.addExpertise(newExpertise);
    document.querySelector('#techList').innerHTML += "<li>" + newExpertise.expertise + " - " + newExpertise.yearsOfExperience + "</li>";
};
document.querySelector('#add').addEventListener('click', function (ev) {
    var name = document.querySelector('#name').value;
    var years = parseInt(document.querySelector('#years').value);
    add(name, years);
});
//# sourceMappingURL=app.js.map