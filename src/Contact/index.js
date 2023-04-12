import React from "react";

const Contact = () =>{

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.value);
    }

    const handleChange = (e)=>{
        e.preventDefault();
    }

    return(
        <>
            <h3>Contact</h3>
            <div style={{textAlign:'Center'}}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstName"  onChange={handleChange} placeholder="First Name"/><br/>
                    <input type="text" name="lastName"  onChange={handleChange} placeholder="Last Name"/><br/>
                    <input type="text" name="email"  onChange={handleChange} placeholder="Email"/><br/>
                    <input type="tel" name="Phone"  onChange={handleChange} placeholder="Phone"/><br/>
                    <textarea placeholder="Message"  onChange={handleChange}></textarea><br/>
                    <button type="text">Submit</button>
                </form>
            </div>
          
        </>
    )


}

export default Contact;