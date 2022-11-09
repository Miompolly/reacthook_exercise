import React,{useState}from 'react'

function HookCountFive() {
    const [list,setList]=useState([])
const addList=()=>{
setList([...list,{
    id:list.length,
    value:Math.floor(Math.random()*10)+1
}])
}
  return (
    <div>
<button onClick={addList}>Add To List</button>
<ul>
{
    list.map(list=>(
        <li key={list.id}>{list.value}</li>
    ))
}

</ul>

    </div>
  )
}

export default HookCountFive