
export class Person {
    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    public getFullName() {
        return `Mr.${this.name} + ${this.surname}`;
    }

}