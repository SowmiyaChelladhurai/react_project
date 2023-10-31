import React from 'react'
import './App.css'
import { Outlet, Link} from 'react-router-dom'

function Login() {

    
  return (

    <div className='container'>
      <div className="header">
        <h1>Sign In</h1>
        <h4>
          New User?
          <span>Create an account</span>
        </h4>
      </div>
        <div className="input-field">
          <input className="custom-input" type="text" placeholder="Username or email" />
        </div>
        <div className="input-field">
          <input className="custom-input" type="password" placeholder="Password" />
        </div>
        <div className="check-box">
          <input className="custom-checkbox" type="checkbox" />
          <span>Keep me signed In</span>
        </div>
        <div className="submit-button">
            <Link to="/home">
          <button type="submit" className='custom-button'>Sign In</button>
          </Link>
        </div>
      
      <Outlet/>
    </div>
 

    
  )
}

export default Login
