import React from 'react'
import NavigationCenter from './centerPart/NavigationCenter'
import PostSections from './centerPart/PostSections'

function CenterPart(props) {
  return (
    <div className='inCenterPart' style={props.theme} >
      <div className="NavigationCenter"><NavigationCenter theme={props} /></div>
      <div className="postsection"><PostSections theme={props} /></div>
    </div>
  )
}

export default CenterPart