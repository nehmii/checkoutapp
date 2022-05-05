import React, { useEffect } from "react";

export default function Product({product, onAdd}){

    return(
        <div className="procuct-container">
            <div className="procuct-card">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                {product.qty && <p>Qty: {product.qty}</p>}
                <p>Inventry: {product.quantity}</p>
                <div>${product.price.toFixed(2)}</div>
                <div><button onClick={()=>onAdd?.(product)}>Add to Cart</button></div>
            </div>
        </div>
    )
}