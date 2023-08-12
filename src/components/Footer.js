import React from 'react'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
// import image2 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-min-an-1153334.jpg'
import image2 from './images/pexels-min-an-1153334.jpg'
function Footer(props) {
    const ImpLinks=[
        {"name":"Home", "pth":"/home", "icn":<HomeRoundedIcon />},
        {"name":"Community","pth":"/community", "icn":<PeopleRoundedIcon />},
        {"name":"Search","pth":"/searchPage", "icn":<SearchRoundedIcon />},
        {"name":"Courses","pth":"/ciurses", "icn":<VideoLibraryIcon />},
      ]
  return (
    <div className="footer" style={props.theme.theme} >
        <div className="foot_section" style={props.theme.theme} >
            {ImpLinks.map((item, index)=>(
                <Link to={item.pth} key={index} className="foot_link" style={props.theme.theme}>
                    <div className="foot_icon">
                        {item.icn}
                    </div>
                    <div className="foot_name">
                        {item.name}
                    </div>
                </Link>
            )
            )}
            <div className="prfile" >
                <img src={image2} alt="" style={{
                    height:"2rem",
                    width:"2rem",
                    borderRadius:"50%",
                }}/>
                <div className="prfile_name" style={props.theme.theme}>
                    Profile
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer