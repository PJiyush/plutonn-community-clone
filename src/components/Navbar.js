import React from 'react'
// import image from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-stein-egil-liland-3408744.jpg'
import image from './images/pexels-stein-egil-liland-3408744.jpg'
// import image2 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-min-an-1153334.jpg'
import image2 from './images/pexels-min-an-1153334.jpg'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
function Navbar(props) {
  return (
    <>
    <div className='completeNav' style={props.theme}>
        <div className='logo' >
            <img src={image} alt="hello" />
            <div className="txt">Plutonn</div>
        </div>
        <div className='pageHeadline'> Community - Posts </div> 
        <div className='rightSide' >
            <NotificationsNoneOutlinedIcon fontSize='large' />
          <img src={image2} alt="profile" />
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Navbar