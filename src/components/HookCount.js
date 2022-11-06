
import React, {useState} from 'react'


function HookCount() {
    const [count,setCount]=useState(0);
  return (
    <div>
        
      <button onClick={()=>setCount(count+1)}><h1>Follower {count}</h1></button>
     
    </div>
  )
}

export default HookCount
