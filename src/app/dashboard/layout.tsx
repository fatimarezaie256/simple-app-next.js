
import Navbar from "@/app/Navbar/page"
import { Metadata } from "next"
import React from "react"

export const metadata:Metadata = {
  title:{
    default:"Next.js",
    template:"%s | Fatima Rezaie"
  },
    description:"learning next.js",
}
export default function layout({children,finance,notification,profile}:{children:React.ReactNode,
  finance:React.ReactNode;
  notification:React.ReactNode;
  profile:React.ReactNode;
}){
  
return(
    
    <html>
      <body>
        
        
      <Navbar/>
        
        {children}
         <div style={{display:"flex",justifyContent:"space-evenly",gap:"10px"}}>
          <div>{finance}</div>
          <div>{notification}</div>
          <div>{profile}</div>
         </div>
      </body>
    </html>
  )
}