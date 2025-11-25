"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
  const navList:{id:number,name:string,href:string}[] = [
        {
            id:1,
            name:"Home",
            href:"/",
        },
        {
            id:2,
            name:"about",
            href:"/about",
        },
        {
            id:3,
            name:"services",
            href:"/services",
        },
        {
            id:4,
            name:"Contact",
            href:"/contact",
        },
        {
            id:5,
            name:"product",
            href:"/product",
        },
        {
            id:6,
            name:"dashboard",
            href:"/dashboard",
        },
    ]
function Navbar() {
     const pathName = usePathname();
  return (
    <div>
              <nav style={{display:"flex",gap:"30px",padding:"14px 7px",backgroundColor:"green",color:"white"}}>
            {navList.map((nav)=>{
                
           return(<Link key={nav.id} href={nav.href} style={{color:"white",textDecoration:"none",fontSize:"20px"}}>
            {nav.name}
           </Link>)
            })}
            <button style={{border:"1px solid white",color:"white",marginLeft:"50%",padding:"8px 12px",textDecoration:"none",fontSize:"18px",boxShadow:"12px black",borderRadius:"4px",backgroundColor:"white",}}><Link href="login">Login</Link></button>
        </nav>
    </div>
  )
}

export default Navbar