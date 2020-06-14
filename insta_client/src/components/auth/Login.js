import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="myCard">
      < div className = "card auth-card input-field">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" placeholder="email"/>
        
        <input type="password" placeholder="password" />
        
        <button className="btn waves-effect waves-light #90caf9 blue lighten-3"
          type="submit " name="action">
          Login
          </button>
        
        <p>
          Don't have an account? 
          < Link to = "/register"
          className = "auth-link" >
            Sign Up
          </Link>
        </p>
        </div>
    </div>
  )
}

export default Login