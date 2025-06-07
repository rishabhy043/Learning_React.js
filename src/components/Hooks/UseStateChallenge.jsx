import { useState } from "react"

export const UseStateChallenge = () => {
    const [count, setcount] = useState(0);
    const Incbtn = () => {
        setcount(count + 1);
    }
    const Decbtn = () => {
        setcount(count - 1);
    }
    const Resetbtn = () => {
        setcount(0);
    }
    return (<>
        <h1>This is counter App</h1>
        <div className="input">
            <div>{count}</div>
            <input type="number" />
        </div>
        <div>
            <button onClick={Incbtn}>INCREMENT</button>
            <button onClick={Decbtn}>DECREMENT</button>
            <button onClick={Resetbtn}>RESET</button>
        </div>
    </>)
}