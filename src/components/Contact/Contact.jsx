import React from 'react'
import './style.css'
import Contactleft from './ContactLeft/Contactleft'
import ContactRight from './ContactRight/ContactRight'

const Contact = () => {
  return ( 
    <div className='contactmain'>
      <>
      <Contactleft />
      <ContactRight />
      </>
   
 </div>
  )
}

export default Contact