import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";
import RealWindow from "./RealWindow";
import ProjectWindow from "./ProjectWindow";

class Main extends Component {
  render() {
    return (
      <>
        {/* <RealWindow /> */}
        <ProjectWindow />
        {/* <Header />
        <div>
          <ToastContainer />
          <Switch>
            <Route path="/applicant" component={ApplicantComponent} />
            <Route path="/user" component={UserComponent} />
            <Route path="/member" component={MemberComponent} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" component={Logins} />
            <Redirect to="/not-found" />
          </Switch>
        </div> */}
      </>
    );
  }
}

export default Main;
