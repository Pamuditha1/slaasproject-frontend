import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

import NotFound from "./NotFound";
import UserComponent from "./UserComponent";
import Header from "./Header";
import AdminLogin from "./AdminLogin";

class RealWindow extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <ToastContainer />
          <Switch>
            <Route path="/user" component={UserComponent} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" component={AdminLogin} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </>
    );
  }
}

export default RealWindow;
