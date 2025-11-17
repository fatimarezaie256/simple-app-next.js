import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
export const metadata:Metadata = {
  title:"services",
}
function page() {
  return (
    <div>
        <h1 style={{textAlign:"center",fontSize:"50px",backgroundColor:"gray",color:"white"}}> All Services </h1>
          <div style={{display:"flex",justifyContent:"center",justifyItems:"center",gap:"20px", marginTop:"20px"}}><Link href="services/1" style={{fontSize:"25px",backgroundColor:"gray",color:"white",padding:"8px 4px",borderRadius:"5px",}}>
            first services
          </Link>
          <Link href="services/2" style={{fontSize:"25px",backgroundColor:"gray",color:"white",padding:"8px 4px",borderRadius:"5px",}}>
            second services
          </Link>
          <Link href="services/3" style={{fontSize:"25px",backgroundColor:"gray",color:"white",padding:"8px 4px",borderRadius:"5px",}}>
            third services
          </Link> 
          <Link href="services/4" style={{fontSize:"25px",backgroundColor:"gray",color:"white",padding:"8px 4px",borderRadius:"5px",}}>
            fourth services
          </Link>
          <Link href="services/5" style={{fontSize:"25px",backgroundColor:"gray",color:"white",padding:"8px 4px",borderRadius:"5px",}}>
            fifth services
          </Link>
          <Link href="services/6" style={{fontSize:"25px",backgroundColor:"gray",color:"white",padding:"8px 4px",borderRadius:"5px",}}>
            sixth services
          </Link></div>
    </div>
  )
}

export default page