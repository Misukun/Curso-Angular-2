"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person_1 = require('./Person');
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, surname, expertiseAreas) {
        _super.call(this, name, surname);
        this.expertiseAreas = expertiseAreas;
    }
    Teacher.prototype.addExpertise = function (expertise) {
        this.expertiseAreas.push(expertise);
    };
    Object.defineProperty(Teacher.prototype, "expertise", {
        set: function (expertise) {
            console.log('Expertise cannot be modiffied');
        },
        enumerable: true,
        configurable: true
    });
    return Teacher;
}(Person_1.Person));
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map