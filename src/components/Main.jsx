import React, { Component } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import NotFound from './NotFound'
import Logins from './StartPage'
import UserComponent from './UserComponent'
import 'react-datepicker/dist/react-datepicker.css'
import ApplicantComponent from './ApplicantComponent'
import MemberComponent from './MemberComponent'
import Header from './Header'
// import { UserProvider } from '../../userContext'



class Main extends Component {
    render() {
        return (
            <>
            <Header />
            <div className="container-fulid">
                
                <ToastContainer />
                <Switch >
                    <Route path="/applicant" component={ApplicantComponent}/> 
                    <Route path="/user" component={UserComponent}/>   
                    <Route path="/member" component={MemberComponent}/>
                    <Route path="/not-found" component={NotFound} />  
                    <Route path="/" component={Logins} /> 
                    <Redirect to="/not-found" />            
                </Switch>

                {/* <MyProvider>
                    <TestingLogin />
                </MyProvider>     */}
                {/*   */}
                
            </div>
            </>
        );
    }
}

export default Main;