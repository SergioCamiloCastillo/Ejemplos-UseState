import React, { useState } from 'react'
const initialProduct = {
    title: "Este es el titulo",
    description: "Esta es la descripcion"
}
export default function ProductApp() {
    const [product, setProduct] = useState(initialProduct);
    const updateProduct = (property, value) => {
        setProduct({
            ...product,
            [property]: value
        });
    }
    return (
        <div>
            <button onClick={() => updateProduct("description", 'hola goonorrea')}>Update</button>
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
            <div>
                <pre>{JSON.stringify(product, null, 2)}</pre>
            </div>
        </div>
    )
}
