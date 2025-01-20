import React from 'react'
import './style.css'

const ContactRight = () => {
  return (
    <div className='contactrightmain'> 
      
        <input type="text" placeholder='Name'  />
        <input type="text" placeholder='Subject (optional)'  />
        <input type="text" placeholder='Email'  />
        <textarea name="text" placeholder='Enter you message'></textarea>
        <div className="contactrightbtn">
        <button>Send message</button>
        </div>
     
         </div>
  )
}

export default ContactRight