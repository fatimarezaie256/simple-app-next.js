

import Link from "next/link";

const fruitList:{name:string,emoji:string,price:number}[] = [
   
         {name:"Apple",
             emoji:"🍎",
             price:120,
         },
        {name:"Banana",
             emoji:"🍌",
             price:300,
         },
        {name:"orange",
             emoji:"🟠",
             price:200,
         },
         {name:"Pineapple",
             emoji:"🍍",
             price:400,
         },
          {name:"Kiwi",
             emoji:"🥝",
             price:320,
         },
          {name:"pear",
             emoji:"🍐",
             price:120,
         },
          {name:"peach",
             emoji:"🍑",
             price:100,
         },
         {name:"Tangerine",
             emoji:"🍊",
             price:320,
         },
         {name:"Lime",
             emoji:"🍋‍🟩",
             price:120,
         },
         {name:"Mango",
             emoji:"🥭",
             price:300,
         },
         {name:"Melon",
             emoji:"🍈",
             price:100,
         },
         {name:"Grapes",
             emoji:"🍇",
             price:120,
         },
         {name:"Pineapple",
             emoji:"🍍",
             price:400,
         },
         {name:"Water Melon",
             emoji:"🍉",
             price:100,
         },
         {name:"Green Apple",
             emoji:"🍏",
             price:120,
         },
         {name:"Lemon",
             emoji:"🍋",
             price:100,
         },
         {name:"Kiwi",
             emoji:"🥝",
             price:320,
         },
         {name:"Banana",
             emoji:"🍌",
             price:300,
         },
         {name:"Strawberri",
             emoji:"🍓",
             price:120,
         },
         {name:"Blueberries",
             emoji:"🫐",
             price:190,
         },
         {name:"Cherrie",
             emoji:"🍒",
             price:50,
         },
         {name:"orange",
             emoji:"🟠",
             price:200,
         },
         {name:"peach",
             emoji:"🍑",
             price:100,
         },
         {name:"pear",
             emoji:"🍐",
             price:120,
         },
      

];
async function page1({searchParams}:{searchParams: Promise<{page?:string}>}) {
   const pageNumberToString = (await (searchParams)).page;
   const pageNumber =Number(pageNumberToString) || 1;   
   const itemsPerPage = 8; 
   const start = (pageNumber-1)*itemsPerPage;
   const end = itemsPerPage;


  const items =  fruitList.slice(start,end);
      const totalPage = Math.ceil(fruitList.length/itemsPerPage);

  return (
    <div>
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"20px",justifyContent:"center"}}>
        {items.map(fruit=>(<div style={{width:"15%",textAlign:"center",backgroundColor:"black",color:"white",padding:"20px 20px",borderRadius:"4px",height:"20%",}}>
            <h1 style={{fontSize:"30px",backgroundColor:"white",textAlign:"center",borderRadius:"10px",padding:"17px 10px"}}>{fruit.emoji}</h1>
            <h1 style={{fontSize:"30px"}}>{fruit.name}</h1>
            <h1 style={{fontSize:"30px"}}>{fruit.price}</h1>
        </div>))}
    </div>
        <Paginetion currentPage = {pageNumber} totalPage= {totalPage} />
    </div>
  )
}

export default page1


function Paginetion({currentPage,totalPage}:{currentPage:number,totalPage:number}){
  const listPageNumber = Array.from({length:totalPage},(_,i)=>i+1);
  return(
    <div style={{marginTop:"50px"}}><span style={{textAlign:"center",marginLeft:"40%",backgroundColor:"black",color:"white",padding:"14px 50px"}}>
        page{currentPage} of {totalPage}
        </span>
        <div style={{display:"flex",gap:"3px",justifyContent:"center",justifyItems:"center",marginTop:"50px"}}>
          {currentPage>1 &&(<Link style={{border:"1px solid black",fontSize:"20px",textDecoration:"none",textAlign:"center",padding:"18px"}} href={`?page=${currentPage-1}`}>Previous</Link>)}
            {listPageNumber.map(page=>(
              <Link key={page} style={{border:"1px solid black",fontSize:"20px",padding:"10px",textDecoration:"none"}} href={`?page=${page}`}>{page}</Link>
            ))}
          {currentPage < totalPage && (<Link href={`?page=${currentPage+1}` } style={{border:"1px solid black",fontSize:"20px",textDecoration:"none",textAlign:"center",padding:"18px"}}>Next</Link>)}
          </div></div>
  )
}