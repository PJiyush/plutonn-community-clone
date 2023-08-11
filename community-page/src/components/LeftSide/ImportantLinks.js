import React from 'react'

function ImportantLinks() {
  const ImpLinks=[
    {"name":"Home"},
    {"name":"Community"},
    {"name":"Search"},
    {"name":"Courses"},
  ]
  return (
    <div className='innImportantLiks' >
      <div className='linkSection' >
        {ImpLinks.map((link)=>(
          <div className='inlinkSection'>{link.name}</div>
        ))}
      </div>
    </div>
  )
}

export default ImportantLinks