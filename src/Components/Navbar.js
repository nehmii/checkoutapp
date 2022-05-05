import React from "react";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { useCart } from "../provider/CartProvider";
import { useNavigate } from "react-router-dom";


export const Navbar = () =>{
    const { cart } = useCart();

    const navigate = useNavigate();

    return(
        <nav>
            <BiMenu />
            <label onClick={()=>navigate('/checkout')}>Checkout</label>
            <span>
                <BsFillCartPlusFill onClick={()=>navigate('/cart')} />
                <div>
                    <div><span>{cart.length}</span></div>
                </div>
            </span>
        </nav>
    )
}