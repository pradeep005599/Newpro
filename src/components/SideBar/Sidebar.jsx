import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
     
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/">Contact</Link>
        <Link className="link" to="/">Help</Link>
      
    </div>
  )
}

export default Sidebar
