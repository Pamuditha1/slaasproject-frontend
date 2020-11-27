import React, { Component } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import MemberOnlineApply from './forms/MemberOnlineApply'
import NotFound from './NotFound'
import RegisterUserForm from './forms/RegisterUserForm'

class ApplicantComponent extends Component {
    render() {
        const accountType = "applicant"
        return (
            
            <div>
                <Switch>          
                    <Route path="/applicant/register-user" component={()=><RegisterUserForm accountType={accountType}/>} />         
                    <Route path="/applicant/register" component={MemberOnlineApply}/>
                    <Route path="/applicant" component={MemberOnlineApply}/>           
                </Switch>
                
            </div>
        )
    }
}

export default ApplicantComponent
