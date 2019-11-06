import React from 'react';

function Friends(props) {
    console.log(props);
    return (
        <div className="card">
            <p><b>Name - </b>{props.friend.name}</p>
            <p><b>Age - </b>{props.friend.age}</p>
            <p><b>Email - </b>{props.friend.email}</p>
        </div>
    )
}

export default Friends