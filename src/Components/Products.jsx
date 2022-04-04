import React from "react";
import Product from './Product';

export default function Products(props){
    const {products, onAdd}=props;

    return(
        <main>
            <h1>Products</h1>
            <div>
                {products.map((product)=>(
                    <Product key={product.id} onAdd={onAdd} product={product}/>
                ))}
            </div>
        </main>
    )
}