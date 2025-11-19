import Link from 'next/link'
import React from 'react'
const list:{id:number,name:string,price:number}[]=[
  {id:1,name:"Apple",price:140},
  {id:2,name:"Banana",price:100},
  {id:3,name:"Peach",price:90},
  {id:4,name:"Kewi",price:290},
  {id:5,name:"Cherrri",price:120},
  {id:6,name:"Orange",price:240},
]
function page() {
  return (
    <div style={{display:"grid",gridRow:"3",width:"100%"}}>
        {list.map(product=>(
           <div style={{height:"100%",width:"30%",textAlign:"center",backgroundColor:"black",padding:"4px",borderRadius:"30px",color:"white"}}>
            <h1 style={{}}>{product.id}</h1>
            <h1 style={{fontSize:"50px"}}>{product.name}</h1>
            <h1 style={{}}>{product.price}</h1>
            <Link style={{padding:"9px 16px",backgroundColor:"blue",color:"white",borderRadius:"10px"}} href={`products/order/${product.id}`}>Order</Link>
           </div>
        ))}
    </div>
  )
}

export default page