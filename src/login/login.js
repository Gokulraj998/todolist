import React from 'react';
import { useRef } from 'react';
import Home from './Home';
import './login.css';

export default function Login() {
    const email=useRef();
    const password=useRef();
    const emailData=localStorage.getItem("emailData")
    const passswordData =localStorage.getItem("passswordData")
    const handleSubmit=()=>{
        if(email.current.value==="abc@gmail.com" && password.current.value==="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passswordData","12345")
        }
    }
  return (
   
    <div>
        { emailData && passswordData ?
        <Home/>:
        <form onSubmit={handleSubmit}>
            <div>
                Email:<input type="text" ref={email }/>
            </div>
            <div>
                Password:<input type="password" ref={password}/>
            </div>
            <button>Login</button>
        </form>
} 
    </div>
  )
}

