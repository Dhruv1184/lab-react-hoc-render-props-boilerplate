import React from 'react'

const PostRender = (props) => {
  return (
    <div>
      <button onClick={props.func}>Like Post {props.count}</button>
      
    </div>
  )
}

export default PostRender
