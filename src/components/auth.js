import React from 'react'
import '../App.css'

function Auth() {
  return (
    <div className='auth'>
        <h2>User Sign-Up</h2>
        <div className="inputs">

            <input type="text" placeholder='Enter Email'/> 
            <input type="password" placeholder='Enter Password'/>
            <button className="submit-btn">Sign-Up</button>
        </div>
        
    </div>
  )
}

export default Auth