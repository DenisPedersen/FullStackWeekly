"use strict";
const helloworld = (name) => {
    return `Hello ${name}`;
};
console.log(helloworld('Bjarne'));
document.getElementById('root').innerHTML = helloworld('Bjarne');
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
}
let names = ['Bjarne', 'Betül', 'Bilge', 'Tekin', 'Meryem', 'Aziz', 'Sofia', 'Anna', 'Ayla', 'Liya'];
let genders = ['male', 'female', 'shemale'];
let ages = [12, 13, 16, 19, 22, 60, 50, 80, 90, 1, 2, 777];
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
let personList = new Array;
function populate() {
    let personList = new Array;
    for (let i = 0; i < 10; i++) {
        let person = new Person(getRandomElement(names), getRandomElement(ages), getRandomElement(genders));
        personList.push(person);
    }
    return personList;
}
console.log(populate());
var values = personList.map(function (val, index) {
    console.log('Name: ' + val.name);
});
console.log(values);
/*
Create a class called Person with the following properties:
    name (string)
    age (number)
    gender (string)
Create a populator function to populate an array of 10 Person objects.
Create a function that can map the array of Person object to an html table with headers and 10 rows
Attach the table to the root element of the html page.
Add a button to the page that when clicked will sort the table by age in ascending order.
Change the button so it can toggle the sort order between ascending and descending.
 */ 
