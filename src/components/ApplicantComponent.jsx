import React, { Component } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import MemberRegisterForm from './forms/MemberRegisterForm'
import NotFound from './NotFound'

class ApplicantComponent extends Component {
    render() {
        return (
            <div>
                <Switch>                   
                    <Route path="/applicant/register" component={MemberRegisterForm}/>
                    <Route path="/applicant" component={MemberRegisterForm}/>           
                </Switch>
                
            </div>
        )
    }
}

export default ApplicantComponent
