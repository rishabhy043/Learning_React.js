import { useState } from "react";
import "./form.css";

export const LoginForm = () => {
    const [user, setuser] = useState({
        UserName: "",
        PassWord: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setuser((prev) => ({ ...prev, [name]: value }))
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (<>
        <form onSubmit={handleFormSubmit} >
            <div className="container">
                <h1>Login Form</h1>

                <label htmlFor="UserName">
                    <b>UserName</b>
                </label>
                <input type="text"
                    name="UserName"
                    value={user.UserName}
                    placeholder="Enter Name"
                    onChange={handleInputChange}
                    required />

                <label htmlFor="PassWord">
                    <b>UserName</b>
                </label>
                <input type="text"
                    name="PassWord"
                    value={user.PassWord}
                    placeholder="Enter PassWord"
                    onChange={handleInputChange}
                    required />
                <button type="submit">Login </button>
            </div>
        </form>
    </>)
}