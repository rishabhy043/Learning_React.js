import { useEffect, useState } from "react"
import "./index.css"

export const CLeanUp = () => {
    const [count, setcount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setcount((prev) => prev + 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return (<>
        <div className="container ">
            <div className="counter">
                <p>I'm Rishabh yadav from Noida</p>
                <div className="odometer" id="odometer">
                    {count}
                </div>
                <h3 className="title">Counting <br />RealTime Counter</h3>
            </div>
        </div>
    </>)
}