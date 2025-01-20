import React from 'react'
import './style.css'

const HelpTop = () => {
  return (
    <div className='helptop'>
      <h1>Help Center</h1>
        <h1>How can we help you?</h1>
        <div className="helptopinput">
        <input type="text" placeholder="Search" />
        </div>
        <div className="helpsearchbtn">
        <button>Search</button>
        </div>
         
    </div>
  )
}

export default HelpTop