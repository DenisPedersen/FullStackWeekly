const container = document.getElementById('app')
import { Person } from './index';
import { getPeople } from "./people";
let peopleList = getPeople()

export function renderPeopleList(container: HTMLElement, peopleList: Person[]) {
    const peopleDiv = peopleList.map(element => {
        const div = document.createElement("div");
        div.innerHTML =     
        `<div class="person">
        <h2 class="person__name"> Name : ${element.name}</h2>
        <p class="person__occupation">Occupation: ${element.occupation}</p>
        <p class="person__age">Age: ${element.age}</p>
        <p class="person__salary">Salary: ${element.getSalary()}</p>
</div>`
return div
    })

    peopleDiv.forEach((div => container.appendChild(div)))
}

/* Create a module called peopleList.ts that exports a function called renderPeopleList(). This function should take in a container element and a list of people. It should render a list of people in the container element. Each person should be rendered as a div element with the following structure: */