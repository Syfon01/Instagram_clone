import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const sendData = () => {
    fetch('/register', {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name: '',
        password: '',
        email: ''
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
           M.toast({ html: data.error });
        }
      // console.log(data)
    })
  }
  return (
    <div className="myCard">
      < div className = "card auth-card input-field">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input type="text" placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input type="password" placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        < button className = "btn waves-effect waves-light #90caf9 blue lighten-3 btn-auth"
          type="submit " name="action"
          onClick={() => sendData()}>
          Register
          </button>
        <p>
          Already have an account? 
          <Link to="/login" className="auth-link">
            Sign in
          </Link>
        </p>
        </div>
    </div>
  )
}

export default Register