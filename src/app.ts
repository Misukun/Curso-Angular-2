import { Teacher, Expertise } from './Teacher';

let newTeacher: Teacher = new Teacher('Jon', 'Rojí', []);

let add = (name:string, years:number) => {

    let newExpertise:Expertise = {
        expertise: name,
        yearsOfExperience: years
    };

    newTeacher.addExpertise(newExpertise);
    document.querySelector('#techList').innerHTML += `<li>${newExpertise.expertise} - ${newExpertise.yearsOfExperience}</li>`
};

document.querySelector('#add').addEventListener('click', (ev) =>  {
    var name = (<HTMLInputElement>document.querySelector('#name')).value;
    var years = parseInt((<HTMLInputElement>document.querySelector('#years')).value);
    (<HTMLFormElement>document.querySelector('#technology')).reset();
    add(name, years);
});
