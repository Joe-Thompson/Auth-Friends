import React from "react";
import { Route, withRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "./LoginForm";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import Logout from "./Logout";

function AppRouting() {
  return (
    <div>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/friends-list" component={FriendsList} />
      <ProtectedRoute exact path="/add-friend" component={AddFriend} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default withRouter(AppRouting);
