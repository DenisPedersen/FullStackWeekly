import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table, {Headers, Row} from './components/table';

const people = [
  {id:1, name: "Helle", age: 20 },
  {id:2, name: "Ib", age: 30 },
  {id:3, name: "Bodil", age: 40 },
  {id:4, name: "Yasmin", age: 32 },
];

function App() {
  return (
    <div className="App">
          <Table header={
               
          people.map(person) => {
            <Row row={(person.id, person.name, person.age.toString())}
          }


    </div>
  );
}

export default App;
