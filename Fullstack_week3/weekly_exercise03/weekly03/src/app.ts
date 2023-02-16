import { getPeople } from "./people";
import { renderPeopleList } from "./peopleList";

const container = document.getElementById('app')

let persons = getPeople()

renderPeopleList(container, await persons)


export {renderPeopleList}