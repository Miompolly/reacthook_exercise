
import React,{useState} from 'react'

function HookCounterTwo() {
    const initialState=0
    const [count,setCount]=useState(initialState)
    const incrementFive=()=>{
for(let i=1;i<=5;i++){
setCount(prev=>prev+1)
}
    }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(initialState)}>Reset</button>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo
