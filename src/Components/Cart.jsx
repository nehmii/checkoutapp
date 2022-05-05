import React,{useState,useEffect,useContext} from "react";
import Product from "./Product";
import { useCart } from "../provider/CartProvider";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart } = useCart();
    
    const navigate = useNavigate();

    return(
        <>
        <span>Total Product Added - {cart.length}</span>
        <br />
        <span>Total - $</span>
        <div className='productContainer'>
            {
                cart.length ?
                cart.map((prod, index) => (
                    <Product product={prod} key={index} />
                )) :
                <div>
                    <p>There is not item in your cart</p>
                    <p>Please <span onClick={()=>navigate('/')} style={{color: 'dodgerblue', cursor: 'pointer'}}>return</span> to the home page to add item to the cart.</p>
                </div>
            }
        </div>
        </>
    )
}

export default Cart;