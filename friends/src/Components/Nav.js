import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to={"/friends-list"}>Friends</Link>
            <Link to={"/add-friend"}>Add Friend</Link>
            <Link to={"/"}>Log Out</Link>
        </div>
    )

}

export default Nav;