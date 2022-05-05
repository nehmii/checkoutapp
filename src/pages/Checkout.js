import React, { useEffect, useState } from "react";
import { useCart } from "../provider/CartProvider";
import { updateProductQty } from "../Rservices/Productsservice";
import { AiFillCloseSquare } from 'react-icons/ai';

export const Checkout = () =>{
    const { cart } = useCart();

    const [openOverlay, setOpenOverlay] = useState(false);

    const [unavailableProducts, setunavailableProducts] = useState([]);

    const onCheckout = () =>{
        const ProdThatIsOutOfStock = updateProductQty(cart);
        if (ProdThatIsOutOfStock.length){
            setOpenOverlay(true);
            setunavailableProducts(ProdThatIsOutOfStock);
        }
    }

    useEffect(()=>{
       
        onCheckout();
    }, [cart]);
    return(
        <div>
            <button onClick={()=>setOpenOverlay(true)} hidden={openOverlay}>See Unavailable products.</button>
            <div className="overlay" hidden={!openOverlay}>
                <AiFillCloseSquare onClick={()=>setOpenOverlay(false)} className="overlay-close" />
                List of item that is not availbale
                {unavailableProducts.map((prod, key)=>(
                    <div style={{margin: '20px', borer: '1px solid red'}} key={key}>
                        <div>{prod.name}</div>
                        <div>Available Products is: {prod.availableQty}</div>
                        <div>Quantity requsted is : {prod.qty}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}