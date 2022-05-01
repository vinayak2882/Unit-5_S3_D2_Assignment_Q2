

import { useState } from "react"
import styled from "styled-components"
import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"
import { Button } from "./Button"
export const Navbar=()=>{
   var {theme}=useContext(ThemeContext)
    const {toggleTheme}=useContext(ThemeContext)
   
    const Button_style = styled.section`
    background: ${theme==="light" ? "black" : "white"};
     display:flex;
     margin:"10px";
     height:"100px";
     padding:"15px";
     
     & button{
     background: ${theme==="dark" ? "black" : "red"};
     color: ${theme==="light" ? "black" : "Black"};
    color: #ffffff;
    height: 40px;
    font-size: 50%;
    /* border-radius: 50px; */
    border: 2px solid grey;
    margin-left: 75%;
    }`
 
    return (
        <Button_style>
        <nav >
          <Button></Button>
        </nav>
        </Button_style>  
    )
}