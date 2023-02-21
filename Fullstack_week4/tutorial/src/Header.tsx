import React from 'react'
import { useState } from 'react'

interface HeaderProps {
    buttonText?: string
}

interface Movie {
    title: string,
    date: string,
    rating: string,
    description: string
}

export default function Header({buttonText}: HeaderProps) {

    const [count, setCount] = useState(0)
    const [movie, setMovies] = useState<Movie | null > (null)

    const increment = () => {
        setCount(count +1)
    }

  return (
    <div>
        <h1>HEADER</h1>
        <button onClick={increment}>{buttonText || "Click the button"}</button>
        <p>{count}</p>
    </div>
  )
}
