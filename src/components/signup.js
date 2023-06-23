import React, { useState } from 'react'
import '../App.css'

function SignUp() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleFormSubm = (event) => {
    event.preventDefault();

    const data = JSON.stringify(formData);

    fetch()

  }

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <div className="sig-inputs">
        <h3>Enter Your Details...</h3>
        <form action="" method="post">
          <input type="text" placeholder="Enter a Username" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Confirm Password" />

          <button className="sub-sig">Sign Up</button>

        </form>
      </div>
    </div>
  );
}

export default SignUp