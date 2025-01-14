import React from 'react'
import './style.css'
import LeftTop from './Lefttop/LeftTop'
import LeftMid from './LeftMid/LeftMid'
import LeftBottom from './LeftBottom/LeftBottom'
const LeftBody = () => {
  return (
    <div className='mainleftbody'>
    <LeftTop/>
    <LeftMid/>
    <LeftBottom/>
    </div>
  )
} 

export default LeftBody
