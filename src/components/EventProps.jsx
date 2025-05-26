import WelcomeProps from "./EventProps2"
export const EventHandleProps=()=>{

    const handleClick=()=>{
        alert("I AM CLICK EVENT")
    }
    const HandleOnHover=()=>{
        alert("II AM HOVER EVENT")
    }
    return(
        <>
        <WelcomeProps handleClick={()=>{handleClick}} 
            HandleOnHover={()=>{HandleOnHover}}
            >
        </WelcomeProps>
        </>
    )
}