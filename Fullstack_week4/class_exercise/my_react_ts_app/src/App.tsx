import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


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
      <ul>
        <div>
          <p>Id: {person.id}</p>
          <p>Name: {person.name}</p>
          <p>City: {person.city}</p>
          <p>Age: {person.age}</p>
        </div>
      </ul>
    )
  })
}
  return ( 
    <ul>
      {peopleList()}
    </ul>
  )
}



/* Class Exercise 1

    Start a new react project with typescript using vite: npm init vite@latest my_react_ts_app -- --template react-ts
    Run the project: npm run dev
    Open the project in your editor and open the App.tsx file.
    Change the text in the App.tsx file to something else.
    Save the file and see the changes in the browser.
    Open the App.tsx file again and change the to render a Person component, that can show details about a person based on the props that you pass to it. Let a person have the following properties:

    name: string
    age: number
    email: string */

