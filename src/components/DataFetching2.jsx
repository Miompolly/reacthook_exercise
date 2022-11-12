import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching2() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idButton,setidButton]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idButton])
const handleClick=()=>{
setidButton(id)
}
  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
    
    </div>
  )
}
export default DataFetching2