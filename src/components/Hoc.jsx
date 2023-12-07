import React from 'react'
import { useState } from 'react';
const Hoc = (Ogcomponent) => {
    function hof(){
        const [likeImageCounter, setLikeImageCounter] = useState(0);

        const handleLikeImageCount = ()=>{
          setLikeImageCounter(likeImageCounter+1);
        }
        return <Ogcomponent count ={likeImageCounter} func={handleLikeImageCount}/>
    }
    return hof
}

export default Hoc
