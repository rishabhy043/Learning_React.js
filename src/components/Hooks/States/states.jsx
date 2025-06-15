import { useState } from "react";
const  States=()=>{
//     let value=0;
//     const IncremntValue=()=>{
//    value++;
//    console.log(value);
const[count, SetCount]= useState(0);
const IncremntValue=()=>{
SetCount(()=>count+1)
}
   return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>IncremntValue()}>INCREMENT</button>
        </>
    )
}
export default States;