import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getToken } from "../Utils/Api";

function Nav() {

    const signedIn = getToken();

    return (
        <nav className="nav">
            {!signedIn && <Link to="/login">Login</Link>}
            {signedIn && <Link to={"/friends-list"}>Friends</Link>}
            {signedIn && <Link to={"/add-friend"}>Add Friend</Link>}
            {signedIn && <Link to={"/logout"}>Log Out</Link>}
        </nav>
    )

}

export default withRouter(Nav);