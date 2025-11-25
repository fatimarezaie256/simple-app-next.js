
import Navbar from "@/app/Navbar/page"
import { Metadata } from "next"

export const metadata:Metadata = {
  title:{
    default:"Next.js",
    template:"%s | Fatima Rezaie"
  },
    description:"learning next.js",
}
export default function layout({children}:{children:React.ReactNode}){
  
return(
    
    <html>
      <body>
        
        
      <Navbar/>
       
        {children}
     
      </body>
    </html>
  )
}