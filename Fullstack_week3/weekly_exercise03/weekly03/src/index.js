import { getPeople } from "./people";
export class Person {
    name;
    age;
    occupation;
    private_salary;
    constructor(name, age, occupation, private_salary = 0) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.private_salary = private_salary;
    }
    getSalary() {
        return this.private_salary;
    }
}
let bjarne = new Person("Bjarne", 79, "Doctor", 100000000);
function introduce(Person) {
    let greeting = `Hello, my name is ${Person.name} and I am a ${Person.occupation}. I earn ${Person.private_salary} billion dollars a month.`;
    console.log(greeting);
    return (greeting);
}
function incrementAge(Person) {
    let newAge = Person.age + 1;
    Person.age = newAge;
    console.log('after incrementing the age it is now: ' + Person.age);
    return newAge;
}
function setSalary(person, salary) {
    person.private_salary = salary;
    console.log(`${person.name} is now earning ` + salary + ` per Month`);
    return salary;
}
introduce(bjarne);
incrementAge(bjarne);
setSalary(bjarne, 2000000);
console.log(bjarne.getSalary());
getPeople();
/* Create a module called people.ts that exports a function called getPeople(). This function should return a promise that resolves to an array of Person objects.
Create a module called peopleList.ts that exports a function called renderPeopleList(). This function should take in a container element and a list of people. It should render a list of people in the container element. Each person should be rendered as a div element with the following structure: */ 
