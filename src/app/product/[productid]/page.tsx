import React from 'react'

async function page({params}:{
    params:Promise<{productid:string}>
}) {
    const productid =(await params).productid;
  return (
    <div ><h1 style={{textAlign:"center",fontSize:"40px",fontFamily:"cursive",backgroundColor:"gray",color:"white",padding:"6px 4px",}}>This is the details page about product<span style={{backgroundColor:"white",color:"black",padding:"6px 20px",borderRadius:"40px"}}>{productid}</span></h1></div>
  )
}

export default page