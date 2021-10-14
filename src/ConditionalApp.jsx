import React, { useState } from 'react'

export default function ConditionalApp() {
    const [condition, setCondition] = useState(true);
    return (
        <div>
            <button onClick={() => setCondition(!condition)}>Toggle</button>
           {/*  {
                condition ? <h1>Esta en verdadero</h1> : <h1>Esta en falso</h1>
            } */}
            <h1>The condition is {`${condition}`}</h1>
        </div>
    )
}
