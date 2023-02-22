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
        </div>
    )
}

export default AddToList