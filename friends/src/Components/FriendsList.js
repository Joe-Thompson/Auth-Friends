import React, { useState, useEffect } from 'react';
import api from "../Utils/Api";
import Friends from "./Friends";

function FriendsList() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        api()
        .get("/api/friends")
            .then(result => {
                setFriends(result.data);
            })
            .catch(err => {
                console.log(err)
            })
    },[]);

console.log(friends);
    return (
        <div>
            <h1>hey you guys</h1>
            {friends.map((item, index) => {
               return <Friends key={index} friend={item} />
            })}
        </div>
    )
}

export default FriendsList