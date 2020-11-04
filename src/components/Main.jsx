import React, { Component } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import LoginForm from './loginForm'
import RegisterUserForm from './registerUserForm'
import StateManager from './StateManager'
import {ToastContainer} from 'react-toastify'
import TestingLogin from './TestingLogin'
import MyProvider from './StateManager'
import Dashboard from './Dashboard'
import RegisterMember from './registerMember'
import NotFound from './NotFound'
import TestingMain from './forms/TestingMain'
import Logins from './Logins'
// import { UserProvider } from '../../userContext'



class Main extends Component {
    render() {
        return (
            <div className="container">    
                     
                <ToastContainer />
                <Switch >
                    <Route path="/register" component={RegisterUserForm} />
                    <Route path="/login/user" exact component={LoginForm} />
                    <Route path="/login" component={Logins} />
                    <Route path="/dashboard" component={ Dashboard }/>
                    <Route path="/member" component={RegisterMember} />
                    <Route path="/testing-form" component={TestingMain}/> 
                    <Route path="/not-found" component={NotFound} />                                        
                    <Route path="/" exact component={LoginForm} />
                    <Redirect to="/not-found" />            
                </Switch>

                {/* <MyProvider>
                    <TestingLogin />
                </MyProvider>     */}
                {/*   */}
                
            </div>
        );
    }
}

export default Main;