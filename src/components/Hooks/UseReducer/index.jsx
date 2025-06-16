import { useReducer } from "react"

export const Counter = () => {
    const reducer = (state, action) =>{
        if(action.type === "INCREMENT"){
            return state + 1;
        }
        if(action.type === "DECREMENT"){
            return state - 1;
        }
        if(action.type === "RESET"){
            return state = 0;
        }
    }

    // const [count, setCount] = useState(0);
    const[count, dispatch] = useReducer(reducer, 0);
    return (<>
        <h1>{count}</h1>
        <button onClick={() =>dispatch({type: "INCREMENT"})}>INCREMENT</button>
        <button onClick={() =>dispatch({type: "DECREMENT"})}> DECREMENT</button>
        <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
    </>)
}