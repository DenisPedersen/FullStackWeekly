import React, {useState} from "react";
import { IPeople as Props} from "./App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddPeople: React.FC<IProps> = ( {setPeople, people}) => {
    const [input, setInput] = 
    useState ({
        name: '',
        age: '',
        city: ''
    })


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
        ...input, 
        [e.target.name]: e.target.value
    })
}

const handleClick = () => {
    if (
        !input.name ||
        !input.age ||
        !input.city
    ){ return
    }
    setPeople( [
        ...people, {
            id: 100,
            name:input.name,
            age: parseInt(input.age),
            city: input.city
        }
    ])
    setInput( {
        name: "",
        age: "",
        city: ""
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
                placeholder="city"
                className="AddToList-input"
                value={input.city}
                onChange={handleChange}
                name="city"
            />
            <button className="AddToList-btn" onClick={handleClick}>
                Add a new person
            </button>
    </div>
    )
}
export default AddPeople