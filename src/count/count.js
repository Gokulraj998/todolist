import React,{useState,useEffect} from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const [msg,setMsg]=useState("insital Message")

    useEffect(()=>{
        console.log('compenent mount/updated')
        console.log(msg);
        console.log('count value is',count);
},[count,msg])
  return (
    <div>
        <button style={{width:"25%"}}onClick={()=>setCount(count+1)}>Increaecount</button>
        <p>the count value is:{count}</p>
        <button style={{width:"25%"}} onClick={()=>{setMsg('updated message')}}>Update message</button>
    </div>
  )
}
