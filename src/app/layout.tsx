"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
// import { Metadata } from "next"
// export const metadata:Metadata = {
//   title:{
//     default:"Next.js",
//     template:"%s | Fatima Rezaie"
//   },
//     description:"learning next.js",
// }
export default function layout({children}:{children:React.ReactNode}){
   const[position,setPosition]=useState({
        x:0,
        y:0,
    });
return(
    
    <html>
      <body>
        <div className=""
        onPointerMove={(e)=>{
            setPosition({
                x:e.clientX,
                y:e.clientY,
            });
        }}
        style={{
            position:"relative",
            width:"98.9vw",
            height:"100%",
        }}
        >
            <div
            style={{
                position:"absolute",
                backgroundColor:"red",
                borderRadius:"50%",
                transform:`translate(${position.x}px, ${position.y}px)`,
                left:-10,
                top:-10,
                width:10,
                height:10,
                zIndex:555,        
            }}
            >
            </div>
         
        
        </div>

        {children}
        <footer style={{padding:"5px",backgroundColor:"black",bottom:"0px",position:"fixed",width:"100%",textAlign:"center"}}>
           <h3 style={{color:"white"}}>2025 &copy; made by Fatima Rezaie</h3>
        </footer>
      </body>
    </html>
  )
}