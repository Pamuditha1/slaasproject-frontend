import React, { Component } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import RegisterUserForm from './forms/RegisterUserForm'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import MemberRegisterForm from './forms/MemberRegisterForm'
import UserLogin from './forms/UserLogin'

class UserComponent extends Component {
    render() {
        return (
            <div>
                <Switch >                    
                    <Route path="/user/register-user" component={RegisterUserForm} />
                    <Route path="/user/register-member" component={MemberRegisterForm} />
                    <Route path="/user/login" exact component={UserLogin} />                    
                    <Route path="/user/dashboard" component={ Dashboard }/>                                       
                    <Route path="/user" exact component={Dashboard} />
                </Switch>
            </div>
        )
    }
}
export default UserComponent
