import React, {useState} from "react"

import {Headers} from './headers'
import {Row} from './row'

const Table = ( {Headers} ,rows) => {
    return (
        <div className="table">
            <h3>Table</h3>
            <h3>Here are  the headers: {Headers} </h3>
            <h3>Here the rows: {rows} </h3>
        </div>
    )
}

export default Table





/* Class Exercise 30 min.

    Create a Component called Table that uses composition to get rows and headers and has props: headers and rows, where headers is a react component and rows is an array of components.
    Create Headers component that has props: headers, where headers is an array of strings.
    Create Row component that has props: row, where row is an array of strings.
    Use this data to create a table:

people = [
  {id:1, name: "Helle", age: 20 },
  {id:2, name: "Ib", age: 30 },
  {id:3, name: "Bodil", age: 40 },
  {id:4, name: "Yasmin", age: 32 },
]; */