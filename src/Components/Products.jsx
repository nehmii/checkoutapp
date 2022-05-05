import React, { useState } from "react";
import { useCart } from "../provider/CartProvider";
import { Navbar } from "./Navbar";
import Product from './Product';

export default function Products({products}){
    const { addToCart } = useCart();

    const addCart = (product) =>{
        addToCart(product);
    }

    return(
        <main>
            <Navbar />
            <h1>Teen and Adults Heels</h1>
            <div>
                {products.map((product)=>(
                    <Product key={product.id} onAdd={addCart} product={product}/>
                ))}
            </div>
        </main>
    )
}