import React from "react";
import { Route, withRouter } from "react-router-dom";
import LoginForm from "./LoginForm";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";

function AppRouting() {
  return (
    <div>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/friends-list" component={FriendsList} />
      <Route exact path="/add-friend" component={AddFriend} />
    </div>
  );
}

export default withRouter(AppRouting);
