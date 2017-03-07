import { Person } from './Person';

export interface Expertise {
    expertise: string,
    yearsOfExperience: number
}

export class Teacher extends Person {

    constructor(name:string, surname:string, private expertiseAreas:Array<Expertise> ) {
        super(name, surname);
    }

    addExpertise(expertise:Expertise) {
        this.expertiseAreas.push(expertise);
    }

    set expertise(expertise) {
        console.log('Expertise cannot be modiffied');
    }

}