import React from 'react';
import { BiMenu } from 'react-icons/bi';


export const Menu = () =>{
    return(
        <div className="menu-container">
            <BiMenu/>
            <div>
                {[1,2,3,4,5,6,2,3,1].map((opt, key)=>(
                    <div>title menu</div>
                ))}
            </div>
        </div>
    )
}