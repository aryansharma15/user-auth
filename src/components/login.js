import React, { useEffect } from 'react'
import '../App.css'

function Login() {

  useEffect();

  return (
    <div className='auth'>
        <div className="hed">
            <h2>Sign-In</h2>
            <div className="inputs">

                <input type="text" placeholder='Enter Email'/>
                <input type="password" placeholder='Enter Password'/>
                <button className="submit-btn">Sign-Up</button>
            </div>

            
        </div>
        
    </div>
  )
}

export default Login