"use strict";
var Person = (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getFullName = function () {
        return "Mr." + this.name + " + " + this.surname;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map