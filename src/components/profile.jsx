
function Profile(){
    return (
        <div>
            <h1>Profile card challenge</h1>
            <Profilecard
            name="Alice"
            age={30}
            greeting={
               <div>
                <strong>Hi, Alice Have a Wondeful day</strong>
               </div>
            }
            >
<p>Hoobies: Hiking, Walking</p>
<button>Contact</button>
            </Profilecard>

            <Profilecard
            name="Bob"
            age={25}
            greeting={
               <div>
                <strong>Hi, bob Have a Wondeful day</strong>
               </div>
            }
            >
<p>Hoobies: singing, Cooking</p>
<button>Contact</button>
            </Profilecard>
        </div>
    );
}
export default Profile;

function Profilecard(props){
    const{name, age, greeting,children} = props;
    return(
<>
<h2>Name: {name}</h2>
 <h3>Age: {age}</h3>
 <h5>Greeting: {greeting}</h5>
 <div>{children}</div>
</>
    )
}