import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

const Login = () => {
  const history = useHistory()
  const [email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const sendData = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      M.toast({
        html: 'Invalid email',
        classes: "#b71c1c red darken-4"
      });
      return
    }
    fetch('/login', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          password,
          email,
        })
      }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.error) {
          M.toast({
            html: data.error,
            classes: "#b71c1c red darken-4"
          });
        } else {
          localStorage.setItem('jwt',data.token)
          localStorage.setItem('user',JSON.stringify(data.user))
          M.toast({
            html: 'Login Successfully',
            classes: "#1b5e20 green darken-4"
          });
          history.push('/')
        }
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="myCard">
      < div className = "card auth-card input-field">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        
        <input type="password" placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="btn waves-effect waves-light #90caf9 blue lighten-3 btn-auth"
          type="submit " name="action"
          onClick={() => sendData()}
        >
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