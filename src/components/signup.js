import React from 'react'
import '../App.css'

function SignUp() {
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <div className="sig-inputs">
        <h3>Enter Your Details...</h3>
        <input type="text" placeholder="Enter First Name" />
        <input type="text" placeholder="Enter Last Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <input type="password" placeholder="Confirm Password" />

        <button className="sub-sig">Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp