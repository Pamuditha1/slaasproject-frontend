import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import RegisterUserForm from "./forms/RegisterUserForm";
import Dashboard from "./Dashboard";
import UserLogin from "./forms/UserLogin";
import Sidebar from "./Sidebar";
import ViewMembers from "./ViewMembers";
import ViewPayments from "./ViewPayments";
import NewRegisterForm from "../components/forms/NewRegisterForm";
import { MemberProfile } from "../components/MemberProfile";
import NewMemberPaymentForm from "./forms/NewMemberPaymentForm";
import EmailComponent from "./EmailComponent";
import SendMails from "./SendMails";
import OutdatedMemberships from "./OutdatedMemberships";
// import UpdateMember from "./UpdateMember";
import Settings from "./Settings";
import Grades from "./Grades";
import Sections from "./Sections";
import Operations from "./Operations";
import Receipt from "./Receipt";
import Outdated from "./Outdated";
import TerminatedMembers from "./TerminatedMembers";
import TerminationPeriods from "./TerminationPeriods";
import Commities from "./Commities";
import SetCommitteMembers from "./SetCommitteMembers";
import SuiteSidebar from "./SuiteSidebar";
import { MemberProfileWUpdate } from "./MemberProfileWUpdate";
import NewAdminLogin from "./forms/NewAdminLogin";
import NewRegisterUser from "./forms/NewRegisterUser";
import FormarCommittees from "./FomerCommittees";
import ViewApplications from "./ViewApplications";
import { ViewOneApplication } from "./ViewOneApplication";
import EmailSettings from "./EmailSettings";
import EmailSettingElement from "./EmailSettingElement";
import MemberRequests from "./MemberRequests";
import ViewMembershipReport from "./ViewMembershipReport";
import ViewPaymentReports from "./ViewPaymentReports";
import RedirectLogin from "./RedirectLogin";

function UserComponent(props) {
  const [emailsList, setemailsList] = useState([]);
  const [arrearsCalculating, setarrearsCalculating] = useState(false);

  function setArr(b) {
    setarrearsCalculating(b);
  }
  function setMails(list) {
    setemailsList(list);
  }

  const currentLocation = props.location.pathname;
  console.log("location", currentLocation);
  const link = "/user/register-member";
  const accountType = "user";

  return (
    <div className="row">
      <div className={currentLocation !== "/user/login" && "col-2"}>
        {currentLocation !== "/user/login" && (
          // <Sidebar arrearsCalculating={arrearsCalculating} />
          <SuiteSidebar />
        )}
      </div>

      {/* <div className="col-10"> */}
      <div className={currentLocation !== "/user/login" ? "col-10" : "col-12"}>
        <Switch>
          <Route path="/user/login" exact component={NewAdminLogin} />
          <Route exact path="/user" component={RedirectLogin} />

          {localStorage.getItem("token") ? (
            <>
              <Route
                path="/user/register-user"
                // component={() => <RegisterUserForm accountType={accountType} />}
                component={() => <NewRegisterUser accountType={accountType} />}
              />
              <Route path="/user/register-member" component={NewRegisterForm} />
              {/* <Route path="/user/members/send-emails" component={EmailComponent} />   */}
              <Route
                exact
                path="/user/member/profile/:id"
                // component={MemberProfile}
                component={MemberProfileWUpdate}
              />
              {/* <Route
                path="/user/member/profile/update/:id"
                component={UpdateMember}
              /> */}
              <Route
                path="/user/members"
                render={(props) => (
                  <ViewMembers
                    emailsList={emailsList}
                    setMails={setMails}
                    {...props}
                  />
                )}
              />
              <Route path="/user/send-mails" component={SendMails} />
              <Route path="/user/payments/view" component={ViewPayments} />
              {/* <Route path="/user/login" exact component={UserLogin} /> */}

              <Route path="/user/dashboard" component={Dashboard} />
              <Route path="/user/receipt" component={Receipt} />

              {/* <Route path="/user/members/send-emails" render={(props) => 
                            <EmailComponent emailsList={emailsList} {...props}/>} /> */}
              {/* <Route path="/user/members/all" component={MemberAllTable} />
                        <Route path="/user/members/search" render={(props) => 
                            <MemberSearchTable members={searchedResults} {...props}/>} />  
                                                                 */}
              {/* <Route path="/user/outdated" component={Outdated} />                                     */}
              <Route
                path="/user/outdated-list"
                component={OutdatedMemberships}
              />
              <Route
                path="/user/terminated-list"
                component={TerminatedMembers}
              />
              {/* <Route exact path="/user/arrears-calculator" component={Arrears} />  */}
              <Route
                path="/user/operations"
                render={(props) => <Operations setArr={setArr} {...props} />}
              />
              <Route exact path="/user/settings" component={Settings} />
              <Route path="/user/settings/grades" component={Grades} />
              <Route path="/user/settings/sections" component={Sections} />
              <Route
                path="/user/settings/terminations"
                component={TerminationPeriods}
              />
              <Route path="/user/settings/committees" component={Commities} />
              <Route
                path="/user/committees/history"
                component={FormarCommittees}
              />
              <Route
                path="/user/manage-committees"
                component={SetCommitteMembers}
              />
              <Route
                exact
                path="/user/email-settings"
                component={EmailSettings}
              />
              <Route
                path="/user/email-settings/edit/:id"
                component={EmailSettingElement}
              />

              <Route path="/user" exact component={Dashboard} />

              <Route
                path="/user/view-applications"
                exact
                component={ViewApplications}
              />
              <Route
                path="/user/member-requests"
                exact
                component={MemberRequests}
              />
              <Route
                path="/user/view-application/:nic"
                exact
                component={ViewOneApplication}
              />
              <Route
                path="/user/reports/membership"
                exact
                component={ViewMembershipReport}
              />
              <Route
                path="/user/reports/payments"
                exact
                component={ViewPaymentReports}
              />
            </>
          ) : (
            <Redirect to="/user/login" />
          )}
        </Switch>
      </div>
    </div>
  );
}
export default UserComponent;
