import React from 'react'
import RightInput from './RightSide/RightInput'

function RightPart(props) {
  return (
    <div className='inRightPart' style={props.theme} ><RightInput theme={props} /></div>
  )
}

export default RightPart