import React, { useState } from 'react';

export const States=()=>{
// let value=0;
const[count, setCount]=useState(0);
console.log("PARENT COMPONENT RENDERED");
const incvalue=()=>{
    // value++;
    setCount(count+1);
    // console.log(value);
    console.log(count);
}
return(
    <>
    {/* <h1>{value}</h1> */}
    <h1>{count}</h1>
   <button onClick={incvalue}>INCREMENT</button>
   <ChildComponent>CHILD COMPONENT</ChildComponent>
    </>
)
}
function ChildComponent(){
    console.log("child component rendered");
    return(
        <>
        <h1>CHILD COMPONENT RENDERED</h1>
        </>
    )
}