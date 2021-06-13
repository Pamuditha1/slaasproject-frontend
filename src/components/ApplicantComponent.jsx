import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
    const accountType = "applicant";
    return (
      <div className="container">
        <Switch>
          <Route
            path="/applicant/register-applicant"
            // component={() => <RegisterUserForm accountType={accountType} />}
            component={() => <RegisterApplicant accountType={accountType} />}
          />
          <Route
            path="/applicant/membership-apply"
            // component={MemberOnlineApply}
            component={ApplicantMemRegister}
          />

          <Route path="/applicant/progress" component={ApplicationProgress} />
          <Route path="/applicant/login" component={NewApplicantLogin} />
          <Route path="/applicant" component={NewApplicantLogin} />
          {/* <Route path="/applicant/login" component={ApplicantLogin} />
          <Route path="/applicant" component={ApplicantLogin} /> */}
        </Switch>
      </div>
    );
  }
}

export default ApplicantComponent;
