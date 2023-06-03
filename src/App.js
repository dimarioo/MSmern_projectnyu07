 import React from "react"
 import SignupForm from "./Components/SignupForm"; 
 import Form from "./Components/Form";
 import Welcome from "./Components/Welcomepage";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    
<div>
  <BrowserRouter>
      <Routes>
        <Route path ='/' element={<SignupForm />} />
        <Route path ='/Welcomepage' element={<Welcome />} />
      </Routes>
  </BrowserRouter>
   </div>
     <div>
    <Footer />
   </div>  
</>
  )
}

export default App;
