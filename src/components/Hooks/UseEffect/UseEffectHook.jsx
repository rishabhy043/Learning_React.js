export const UseEffectHook= () =>{
    let count =0;
    console.log(count + " Before increment");
    function Increment(){
        count +=1;
    }
    Increment();
    console.log(count + " After increment");
    return(<>
    
    </>)
}