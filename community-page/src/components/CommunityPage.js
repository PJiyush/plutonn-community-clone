import React from 'react'
import Navbar from './Navbar'
import LeftPart from './LeftPart'
import CenterPart from './CenterPart'
import RightPart from './RightPart'
function CommunityPage() {
  return (
    <>
    <div className='navDiv'><Navbar/></div>
    <div className='divisions'>
      <div className='leftPart' > <LeftPart/> </div>
      <div className='centerPart' ><CenterPart/></div>
      <div className='rightPart' ><RightPart/></div>
    </div>
    </>
  )
}

export default CommunityPage