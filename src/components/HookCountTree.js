import React,{useState} from 'react'

function HookCountTree() {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <form>
        <br></br>
<input type='text' value={name.firstName} onChange={e=>setName({firstName:e.target.value})}/><br/><br/>
<input type='text' value={name.lastName} onChange={e=>setName({lastName:e.target.value})}/>
<h1>Your FistName :{name.firstName}</h1>
<h1>Your LastName :{name.lastName}</h1>

    </form>
  )
}

export default HookCountTree
