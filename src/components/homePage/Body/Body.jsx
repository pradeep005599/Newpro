import React from 'react'
import LeftBody from './LeftBody/LeftBody'
import RightBody from './RightBody/RightBody'
import './style.css'

const Body = () => {
  return (
    <div className='bodyleftright'>
      <LeftBody/>
      <RightBody/>
    </div>
  )
}

export default Body
