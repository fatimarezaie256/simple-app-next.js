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
    <div style={{display:"flex",gap:"30px",width:"100%",flexWrap:"wrap"}}>
        {list.map(product=>(
           <div key={product.id} style={{height:"50vh",marginTop:"30px",width:"30%",textAlign:"center",backgroundColor:"black",padding:"4px",borderRadius:"10px",color:"white",}}>
            <h1 style={{}}>{product.id}</h1>
            <h1 style={{fontSize:"50px"}}>{product.name}</h1>
            <h1 style={{}}>{product.price}</h1>
            <Link style={{padding:"12px 24px",backgroundColor:"blue",textDecoration:"none",color:"white",borderRadius:"10px"}} href={`product/order/${product.name}`}>Order</Link>
           </div>
        ))}
    </div>
  )
}

export default page