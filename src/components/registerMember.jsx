import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import PersonalDetailsForm from './personalDetails'

class RegisterMember extends Component {
    render() {
        return (
            <div>              
                
                    {/* <Route exact path="/member/personal" component={PersonalDetailsForm} />
                    <Route exact path="/" component={PersonalDetailsForm} />                   */}
                
                <PersonalDetailsForm />

                
            </div>
        )
    }
}

export default RegisterMember
