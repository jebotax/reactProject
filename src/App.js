import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState , useEffect } from "react"
import Home from "./Home"; 
import About from "./About"; 
import Shop from "./Shop"; 
import Login from "./Login";  
import Register from  "./Register";
import Navbar from "./components/Navbar"
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    </>

  )
}

export default App;
