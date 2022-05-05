import React, { useRef, useState, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';
import $ from 'jquery';


export const Menu = ({options}) =>{
    const btnRef = useRef();
    const overlayRef = useRef();

    useEffect(()=>{
        $(btnRef.current).on('click', (e)=>{
            e.stopPropagation();
            $(overlayRef.current).slideToggle('fast');
        });
        $('html').click(()=>{
            if ($(overlayRef.current).css('display') == 'block'){
                $(overlayRef.current).slideToggle('fast');
            }
        });
    }, []);
    return(
        <div className="menu-container">
            <span ref={btnRef}><BiMenu /></span>
            <div ref={overlayRef}>
                {options.map((opt, key)=>(
                    <div onClick={()=>opt.action()} key={key}>{opt.title}</div>
                ))}
            </div>
        </div>
    )
}
