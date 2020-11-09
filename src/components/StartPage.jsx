import React, { Component } from 'react'

import { Link} from 'react-router-dom'
import {Button} from 'reactstrap'

class StartPage extends Component {

    render() {
        const itemstyle = {
        
            backgroundColor: "grey",
            padding: "20px 10px 10px 10px",
            color: "white",
            margin: "10px",
            borderRadius: "25px",
            fontWeight: "bold",
            fontFamily: "Arial",
            fontSize: "30px",
            textAlign: "center",
            width: "100%",
            height: "200px"
            
        };

        return (
            
                <div className="container">
                    
                    <div className="row" style={{marginTop: "20%"}}>
                        <div className="col-md col-sm-12">
                        <Link to="/applicant">
                            <Button style={itemstyle} className="button">                            
                                <div>Applicant</div>
                            </Button>
                        </Link>
                        </div>
                        <div className="col-md col-sm-12">
                        <Link to="/user/login">
                            <Button style={itemstyle} className="button">                            
                                <div>User</div>
                            </Button>
                        </Link>

                        </div>
                        <div className="col-md col-sm-12">
                        <Link to="/member/login">
                            <Button style={itemstyle} className="button">                            
                                <div>Member</div>
                            </Button>
                        </Link>

                        </div>
                    </div>
                    
                
                </div>
            
        )
    }
}

export default StartPage
