import React from 'react'
import Navbar from './Navbar'
import LeftPart from './LeftPart'
import CenterPart from './CenterPart'
import RightPart from './RightPart'
import { useState } from 'react'

function CommunityPage() {
  const [mystyle, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const toggleStyle = () => {
    if (mystyle.color === 'black') {
      setStyle({
        color: 'white',
        backgroundColor: 'black'

      })
    } else {
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      })
    }
  }

  return (
    <div style={mystyle}>
    <div className='navDiv'><Navbar theme={mystyle} /> 
       <button onClick={toggleStyle} >{mystyle.color}</button>
    </div>
    <div className='divisions' >
      <div className='leftPart' > <LeftPart theme={mystyle} /> </div>
      <div className='centerPart' ><CenterPart theme={mystyle} /></div>
      <div className='rightPart' ><RightPart theme={mystyle} /></div>
    </div>
    </div>
  )
}

export default CommunityPage