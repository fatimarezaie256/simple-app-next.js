import React from 'react'
async function page({params}:{params:Promise<{slug:string}>}) {
    const allparams = params;
    if((await params).slug.length===2){
        return(<div>
            <h1 style={{textAlign:"center",fontSize:"30px"}}>this is the feature <span style={{padding:"6px 4px",backgroundColor:"gray",color:"white",borderRadius:"10px"}}>" {(await params).slug[0]} "</span> and concept <span  style={{padding:"6px 4px",backgroundColor:"gray",color:"white",borderRadius:"10px"}}>" {(await params).slug[1]} "</span></h1>
        </div>)}
    else if((await params).slug.length===1){
        return(<div>
            <h1>this the feature " {(await params).slug[0]} "</h1>
        </div>)
    }
    
  return (
    <div>
        <h1 style={{textAlign:"center",fontSize:"40px"}}>this will manage all the routes inside the docs</h1>
    </div>
  )
}

export default page