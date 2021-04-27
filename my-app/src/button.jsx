import React from 'react';
import "./button.css";


function onClick() {
    window.location.href="http://google.com";
}

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    return (<button onClick = {onClick} type = {type}> {children}</button>
    ); };