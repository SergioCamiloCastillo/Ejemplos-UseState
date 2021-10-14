import React,{useState} from 'react'

export default function ErrorApp() {
    const [error, setError] = useState('');

    return (
        <div>
            <button onClick={()=>setError('error #1')}>Error</button>
            {
                error && <h1>{error}</h1>
            }
        </div>
    )
}
