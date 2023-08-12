import React from 'react'
import image2 from '../images/pexels-min-an-1153334.jpg'
function ProfileCard(props) {
  return (
    <div className='inProfile' style={props.theme.theme} >
    <div className="profileImage">
      <img src={image2} alt="" />
    </div>
    <div className="contents">
      <div className="follo-following">
        <div className="follo">
          <div className='folloNum'>0</div>
          <div className='folloHeading'>Followers</div>
        </div>
        <div className="follo">
          <div className='folloNum'>0</div>
          <div className='folloHeading'>Following</div>
        </div>
      </div>
      <div className="profileName"><b>Piyush Jhamnani</b></div>
      <div className="profileID">@thisispiyu12_gmail_com810</div>
      <div className="profileBio">Add a unique bio for your profile</div>
    </div>
    <div className="profileBtn">Post</div>
    </div>
  )
}

export default ProfileCard