import Navbar from "../Navbar/page";
import { Metadata } from "next"
import input from "./input";
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
        
        <div style={{}}></div>
        <Navbar/>
        <input/>
        {children}
     
      </body>
    </html>
  )
}