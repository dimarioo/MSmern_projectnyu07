import React from 'react'
import '../App.css'
import Teamimage from "./Teamimage.jpg"


function Home(){
    return(
        <div className='Home'>
            <img
                    
                    src={Teamimage}
                    alt='teamlogo'
                  />
        </div>
    )
}

export default Home;