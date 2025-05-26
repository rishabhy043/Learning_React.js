const users=[
    {name: "Alice" , age: 31},
    {name: "Neon" , age: 23},
    {name: "Alyx" , age: 25},
    {name: "Ryan" , age: 18},
    {name: "Bruno" , age: 22},
]

export const AcessUser=()=>{
return(
    <>
   {users.map((curelem,index)=>{
    return(
        <li key={index}>{curelem.name} - {curelem.age} years old</li>
    )
   })}
    </>
)
}