import React from 'react'
import image3 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-chloe-1043471.jpg'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';

function Posts(props) {
  return (
    <div className='innPosts' style={props.theme.theme.theme} >
        <div className="innPeopleSection">
            <div className='wrapper'>
                <img src={image3} alt="" />
                <div className="fornameid">
                    <div className="forid">{props.id}</div>
                    <div className="forname">{props.name}</div>
                </div>
            </div>
            <button className='folloBtn' >Follow</button>
        </div>
        <div className="contents">
            <div className="txtfield">
                {props.txt}</div>
            </div>
            <div className="ContentImage" 
            style={{
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
            }}
            ><img src={props.img1} alt=''/></div>
            <div className="ImportantIcons">
                <div className="cmnt"><ChatBubbleIcon/></div>
                <div className="react"><ThumbUpAltIcon/></div>
                <div className="Share"><ShareIcon/></div>
            </div>
            <hr />
    </div>
  )
}

export default Posts