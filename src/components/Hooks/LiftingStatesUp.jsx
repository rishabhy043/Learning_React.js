import { useState } from "react";

export const LiftingStates = () => {
    const [inputValue, SetinputValue] = useState("");          // inputValue used by inputValue and Display to pass this by Making props props
    return (<>
        <InputComponet inputValue={inputValue} SetinputValue={SetinputValue}></InputComponet>
        <DisplayComponent inputValue={inputValue}></DisplayComponent>
    </>
    )

}

const InputComponet = ({ inputValue, SetinputValue }) => {
    // const [inputValue, SetinputValue] = useState("");   --> Movig this component to parent to use this by DisplayComponet
    return (<>
        <input type="text" placeholder="Enter  Your Name Hear" value={inputValue} onChange={(e) => SetinputValue(e.target.value)} />
    </>
    )
}
const DisplayComponent = ({ inputValue }) => {
    return (<>
        <h1>The Current Component is:{inputValue}</h1>
    </>)
}