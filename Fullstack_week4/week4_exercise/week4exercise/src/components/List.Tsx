import React from "react"
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return(
                <li className="List">
                <div className="List-header">
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old.</p>
                <p>Works as a {person.occupation}.</p>
            </li>
            )
        })
    }
    return (
        <li>
            {renderList()}
        </li>
    )
}

export default List