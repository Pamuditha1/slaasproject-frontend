import React, { Component } from 'react'
import {Redirect, Route, Switch, useLocation} from 'react-router-dom'
import RegisterUserForm from './forms/RegisterUserForm'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import MemberRegisterForm from './forms/MemberRegisterForm'
import UserLogin from './forms/UserLogin'
import Sidebar from './forms/Sidebar'


class UserComponent extends Component {
    
    render() {
        const currentLocation = this.props.location.pathname;
        console.log("location", currentLocation);
        const link = "/user/register-member"
        const accountType = "user"
        return (
            <div className="row">
                { (currentLocation !== "/user/login") &&
                    <div className="col-3">
                    <Sidebar active={link}/>
                    </div> 
                }                               
                <div className="col-9"> 
                    <Switch >                    
                        <Route path="/user/register-user" component={()=><RegisterUserForm accountType={accountType}/>} />
                        <Route path="/user/register-member" component={MemberRegisterForm} />
                        <Route path="/user/login" exact component={UserLogin} />                    
                        <Route path="/user/dashboard" component={ Dashboard }/>                                       
                        <Route path="/user" exact component={Dashboard} />
                    </Switch>
                </div>
            </div>
        )
    }
}
export default UserComponent
