import React from 'react'

const LikeRender = (props) => {
  return (
    <div>
      <button onClick={props.func}>Like Post {props.count}</button>
      
    </div>
  )
}

export default LikeRender
