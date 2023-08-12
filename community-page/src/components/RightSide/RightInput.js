import React from 'react'
import CommunitiesSection from './CommunitiesSection'

function RightInput(props) {
  return (
    <>
    <div className='InputSection' style={props.theme.theme}>
        <input type="text" name="" id="" className='inputPart' placeholder='Search Joined Communities' />
    </div>
    <div className="txtRight">Joined Communities
    <CommunitiesSection/>
    </div>
    </>
  )
}

export default RightInput