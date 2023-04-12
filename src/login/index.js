import { useState } from "react";

function Login({setToken}) {
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

        })
        .then(res => res.json())
        .then(data=>{
              console.log(data);
              if(data.message){
                alert(data.message);
              }
              setToken(data.token)

        }).catch(
            err=>{console.log(err)}
        );
    }

    return (
        <div className="container" style={{margin:30}}>
            <div className="col-sm-4">
            <div className="card">
            <h5 className="card-header">Login</h5>
            <div className="card-body">
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
                    <input className="btn btn-primary" type="submit" />
                </form>

                {/* <label>Invalid credentials</label> */}
            </div>
        </div>

            </div>
            <div className="col-sm-4">
                <p>  username: 'kminchelle', password: '0lelplR',</p>
            </div>
        </div>
       
    )
}

export default Login;