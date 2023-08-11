import React from 'react'
import ProfileCard from './LeftSide/ProfileCard'
import ImportantLinks from './LeftSide/ImportantLinks'

function LeftPart() {
  return (
    <div className='inLeftPart'>
        <div className='profileSection'><ProfileCard/></div>
        <div className='importantLinks'><ImportantLinks/></div>
    </div>
  )
}

export default LeftPart