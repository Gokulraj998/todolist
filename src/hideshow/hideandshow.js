import React ,{useState}from 'react'

export default function Hideandshow() {
    const [show, setShow] = useState(false);
    const showdata=()=>{
        if(show===true){
            setShow(false);
        }else{
            setShow(true);
        }
    }
  return (
    <div>
        <button onClick={showdata}>Click</button>
        {show &&(<h1>hello how are you</h1>)}
    </div>
  )
}
