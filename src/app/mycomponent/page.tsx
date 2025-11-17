import React, { useState } from 'react'
import Hero from './Hero'

function page() {
  const [value,setValue]=useState(0)

  return (
    <div>
        <h1 style={{fontSize:40}}>this is made by colocation</h1>
        <h1 style={{fontSize:40}}>This should be the route</h1>
        <Hero/>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>Increament</button>
        <button  onClick={()=>setValue(value-1)}>Decreament</button>
    </div>
  )
}

export default page