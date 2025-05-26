export const Event=()=>{
  
    return(
        <>
        <div onClick={() => alert("Parent Captured")}> DIV
  <button onClick={() => alert("Button Clicked")}>Click Me</button>
</div>
        </>
    )
}