import React, { createContext, useContext, useEffect, useState } from "react";


const Context = createContext();
export const useCart = () => useContext(Context);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addToCart = (item) =>{
        if (cart.length <= 0){
            item['qty'] = 1;
            setCart([item]);
            return;
        }

        let isExist = false;
        let cartTemp = [];
        for(let cItem of cart){
            if (cItem.id == item.id){
                cItem['qty'] = cItem['qty'] +1;
                isExist = true;
            }
            cartTemp.push(cItem); 
        }
        if (isExist == false){
            item['qty'] = 1;
            cartTemp.push(item); 
        }
        
        setCart(cartTemp); 
    }

    useEffect(()=>{
        if (cart.length){
            let cartAsString = JSON.stringify(cart);
            window.localStorage.setItem('cart', cartAsString);
        }
    }, [cart]);

    useEffect(()=>{
        //window.localStorage.removeItem('cart')
        let cartAsString = window.localStorage.getItem('cart');
        if (cartAsString){
            let cartAsArray = JSON.parse(cartAsString);
            setCart(cartAsArray);
        }
    }, []);

    const cartValues = {
        cart,
        addToCart
    }
    return(
        <Context.Provider value={cartValues}>
            {children}
        </Context.Provider>
    )
}