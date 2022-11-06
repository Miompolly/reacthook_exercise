import React,{useState} from 'react'

function HookCountTree() {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <form>
        <br></br>
<input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/><br/><br/>
<input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
<h1>Your FistName :{name.firstName}</h1>
<h1>Your LastName :{name.lastName}</h1>
<h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCountTree
