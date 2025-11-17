import React from 'react'

async function page({params}:{params:Promise<{serviceid:string}>}) {
    const serviceid = (await params).serviceid;
  return (
    <div><h1 style={{fontSize:"30px",textAlign:"center",marginTop:"20%"}}>This is the services page about <span style={{backgroundColor:"gray",color:"white",padding:"8px 6px",borderRadius:"10px"}}>service {serviceid}</span></h1></div>
  )
}

export default page