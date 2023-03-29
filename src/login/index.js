import { useState } from "react";

function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        fetch('https://dummyjson.com/auth/login',{
        method:"post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)

        }).then(data=>{
            console.log(data);
        }).catch(
            err=>{console.log(err)}
        );
    }

    return (
        <div className="container" style={{margin:30}}>
            <div className="col-sm-4">
            <div class="card">
            <h5 class="card-header">Login</h5>
            <div class="card-body">
                <form onSubmit={handleSubmit}>
                    <label>Username:
                        <input
                            type="text"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                        />
                    </label><br />
                    <label>Password:
                        <input
                            type="password"
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </label><br />
                    <input class="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>

            </div>
        </div>
       
    )
}

export default Login;