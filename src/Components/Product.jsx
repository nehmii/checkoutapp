import React from "react";

export default function Product(props){
    const {product,onAdd}=props;
    return(
        <div>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <div>${product.price.toFixed(2)}</div>
            <div><button onClick={()=>onAdd(product)}>Add to Cart</button></div>
        </div>
    )
}