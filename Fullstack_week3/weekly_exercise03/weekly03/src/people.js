import persons from './people.json';
import { Person } from './index';
export async function getPeople() {
    let personList = new Array;
    persons.forEach(element => {
        let newPerson = new Person(element.name, element.age, element.occupation, element.salary);
        personList.push(newPerson);
    });
    console.log(personList);
    return personList;
}
/*
Create a module called peopleList.ts that exports a function called renderPeopleList(). This function should take in a container element and a list of people. It should render a list of people in the container element. Each person should be rendered as a div element with the following structure:
*/ 
