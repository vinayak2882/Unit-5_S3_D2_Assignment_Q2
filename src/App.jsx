
import './App.css'
import {Navbar} from "./components/navbar";
import {ThemeContext} from "./contexts/ThemeContext";
import {useContext} from "react"
import {Form} from "./components/Form"

function App() {
  const {theme} =useContext(ThemeContext)
  return (
    <div className="App" data-theme={theme}>
      <Navbar></Navbar>
      <hr></hr>
      <Form ></Form>
     
    </div>
  )
}

export default App
