import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AddPeople from './AddPeople'

export interface IPeople {
  people: {
      id: number
      name: string
      age: number
      city: string
  }[]
}


function App(): JSX.Element {
  const [people, setPeople] = useState<IPeople["people"]>([])

  async function fetchPeople() {
    const response = await fetch('http://localhost:3008/person')
    const data = await response.json()
    setPeople(data) 
    console.log(people)
  }

const morePeople = fetchPeople()

 
  
  return (
    <div className="App">
      <h1>PEOPLE ARE PEOPLE</h1>
      
        <PeopleViewer people={people}/>
    </div>
  )
}

export default App

const PeopleViewer: React.FC<IPeople> = ({people}) => {
  const peopleList = () => {
    
  return people.map((person) => {
    return (
      <li className='List'>
        <div className='List-Header'>
          <h2>Name: {person.name}</h2>
          <p>Id: {person.id}</p>
          <p>City: {person.city}</p>
          <p>Age: {person.age}</p>
        </div>
      </li>
    )
  })
}
  return ( 
    <div>
      {peopleList()}
      {AddPeople(people)}
    </div>
  )
}



/* Class Exercise 1

    
    Create a new project with npm init vite@latest my-react-ts-app -- --template react-ts
    Create a small web application using react and typescript to display a list of people. The application should have the following features:

    A list of people with their name, age, and occupation
    A button that adds a new person to the list
    A button that removes the last person from the list
    A button that sorts the list by age
    A form to add a new person to the list
    A form to update a persons details

    Use a json-server to store the data. You can use the following command to start the server:

    npx json-server --watch db.json --port 3001
 */
