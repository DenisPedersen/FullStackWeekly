import React, { useState, useEffect } from 'react'
import './App.css'
import AddToList from './components/AddToList'
import List from './components/List'

export interface IState {
  people: {
    id: number
    name: string
    age: number
    occupation: string
    img: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([])
  async function fetchPeople() {
    const response = await fetch('http://localhost:3008/person')
    const data = await response.json()
    setPeople(data) 
    console.log(people)
  }
  useEffect (()=> {
    fetchPeople()
  },[])

  return (
    <div className="App">
      <h1>List of all the people in the database</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  )
}

export default App

/*
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
