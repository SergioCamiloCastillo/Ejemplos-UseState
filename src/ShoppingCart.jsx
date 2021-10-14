import React, { useState } from 'react'
const initialCart = [
    {
        id: 1,
        title: "Product 1",
        description: "DEscip"
    },
    {
        id: 2,
        title: "Product 2",
        description: "DEscripcion 2"
    }

];
export default function ShoppingCart() {
    const [cart, setCart] = useState(initialCart)
    const deleteProduct = (productId) => {
        const changeCart = cart.filter(product => product.id !== productId);
        setCart(changeCart)
    }
    const addProduct = (newProduct) => {
        newProduct.id = Date.now();
        const changeCart = [
            newProduct,
            ...cart


        ];
        setCart(changeCart)

    }
    const updateProduct = (editProduct) => {
        const changeCart = cart.map(product => (
            product.id === editProduct.id ? editProduct : product
        ))
        setCart(changeCart);
    }
    return (
        <div>

            <button onClick={() => addProduct({ title: "Nuevo tituelo", description: "Nuevas desciprcion" })}>Add</button>

            {cart.map(product => (

                <div key={`shoppingCart-${product.id}`}>
                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    <h1>{product.id}</h1>
                    <h1>{product.title}</h1>
                    <button onClick={() => updateProduct({ id: product.id, title: "Nuevo tituelooooo", description: "Nuevas desciprcionnnn" })}>Update</button>

                </div>
            ))}
        </div>
    )
}
