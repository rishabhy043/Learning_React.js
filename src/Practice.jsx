export const Practices=()=>{
    const Result= false;
    const Students=["Rishabh","Amit","Sandeep"]
    return(
        <>
        <h1>INTERVIEW</h1>
        <p>{Students.length  != 0 && "No Studets Finds "}</p>
        <p>{Result && <h1>HERO</h1>}</p>
        <p>Number of student Finds: {Students.length}</p>
        </>
    )
}