import React, { Component } from 'react'
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


class UserComponent extends Component {
    
    render() {
        const currentLocation = this.props.location.pathname;
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
                        <Route path="/user/members" component={ViewMembers}/>
                        <Route path="/user/payments/view" component={ViewPayments}/>
                        <Route path="/user/login" exact component={UserLogin} />                    
                        <Route path="/user/dashboard" component={ Dashboard }/>
                        <Route path="/user/receipt" component={NewMemberPaymentForm} />                                      
                        <Route path="/user" exact component={Dashboard} />                        
                    </Switch>
                </div>
            </div>
        )
    }
}
export default UserComponent
