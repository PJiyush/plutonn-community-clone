import React from 'react'
import image5 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-jacob-colvin-1761279.jpg'
import image2 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-min-an-1153334.jpg'

function NavigationCenter(props) {
  return (
    <div className="innNavigationCenter" style={props.theme.theme} >
        <div className="currCommunity">
            <div className="forImg">
                <img src={image5} alt="" />
            </div>
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
            <div className="prf">
                <img src={image2} alt="" />
            </div>
            <input className="inputTaking" type="text" placeholder='What is in your mind' />
        </div>
        <hr />
    </div>
  )
}

export default NavigationCenter