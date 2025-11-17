import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
 const navList:{id:number,name:string,href:string}[] =[
        {
        id:1,
        name:"Home",
        href: "/",
        },
         {
        id:2,
        name:"About",
        href: "/about",
        },
         {
        id:3,
        name:"Contact",
        href: "/contact",
        },
    ]
    const pathName=usePathname();
function navbar() {
  return (
    <div>
         <nav style={{backgroundColor:"blue",color:"white",padding:"20px 8px",display:"flex",justifyContent:"center",gap:"60px"}}>
        {navList.map((nav)=>{
         return(<Link href={nav.href} key={nav.id} style={{color:"white",textDecoration:"none"}}>
            {nav.name}
         </Link>
        )})}</nav>
    </div>
  )
}

export default navbar