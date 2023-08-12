import React from 'react'

function Navbar(props) {
  return (
    <>
    <div className='completeNav' style={props.theme}>
        <div className='logo' >
            <img src="" alt="" />
            Plutonn
        </div>
        <div className='pageHeadline'> Community - Posts </div> 
        <div className='rightSide' >Profile</div>
    </div>
    <hr/>
    </>
  )
}

export default Navbar