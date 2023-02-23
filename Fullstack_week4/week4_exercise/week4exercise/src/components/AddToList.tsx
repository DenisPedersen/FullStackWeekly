import React, {useState} from "react";
import { IState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList: React.FC<IProps> = ( {setPeople, people}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        occupation: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    const removeLastFromList = () => {
        setPeople(people.slice(0,-1))
    }

    const sortByAge = () => {
        setPeople([...people].sort((a,b) => a.age - b.age))
         }
    
        
    const updatePerson = (
          ): void => {
            setPeople(people => people.map((person) => {
              if (person.name === input.name) {
                return {                        // <-- return new object reference
                  ...person,                  // <-- shallow copy previous state
                  age: parseInt(input.age), // <-- set property value
                  occupation: input.occupation
                }
              }
              return person; // <-- else return previous state
            }));
            ;
        setInput( {
            name: "",
            age: "",
            occupation: ""
        })
    };
    

         
    const handleClick = () => {
        if(
            !input.name  || !input.age
        ) {
            return
        }
        setPeople([
            ...people, 
            {
                name: input.name,
                age: parseInt(input.age),
                occupation: input.occupation
            }
        ]);
        setInput( {
            name: "",
            age: "",
            occupation: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="number"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Occupation"
                className="AddToList-input"
                value={input.occupation}
                onChange={handleChange}
                name="occupation"
            />
            <button className="AddToList-btn" onClick={handleClick}>
                Add to List
            </button>
            <button className="AddToList-btn" onClick={removeLastFromList}>
                Remove last entry from List
            </button>
            <button className="AddToList-btn" onClick={sortByAge}>
                Sort by age
            </button>
            <button className="AddToList-btn" onClick={updatePerson}>
                Update person
            </button>
        </div>
    )
}

export default AddToList