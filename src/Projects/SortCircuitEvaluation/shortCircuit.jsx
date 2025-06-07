 import { useState } from "react"

export const Shortcircuit = () => {
     const [isloggedin, setisloggedin] = useState(true);

     

    return (
        <section className="main-container">
            <h1>Welcome To The Short Circuit Evaluation! </h1>
           {isloggedin && <p>You Are LOGGED IN</p> }
           {user ? `hello ${user}` : "You Are Logged in"}
""            <div className="buttons-section">
                <button onClick={()=>setisloggedin(!isloggedin)}>Toggle LogIn State</button>
                <button>Set User</button>
                <button>Clear User</button>
            </div>
        </section>
    )
}