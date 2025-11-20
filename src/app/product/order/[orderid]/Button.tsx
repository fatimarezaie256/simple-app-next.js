"use client";
import { useRouter } from "next/navigation";
function Button() {
    const router = useRouter();
    function handleClick(){
            console.log("your order replaced")  
          router.push("/product");
       }
  return (
    <div>
          <button onClick={handleClick} style={{padding:"12px 16px",backgroundColor:"blue",color:"white",margin:"3% 46%",borderRadius:"5px"}}>Order Now</button>
    </div>
  )
}

export default Button