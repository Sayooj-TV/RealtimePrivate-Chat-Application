import React from 'react'


function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>ello</span>
            <span className='title'>Login</span>
            <form >               
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />             
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login;

