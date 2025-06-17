import { useMemo, useState } from "react";

// COMPONENT 
const ExpensiveComponent = () => {
    //expensive calculation function
    const sum = () => {
        console.log("calculating sum ...");
        let i = 0;
        for (i = 0; i <= 10000000; i++) {
            i = i + 1;
        }
        return i+2;
    };

    // const total = sum();

    // UseMemo aplied here
    const total = useMemo(() => sum() , [])

    return (<>
        <p>sum : {total}</p>
    </>)
}

export const MemoParentComponent = () => {
    const [count, setCount] = useState(0);
    return (<>
        <ExpensiveComponent></ExpensiveComponent>
        <button onClick={() => setCount(count + 1)}>re-reder parent </button>
        <p>Parent re-render : {count}</p>
    </>)
}

