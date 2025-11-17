export default function layout({children}:{children:React.ReactNode}){
    return(
        <div style={{border:"1px solid black",borderRadius:"30px",margin:"20px 10px"}}>
            
            {children}
            
        </div>
    )
}