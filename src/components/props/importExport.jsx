 const Netflixcard=()=>{
    const Name= <h1>Rishabh Yadav</h1>
    const Education= <h3>B.Tech In CSE</h3>
    return(
        <>
        <p>Heyy Guyzz I'm {Name} and i'm Pursuing {Education}</p>
        <Componenta></Componenta>
        </>
    )
}
// export default Netflixcard;
 export const Componenta=()=>{
    const result=false;
    return (
        <>
        <button>Click{result ? <h1>HELLO</h1>: <h1>NOT HELLO</h1> }</button>
        </>
    )
}
 export const Footer=()=>{
    return(
        <>
        <p>@copyRight#123X</p>
        </>
    )
}
    export default Netflixcard;