import { Person } from './Person';

export interface Expertise {
    expertise: string,
    yearsOfExperience: number
}

export class Teacher extends Person {

    private expertiseAreas: Array<Expertise>;

    constructor(name:string, surname:string, expertiseAreas:Array<Expertise> ) {
        super(name, surname);
        this.expertiseAreas = expertiseAreas
    }

    addExpertise(expertise:Expertise) {
        this.expertiseAreas.push(expertise);
    }

    set expertise(expertise) {
        console.log('Expertise cannot be modiffied');
    }

}