import React, { useEffect,  } from 'react'
import './style.css'
import person_icon from '../../assest/person.png'
import password_icon from '../../assest/password.png'
import email_icon from '../../assest/email.png'
const Login = ({setNavOpen}) => {
  useEffect(() => {
    setNavOpen (false)
    return() => setNavOpen(true)
    
  }, [])
  
  return (
    <div className='container'>
      <div className="header">
        <div className="loginhead">
        <h1>Login</h1>
        </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} width={25} alt="loading" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="input">
          <img src={person_icon} width={22} alt="loading" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={password_icon} width={22} alt="loading" />
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div className="forget">
      <a href="#">Forget Password?</a>
      </div>
      <div className="loginbtn">
        <button>SingUp</button>
        <button>Login</button>
      </div>
       </div>
  )
}

export default Login