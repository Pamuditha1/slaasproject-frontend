import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

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
import UpdateMember from "./UpdateMember";
import Settings from "./Settings";
import Grades from "./Grades";
import Sections from "./Sections";
import Arrears from "./Arrears";
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
          <Route
            path="/user/member/profile/update/:id"
            component={UpdateMember}
          />
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
          <Route path="/user/login" exact component={NewAdminLogin} />
          <Route path="/user/dashboard" component={Dashboard} />
          <Route path="/user/receipt" component={Receipt} />

          {/* <Route path="/user/members/send-emails" render={(props) => 
                            <EmailComponent emailsList={emailsList} {...props}/>} /> */}
          {/* <Route path="/user/members/all" component={MemberAllTable} />
                        <Route path="/user/members/search" render={(props) => 
                            <MemberSearchTable members={searchedResults} {...props}/>} />  
                                                                 */}
          {/* <Route path="/user/outdated" component={Outdated} />                                     */}
          <Route path="/user/outdated-list" component={OutdatedMemberships} />
          <Route path="/user/terminated-list" component={TerminatedMembers} />
          {/* <Route exact path="/user/arrears-calculator" component={Arrears} />  */}
          <Route
            path="/user/arrears-calculator"
            render={(props) => <Arrears setArr={setArr} {...props} />}
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
            path="/user/settings/manage-committees"
            component={SetCommitteMembers}
          />
          <Route path="/user" exact component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}
export default UserComponent;
