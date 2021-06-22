import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import MemberLogin from "./forms/MemberLogin";
import NewMemberLogin from "./forms/NewMemberLogin";
import RegisterMember from "./forms/RegisterMember";
import { MemberViewProfile } from "./MemberViewProfile";

class MemberComponent extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/member/register"
            // component={() => <RegisterUserForm accountType={accountType} />}
            component={() => <RegisterMember />}
          />
          <Route path="/member/login" exact component={NewMemberLogin} />
          <Route
            path="/member/profile/:id"
            exact
            component={MemberViewProfile}
          />
          <Route path="/member" exact component={NewMemberLogin} />
        </Switch>
      </div>
    );
  }
}

export default MemberComponent;
