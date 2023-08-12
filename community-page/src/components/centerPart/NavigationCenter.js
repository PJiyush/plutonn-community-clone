import React from 'react'

function NavigationCenter(props) {
  return (
    <div className="innNavigationCenter" style={props.theme.theme} >
        <div className="currCommunity">
            <div className="forImg">Image</div>
            <div className="forNameAndMember">
                <div className="nameOfComm">DSA Community</div>
                <div className="membersInComm">162 Members</div>
            </div>
            <div className="forButtons">
                <button>Leave</button>
            </div>
        </div>
        <hr />
        <div className="ButtonsForCenterNavigation">
            <div className="PostsButtons">Posts</div>
            <div className="AnnouncementsButtons">Announcements</div>
        </div>
        <hr />
        <div className="formSectionCenter">
            <div className="prf"></div>
            <input className="inputTaking" type="text" placeholder='What is in your mind' />
        </div>
        <hr />
    </div>
  )
}

export default NavigationCenter