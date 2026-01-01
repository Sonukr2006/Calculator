import React from "react";
import Style from './Button.module.css';

const Button = ({buttonHandler, active}) => {
  const buttonItem = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "/",
    "%",
    "=",
  ];

  return (
    <>
      {buttonItem.map((name) => (
        <button key={name} className={`${Style.styles} ${!active && 'btn btn-success'}`} onClick={()=>buttonHandler(name, active)}>{<div className={Style.div}>{name}</div>}</button>  
      ))}
    </>
  );
};

export default Button;
