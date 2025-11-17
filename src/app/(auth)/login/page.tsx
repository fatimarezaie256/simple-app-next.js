import React from 'react'
import { Metadata } from 'next'
export const metadata:Metadata ={
  title:"login",
}
function page() {
  return (
    <div>
        <h1 style={{textAlign:"center",fontSize:"25px"}}>This is login page</h1>
    </div>
  )
}

export default page