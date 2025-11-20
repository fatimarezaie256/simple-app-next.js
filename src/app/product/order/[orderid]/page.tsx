import React from 'react'
import Button from './Button';

async function page({params}:{params:Promise<{orderid:string,price:number}>}) {
    const orderid = (await params).orderid;
    const price = (await params).price;
   
  return (
    <div>
     <h1 style={{textAlign:"center",fontFamily:"monospace"}}>you are ordering the <span style={{fontSize:"40px",color:"blue"}}>{orderid} </span> </h1>
     <Button/>
    </div>
  )
}

export default page