import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import MemberLogin from './forms/MemberLogin'

class MemberComponent extends Component {
    render() {
        return (
            <div>
                <h1>Member</h1>
                <Switch >   
                    <Route path="/member/login" exact component={MemberLogin} />                                    
                    <Route path="/member" exact component={MemberLogin} />
                </Switch>
            </div>
        );
    }
}

export default MemberComponent;