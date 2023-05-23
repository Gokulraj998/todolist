import React from 'react'

export default function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div>
        <h1>Admin page</h1>
        <p> welcome to home page</p>
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}
