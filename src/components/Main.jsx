import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginForm from './loginForm'
import RegisterUserForm from './registerUserForm'
import StateManager from './StateManager'
import {ToastContainer} from 'react-toastify'
import TestingLogin from './TestingLogin'
import MyProvider from './StateManager'
import Dashboard from './Dashboard'
import RegisterMember from './registerMember'
// import { UserProvider } from '../../userContext'



class Main extends Component {
    render() {
        return (
            <div className="container">    
                     
                <ToastContainer />
                <Switch >
                    <Route exact path="/register" component={RegisterUserForm} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/dashboard" component={ Dashboard }/>
                    <Route exact path="/member" component={RegisterMember} />  
                    <Route exact path="/" component={LoginForm} />
                                   
                </Switch>

                {/* <MyProvider>
                    <TestingLogin />
                </MyProvider>     */}
                {/* <Dashboard /> */}
                
            </div>
        );
    }
}

export default Main;