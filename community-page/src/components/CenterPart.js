import React from 'react'
import NavigationCenter from './centerPart/NavigationCenter'
import PostSections from './centerPart/PostSections'

function CenterPart() {
  return (
    <div className='inCenterPart'>
      <div className="NavigationCenter"><NavigationCenter/></div>
      <div className="postsection"><PostSections/></div>
    </div>
  )
}

export default CenterPart