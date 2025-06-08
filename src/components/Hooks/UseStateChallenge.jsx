import { useState } from "react"

export const UseStateChallenge = () => {
    const [count, setcount] = useState(0);
    const [step, setstep] = useState(0);
    const Incbtn = () => {
        setcount(count + step);
    }
    const Decbtn = () => {
        setcount(count - step);
    }
    const Resetbtn = () => {
        setcount(0);
        setstep(0);
    }
    return (<>
        <h1>This is counter App</h1>
        <div className="input">
            <div>count: {count}</div>
            <label>
                STEPS:
                <input
                    type="number"
                    value={step}
                    onChange={(e) => setstep(Number(e.target.value))}
                />
            </label>
        </div>
        <div>
            <button onClick={Incbtn} disabled={count >= 100}>INCREMENT</button>
            <button onClick={Decbtn} disabled={count <= 0}>DECREMENT</button>
            <button onClick={Resetbtn}>RESET</button>
        </div>
    </>)
}