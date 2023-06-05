 import React from "react"
 import SignupForm from "./Components/SignupForm"; 
 import Form from "./Components/Form";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    
<div>
   <SignupForm />

   </div>
     <div>
    <Footer />
   </div>  
</>
  )
}

export default App;
