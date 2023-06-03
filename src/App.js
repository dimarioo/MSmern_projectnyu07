 import React from "react"
 import SignupForm from "./Components/SignupForm"; 
 import Form from "./Components/Form";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    
<div>
  <Routes>
   <Route path ='/register' element={<SignupForm />} />
   </Routes>
   </div>
     <div>
    <Footer />
   </div>  
</>
  )
}

export default App;
