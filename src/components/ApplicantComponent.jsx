import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MemberOnlineApply from "./forms/MemberOnlineApply";
import NotFound from "./NotFound";
import RegisterUserForm from "./forms/RegisterUserForm";
import ApplicantLogin from "./forms/ApplicantLogin";
import RegisterApplicant from "./forms/RegisterApplicant";
import NewApplicantLogin from "./forms/NewApplicantLogin";
import ApplicantMemRegister from "./forms/ApplicantMemRegister";
import ApplicationProgress from "./ApplicationProgress";

class ApplicantComponent extends Component {
  render() {
    const jwt = localStorage.getItem("ApplicantToken");
    let type = "";
    let username = "";
    if (jwt) {
      type = jwtDecode(jwt).type;
      username = jwtDecode(jwt).username;
    } else {
      type = "";
    }

    console.log("Location", this.props.location.pathname);

    const logout = () => {
      // console.log("Logging Out");
      localStorage.removeItem("ApplicantToken");
      this.props.history.push("/");
    };

    const logoutStyle = {
      position: "fixed",
      top: "10",
      right: "0",
      zIndex: "+1",
      textAlign: "right",
    };

    return (
      <>
        {(this.props.location.pathname == "/applicant/membership-apply" ||
          this.props.location.pathname == "/applicant/progress") && (
          <div className="text-right mr-5" style={logoutStyle}>
            <FontAwesomeIcon icon={faUserCircle} size="2x" className="mr-3" />
            <h6>{username}</h6>
            <small>
              <button className="btn btn-light btn-sm" onClick={logout}>
                Logout
              </button>
            </small>
          </div>
        )}
        <div className="container">
          <Switch>
            <Route
              path="/applicant/register-applicant"
              // component={() => <RegisterUserForm accountType={accountType} />}
              component={() => <RegisterApplicant accountType={type} />}
            />
            {type == "Applicant" ? (
              <Route
                path="/applicant/membership-apply"
                // component={MemberOnlineApply}
                component={ApplicantMemRegister}
              />
            ) : (
              <Route
                path="/applicant/progress"
                component={ApplicationProgress}
              />
            )}
            {type == "Applied" ? (
              <Route
                path="/applicant/progress"
                component={ApplicationProgress}
              />
            ) : (
              <Route
                path="/applicant/membership-apply"
                // component={MemberOnlineApply}
                component={ApplicantMemRegister}
              />
            )}
            <Route path="/applicant/login" component={NewApplicantLogin} />
            <Route path="/applicant" component={NewApplicantLogin} />
            {/* <Route path="/applicant/login" component={ApplicantLogin} />
          <Route path="/applicant" component={ApplicantLogin} /> */}
          </Switch>
        </div>
      </>
    );
  }
}

export default ApplicantComponent;
