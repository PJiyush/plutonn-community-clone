import React from 'react'
import ProfileCard from './LeftSide/ProfileCard'
import ImportantLinks from './LeftSide/ImportantLinks'
import PopularFollowingSection from './LeftSide/PopularFollowingSection'

function LeftPart(props) {
  return (
    <div className='inLeftPart' style={props.theme} >
        <div className='profileSection'><ProfileCard theme={props}/></div>
        <div className='importantLinks'><ImportantLinks theme={props} /></div>
        <div className="popularFollowingSection"><PopularFollowingSection theme={props} /></div>
    </div>
  )
}

export default LeftPart