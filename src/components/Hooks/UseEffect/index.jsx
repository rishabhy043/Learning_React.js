import { useEffect, useState } from "react"
import "./index.css"

export const UseEffectPractice = () => {
    const [count, setcount] = useState(0);

    useEffect(() => {
        console.log("count value", count);
    }, [count])
    return (<>
        <div className="container effect-container">
            <h1>UseEffect Hook</h1>
            <p>count: {count}</p>
            <button onClick={() =>setcount(count+1)}>Increment</button>
        </div>
    </>)
}