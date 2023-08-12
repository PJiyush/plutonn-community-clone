import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Footer from './Footer';
function HomePage() {
  return (
    <div>
      <NotificationsNoneOutlinedIcon />
      <div className='foot' >
        <Footer />
      </div>
    </div>
  )
}

export default HomePage