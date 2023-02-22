import React from "react";
import { IPeople as Iprops } from "./App";

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
    </div>
  )
}
