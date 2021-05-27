import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import MemberOnlineApply from './forms/MemberOnlineApply'
import NotFound from './NotFound'
import RegisterUserForm from './forms/RegisterUserForm'
import ApplicantLogin from './forms/ApplicantLogin'

class ApplicantComponent extends Component {
    render() {
        const accountType = "applicant"
        return (
            
            <div>
                <Switch>          
                    <Route path="/applicant/register-applicant" component={()=><RegisterUserForm accountType={accountType}/>} />         
                    <Route path="/applicant/membership-apply" component={MemberOnlineApply}/>
                    <Route path="/applicant/login" component={ApplicantLogin}/>
                    <Route path="/applicant" component={ApplicantLogin}/>           
                </Switch>                
            </div>
        )
    }
}

export default ApplicantComponent
