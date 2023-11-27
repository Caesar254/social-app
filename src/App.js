import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./Nav";
import Posts from "./Posts";
import Footer from "./Footer";
import Login from "./Login";
import Loggged from "./Logged"





function App()  {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
     
      
        <Routes>
        
        <Route exact path="/" element={<Posts />}></Route>
        {/* <Route path='/login' element={<Login/>}></Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/logged" element={<Loggged />} />
       
        
        
          </Routes> 
      
     <Footer/>
      
      
      </BrowserRouter>
          
    </div>
  )
}

export default App
