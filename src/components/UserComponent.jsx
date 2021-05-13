import React, { useState } from 'react'
import {Redirect, Route, Switch, useLocation} from 'react-router-dom'
import RegisterUserForm from './forms/RegisterUserForm'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import MemberRegisterForm from './forms/MemberRegisterForm'
import UserLogin from './forms/UserLogin'
import Sidebar from './Sidebar'
import ViewMembers from './ViewMembers'
import ViewPayments from './ViewPayments'
import MemberPaymentForm from './forms/MemberPaymentForm'
import NewRegisterForm from '../components/forms/NewRegisterForm'
import {MemberProfile} from '../components/MemberProfile'
import NewMemberPaymentForm from './forms/NewMemberPaymentForm'
import EmailComponent from './EmailComponent'
import {MemberAllTable} from '../projectTables/memberAllRecords/MemberAllTable'
import { MemberSearchTable } from '../projectTables/memberSearch/MemberSearchTable';
import SendMails from './SendMails'
import OutdatedMemberships from './OutdatedMemberships'


function UserComponent(props) {

    const [emailsList, setemailsList] = useState([])
    
    function setMails(list){
        setemailsList(list)
    }

    const currentLocation = props.location.pathname;
    console.log("location", currentLocation);
    const link = "/user/register-member"
    const accountType = "user"

        return (
            <div className="row">
                { (currentLocation !== "/user/login") &&
                    <div className="col-2">
                    {/* <Sidebar active={link}/> */}
                    <Sidebar />
                    </div> 
                }                               
                <div className="col-10"> 
                    <Switch>                    
                        <Route path="/user/register-user" component={()=><RegisterUserForm accountType={accountType}/>} />
                        <Route path="/user/register-member" component={NewRegisterForm} />                        
                        {/* <Route path="/user/members/send-emails" component={EmailComponent} />   */}
                        <Route path="/user/member/profile/:id" component={MemberProfile}/>
                        {/* <Route path="/user/members" component={ViewMembers}/> */}
                        <Route path="/user/members" render={(props) => 
                            <ViewMembers emailsList={emailsList} setMails={setMails} {...props}/>} />
                        <Route path="/user/send-mails" component={SendMails}/>
                        <Route path="/user/payments/view" component={ViewPayments}/>
                        <Route path="/user/login" exact component={UserLogin} />                    
                        <Route path="/user/dashboard" component={ Dashboard }/>
                        <Route path="/user/receipt" component={NewMemberPaymentForm} />
                        <Route path="/user/members/send-emails" render={(props) => 
                            <EmailComponent emailsList={emailsList} {...props}/>} />
                        {/* <Route path="/user/members/all" component={MemberAllTable} />
                        <Route path="/user/members/search" render={(props) => 
                            <MemberSearchTable members={searchedResults} {...props}/>} />  
                                                                 */}
                        <Route path="/user/outdated-list" component={OutdatedMemberships} />
                        <Route path="/user" exact component={Dashboard} />                        
                    </Switch>
                </div>
            </div>
        )
    
}
export default UserComponent
