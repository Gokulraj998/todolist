import React from 'react'
import Productitem from './productitem'

export default function Productlist() {
    const product=[
        {id:"e1",title:"tata",price:"$560"},
        {id:"e2",title:"mahindra",price:"$1560"},
        {id:"e3",title:"bmw",price:"$15560"},
    ]

  return (
    <div>
        <div>
            <h2>the product list</h2>
        </div>
       <div>
          <Productitem title={product[0].title} rate={product[0].price}/>
          <Productitem title={product[1].title} rate={product[1].price}/>
          <Productitem title={product[2].title} rate={product[2].price}/>
       </div>
        
    </div>
  )
}
