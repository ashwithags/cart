import React, { useState } from "react";

const Contact = () =>{

    const [inputs, setInputs] = useState({});
    const [textAreaInput, setTextArea]=useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputs);
    }

    const handleChange = (e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))

    }

    const handleTextAreaChange = (e)=>{
        e.preventDefault();
        setTextArea(e.target.value);

    }

    return(
        <>
            <h3>Contact</h3>
            <div style={{textAlign:'Center'}}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First Name"/><br/>
                    <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name"/><br/>
                    <input type="text" name="email" value={inputs.email} onChange={handleChange} placeholder="Email"/><br/>
                    <input type="tel" name="Phone" value={inputs.Phone} onChange={handleChange} placeholder="Phone"/><br/>
                    <textarea placeholder="Message" name="message" value={inputs.message} onChange={handleTextAreaChange}></textarea><br/>
                    <button type="text">Submit</button>
                </form>
            </div>
          
        </>
    )


}

export default Contact;