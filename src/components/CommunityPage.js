import React from 'react'
import Navbar from './Navbar'
import LeftPart from './LeftPart'
import CenterPart from './CenterPart'
import RightPart from './RightPart'
import { useState } from 'react'
import Footer from './Footer'

function CommunityPage() {
  const [mystyle, setStyle] = useState({
    color: '#353839',
    backgroundColor: 'white'
  })

  const toggleStyle = () => {
    if (mystyle.color === '#353839') {
      setStyle({
        color: 'white',
        backgroundColor: '#03001C'

      })
      setBtnTxt('light')
    } else {
      setStyle({
        color: '#353839',
        backgroundColor: 'white'
      })
      setBtnTxt('Dark')
    }
  }

  const [btnTxt, setBtnTxt] = useState('Dark')

  return (
    <div style={mystyle}>
    <div className='navDiv'><Navbar theme={mystyle} /> 
       <button onClick={toggleStyle} >{btnTxt}</button>
    </div>
    <div className='divisions' style={{
      position: 'relative',
      top: '-4rem',
      height: '100%',
    }} >
      <div className='leftPart' > <LeftPart theme={mystyle} /> </div>
      <div className='centerPart' ><CenterPart theme={mystyle} /></div>
      <div className='rightPart' ><RightPart theme={mystyle} /></div>
    </div>
    <div className='foot' ><Footer theme={mystyle} /></div>
    </div>
  )
}

export default CommunityPage