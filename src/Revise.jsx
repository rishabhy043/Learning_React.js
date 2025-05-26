import React, { useState } from 'react';

export const States=()=>{
// let value=0;
const[count, setCount]=useState(0);
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
    </>
)
}