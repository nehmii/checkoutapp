import React,{useState,useEffect,useContext} from "react";
import Product from "./Product";
import {Con} from "../Context";

const Cart = () => {
    const {cart} = useContext(Con);
    // const [totalPrice, setTotalPrice] = useState(0);

    console.log(cart);

    // function addingPrice() {
    //     setTotalPrice(cart.reduce((acc, el) => acc + Number(el.price), 0));
    // }

    // useEffect(() => {
    //     addingPrice();
    // }, [cart]);

    return(
        <>
        <span>Total Product Added - {cart.length}</span>
        <br />
        <span>Total - $</span>
        <div className='productContainer'>
            {cart.map(prod => (
                <Product p={prod} key={prod.id} />
            ))}
        </div>
        </>
    )
}

export default Cart;