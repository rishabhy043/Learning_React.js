import { useState } from "react"
import "./form.css"
export const ContactForm = () => {
    const [user, setuser] = useState({
        UserName: "",
        PassWord: "",
        Message: ""
    })

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
                <h1>Contact Form</h1>

                <label htmlFor="UserName"><b>UserName </b></label>
                <input type="text"
                    placeholder="Enter Name"
                    name="UserName"
                    required
                    value={user.UserName}
                    onChange={handleInputChange}
                />

                <label htmlFor="PassWord"><b>PassWord </b></label>
                <input type="text"
                    placeholder="PassWord"
                    name="PassWord"
                    required
                    value={user.PassWord}
                    onChange={handleInputChange}
                />

                <label htmlFor="Message"><b>Message</b></label>
                    <textarea
                        placeholder="Type your message"
                        name="Message"
                        required
                        value={user.Message}
                        onChange={handleInputChange}
                    />

                <button type="submit">SUBMIT</button>
            </div>
        </form>
    </>)
}