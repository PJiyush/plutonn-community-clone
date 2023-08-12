import React from 'react'
import { Link } from 'react-router-dom'

function ImportantLinks(props) {
  const ImpLinks=[
    {"name":"Home", "pth":"/home"},
    {"name":"Community","pth":"/community"},
    {"name":"Search","pth":"/searchPage"},
    {"name":"Courses","pth":"/ciurses"},
  ]
  return (
    <div className='innImportantLiks' style={props.theme.theme} >
      <div className='linkSection' >
        {ImpLinks.map((link)=>(
          <div className='inlinkSection'>
            <Link className='linkin' to={link.pth}>{link.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImportantLinks