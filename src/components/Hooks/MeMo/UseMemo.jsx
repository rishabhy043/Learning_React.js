import { useState } from "react";

// COMPONENT 
const ExpensiveComponent = () => {
    //expensive calculation function
    const sum = () => {
        console.log("calculating sum ...");
        let i = 0;
        for (i = 0; i <= 100000; i++) {
            i = i + 1;
        }
        return i;
    };
    const total = sum();
    return (<>
        <p>sum : {total}</p>
    </>)
}

const MemoParentComponent = () => {
    const [count, setCount] = useState();
    return (<>
        <ExpensiveComponent></ExpensiveComponent>
        <button onClick={() => setCount(count + 1)}>re-reder parent</button>
    </>)
}

