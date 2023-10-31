import React from 'react'
import styled from "styled-components";

const Button = ({children , onClick}) => {
  return (
    <StyledButton onClick={onClick} >{children}</StyledButton>
  )
}

export default Button;


const StyledButton = styled.button`
    padding: 7px 15px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 15px;
    text-align: center;
    box-sizing: border-box;
    font-size: 17px;
    
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transform: scale(1.1);
        transition-duration: 0.4s;
    }
    &:active{
        background-color: greenyellow;
        transform: scale(1.2);
    }
`
