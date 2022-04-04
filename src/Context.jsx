import React, {createContext, useState} from 'react';

export const Con = createContext();

const Context = ({children}) => {
    const [cart, setCart] = useState([]);
    return <Con.Provider value={{cart,setCart}}>{children}</Con.Provider>
}

export default Context;