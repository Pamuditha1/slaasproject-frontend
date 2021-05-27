import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import {Button} from 'reactstrap'

import '../css/startPageStyle.css'

class StartPage extends Component {

    render() {
        return (
            <div className="container">    
                    <h1 style={{marginTop: "6%"}}>Welcome !.</h1>               
                    <div className="row" style={{marginTop: "10%"}}>
                        <div className="col-md col-sm-12">
                        <Link to="/applicant">
                            <Button className="btn selectionButton"  id="appBtn">                            
                                <div className="textStyle">Applicant</div>
                            </Button>
                        </Link>
                        </div>
                        <div className="col-md col-sm-12">
                        <Link to="/user/login">
                            <Button className="btn selectionButton" id="useBtn">                            
                                <div className="textStyle">User</div>
                            </Button>
                        </Link>
                        </div>
                        <div className="col-md col-sm-12">
                        <Link to="/member/login">
                            <Button className="btn selectionButton" id="memBtn">                            
                                <div className="textStyle">Member</div>
                            </Button>
                        </Link>
                        </div>
                    </div>                   
                
                </div>
        )
    }
}

export default StartPage
