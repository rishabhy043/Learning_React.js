import "./index.css"
import { useEffect, useState } from "react"

export const UseEffectChallenge = () => {
    const [count, setcount] = useState(0);
    const [name, setname] = useState("");

    useEffect(() => {
        console.log(name);
    }, [name])
    return (<>
        <div className="container effect-container">
            <h1>Effect Challenge</h1>
            <p>count : <span> {count} </span></p>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <p>Name: <span>{name}</span></p>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
    </>)
}