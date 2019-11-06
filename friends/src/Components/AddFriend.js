import React, { useState } from 'react';
import api from "../Utils/Api";

function AddFriend(props) {

    const [error, setError] = useState("");
    const [friend, setFriend] = useState({
        id: Date.now(),
        name: "",
        age: 0,
        email: ""
    });

    const changeHandler = (event) => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        api()
            .post("/api/friends", friend)
            .then(result => {
                props.history.push("/friends-list");
                console.log(result);
            })
            .catch(err => {
                setError(err.response.data.message)
            })
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                {error && <div className="error">{error}</div>}
                <h1 className="addTitle">Add New Friend</h1>
                <input type="text" name="name" placeholder="Name" value={friend.name} onChange={changeHandler} />
                <input type="number" name="age" placeholder="Age" value={friend.age} onChange={changeHandler} />
                <input type="email" name="email" placeholder="Email" value={friend.email} onChange={changeHandler} />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;