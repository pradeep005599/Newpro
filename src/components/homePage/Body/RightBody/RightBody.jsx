import React from 'react'
import './style.css'
const RightBody = () => {
  return (
    <div className='mainrightBody'>
      <div className="rightbody">
      <h3>Welcome to Netra Jyoti Abhiyaan Registration</h3>
      <p>is a community-driven initiative dedicated to promoting eye health and preventing blindness.
         By collaborating with healthcare professionals and local organizations, 
         ensuring that everyone has the opportunity to lead a life free from preventable eye diseases. <br />
         <br />Please complete the registration form below to ensure a seamless enrollment process.
         </p>
      </div>
      <div className="rightbodytwo">
          <div className="rightdropdown">
          <select name="" >
         <option value="">--select Role--</option>
         <option value="">2</option>
         <option value="">3</option>
         <option value="">4</option>
          <option value="">5</option>
         </select>
          </div>
          <div className="rightbtn">
          <button>next</button></div>
        </div>
    </div>
  )
}

export default RightBody
