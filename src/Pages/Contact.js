import { useState } from "react";

function Contact () {
    const [inputs, setInputs] = useState([{
        name:"Name",
        email:"Email",
        reason:"Reason",
        comments:"Comments",
    }]);
    const [contactForm, setContactForm] = useState(
        {
            name: "",
            email: "",
            reason: "", 
            comments: "",
        }
    )
    function handleChange(e) {
        setContactForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    return (
    <>
        <div className="contact-form">
            <h3>GET IN TOUCH</h3>
        </div>
        <form>
        <div className="field">
            <label>
                <input
                    type="text"
                    placeholder="NAME"
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <br></br>
            <label>
                <input
                    type="text"
                    placeholder="EMAIL"
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <br></br>
            <label onChange={handleChange}>
                <select className="dropdown" name="reason">
                    <option value="Reason">REASON</option>
                    <option value="Design Services">DESIGN SERVICES</option>
                    <option value="Leave Feedback">LEAVE FEEDBACK</option>
                </select>
            </label>
            <br></br>
            <label>
                <input className="details"
                    type="text"
                    placeholder="PROVIDE DETAILS HERE"
                    name="comments"
                    onChange={handleChange}
                />
            </label>
            <br></br>
        </div>
            <button className="submit">
                SUBMIT
            </button>
        </form>
    </>
    )
}

export default Contact;

