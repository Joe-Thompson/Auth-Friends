import React, { useState } from 'react';
import api from "../Utils/Api";

function LoginForm(props) {

    const [error, setError] = useState("");
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const changeHandler = (event) => {
       setData({
           ...data,
           [event.target.name]: event.target.value
       });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        api()
            .post("/api/login", data)
            .then(result => {
                console.log(result);
                localStorage.setItem("token", result.data.payload);
                props.history.push("/friends-list");
                console.log(data);
            })
            .catch(err => {
                setError(err.response.data.message)
            })
    };

    return (
        <div>
            <form onSubmit={submitHandler} >
                {error && <div className="error">{error}</div>}
                <input type="text" name="username" placeholder="User Name" value={data.user} onChange={changeHandler} />
                <input type="password" name="password" placeholder="Password" value={data.password} onChange={changeHandler} />
                <button type="submit" >Log In</button>
            </form>
        </div>
    )

}

export default LoginForm