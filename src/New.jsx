import New from './api/New.json';

export const Showtime=()=>{
    return(
        <>
        <Show></Show>
        </>
    )
}

export const Show=()=>{
    return(     
        <>
       <ul>
        {
       New.map((Data) => {
            return (
                  <li>
                    <h1>Id: "{Data.id}"</h1>
                    <h1>Title: "{Data.title}"</h1>
                    <h2>Price: "{Data.price}" </h2>
                    <h2>Category: "{Data.category}"</h2>
                  </li>
            )
        })}
       </ul>
        </>   
    )
}