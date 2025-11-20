
const fruitList = Array.from({length:60},(_,index)=>({
    id: index+1,
    name:`fruit ${index+1}`,

}))
async function page({searchParams}:{searchParams: Promise<{page?:string}>}) {
   const pageNumberToString = (await (searchParams)).page;
   const pageNumber =Number(pageNumberToString) || 1;   
   const itemsPerPage = 8; 
   const start = (pageNumber-1)*itemsPerPage;
   const end = itemsPerPage;


  const items =  fruitList.slice(start,end);
      const totalPage = Math.ceil(fruitList.length/itemsPerPage);

  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {items.map(fruit=>(<div key={fruit.id} style={{width:"20%",height:"20%",display:"flex",justifyContent:"center",alignItems:"center",}}>
            <h1 style={{fontSize:"30px"}}>{fruit.name}</h1>
        </div>))}
        <Paginetion currentPage = {pageNumber} totalPage= {totalPage} />
    </div>
  )
}

export default page


function Paginetion({currentPage,totalPage}:{currentPage:number,totalPage:number}){
  return(
    <div><h1>
        page{currentPage} of {totalPage}
        </h1></div>
  )
}