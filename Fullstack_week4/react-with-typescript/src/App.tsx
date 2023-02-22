import React, {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: "Bjarne Bjarnesen",
      age: 22,
      url: 'https://as1.ftcdn.net/v2/jpg/01/77/99/04/1000_F_177990416_bTEgku9Hug8FHcsbA4NjrxjLgmBE6GvY.jpg',
      note:'Smuk og flot mand'
    }
  ])

  return (
    <div className="App">
       <h1>PEOPLE INVITED TO OUR PARTY</h1>
       <List people={people}/>
       <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
