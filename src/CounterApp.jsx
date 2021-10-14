import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(prevCounter => prevCounter+1);
    }
    return (
        <div>
            <button onClick={() => handleClick()}>Incrementar</button>
            <h1>Clicks:{counter}</h1>
        </div>
    )
}
