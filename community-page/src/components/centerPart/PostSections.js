import React from 'react'
import Posts from './Posts'

function PostSections(props) {
  return (
    <div className='innPostSection' style={props.theme.theme} >
        <Posts theme={props}/>
        <Posts theme={props}/>
    </div>
  )
}

export default PostSections