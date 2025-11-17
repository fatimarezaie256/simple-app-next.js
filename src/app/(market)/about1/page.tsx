import React from 'react'
import { Metadata } from 'next'
export const metadata:Metadata={
  title:"about1",
}
function page() {
  return (
    <div>
        <h1 style={{textAlign:"center",fontSize:"25px"}}>This is about us page</h1>
    </div>
  )
}

export default page