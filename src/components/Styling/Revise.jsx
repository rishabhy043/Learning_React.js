export const Hello=()=>{
    const rating =9; 
    const about= "Actin comedy movie"
    const age=17;
    return(
<>
<h1>Name: RISHABH YADAV</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, pariatur magni facere fugiat cumque consequuntur.
</p>
<h3>Rating: {rating}</h3>
<h6>About: {about}</h6>
<button>{age>= 18? "Available":"Not Available"}</button>
</>
    )
}