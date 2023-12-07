import React from 'react'
import { useState } from 'react';
const Common = (props) => {
    const [likeImageCounter, setLikeImageCounter] = useState(0);

    const handleLikeImageCount = ()=>{
      setLikeImageCounter(likeImageCounter+1);
    }
  return (
    props.render(likeImageCounter,handleLikeImageCount)
  )
}

export default Common
