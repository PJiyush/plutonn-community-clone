import React from 'react'
import ProfileCard from './LeftSide/ProfileCard'
import ImportantLinks from './LeftSide/ImportantLinks'
import PopularFollowingSection from './LeftSide/PopularFollowingSection'

function LeftPart() {
  return (
    <div className='inLeftPart'>
        <div className='profileSection'><ProfileCard/></div>
        <div className='importantLinks'><ImportantLinks/></div>
        <div className="popularFollowingSection"><PopularFollowingSection/></div>
    </div>
  )
}

export default LeftPart