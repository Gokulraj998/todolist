import React from 'react'

export default function Productitem(props) {
  return (
    <div>
        <div>
        {props.title}
        </div>
       <div>
        {props.rate}
       </div>
    </div>
  )
}
