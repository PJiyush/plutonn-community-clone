import React from 'react'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
function ImportantLinks(props) {
  const ImpLinks=[
    {"name":"Home", "pth":"/home", "icn":<HomeRoundedIcon />},
    {"name":"Community","pth":"/community", "icn":<PeopleRoundedIcon />},
    {"name":"Search","pth":"/searchPage", "icn":<SearchRoundedIcon />},
    {"name":"Courses","pth":"/ciurses", "icn":<VideoLibraryIcon />},
  ]
  return (
    <div className='innImportantLiks' style={props.theme.theme} >
      <div className='linkSection' >
        {ImpLinks.map((link)=>(
          <div className='inlinkSection'>
            <Link className='linkin' to={link.pth}> {link.icn} {link.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImportantLinks