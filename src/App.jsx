import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Ready from "./Component/Ready/Ready";
import Youtube from "./Component/Youtube/Youtube";
import Work from "./Component/Work/Work";
import Footer from "./Component/Footer/Footer";


function App() {

  return (
    <>
    <Navbar/> 
    <Home/>
    <Ready/>
    <Youtube/>
    <Work/>
    <Footer/>
    </>
  )
}

export default App
