import { useState } from "react"

export const UseState = () =>{
    const [count, setcount] = useState(0);
    return(
        <>
        <h1>COUNTER APP</h1>
        <div>{count}</div>
        <button onClick={() =>setcount(count + 1)}>INCREMENT</button>
        </>
    )
}