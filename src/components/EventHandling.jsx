
export const EventHandle=()=>{
   
     function clickdbtn(event){
         console.log(event);
         console.log(event.target);
         alert("BUTTON was clicked")
     }

    const  HandleButton=(event)=>{
        console.log(event);
        alert("Are You ok ? ")
    }
    const HandleAgrument=(e)=>{
       alert(`HELLO ${e} WELCOME`)
    }
    return(
<>
{ <button  onClick={clickdbtn}>CLICK ME</button> }
<br />
<button onClick={()=>HandleButton(event)}>CLICK ME2</button>
<br />
<button onClick={()=> alert("inline arrow function")}>CLICK ME3</button>
<br />
<button onClick={(e)=>HandleAgrument("Amit")} >CLICK ME AGAIN</button>
</>
    )
} 