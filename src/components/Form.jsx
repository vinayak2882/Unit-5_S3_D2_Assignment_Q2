import styled from "styled-components"
import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"; 

const Form = () => {
 
  var {theme}=useContext(ThemeContext)
  
   const Form_style =styled.section
  

 
  return (
    <>
   
      <h1>Information</h1>
      <hr></hr>
      <form>
        <input name="name" type="text" placeholder="Enter Name"></input>
        <br></br>

        <input name="age" type="number" placeholder="Enter Age"></input>
        <br></br>

        <input name="address" type="text" placeholder="Enter Address"></input>
        <br></br>

       
        <input type="submit" value="Submit" className="submit"></input>
      </form>
   
    </>
  );
};

export { Form };
