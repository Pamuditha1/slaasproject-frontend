import React from 'react'
import {Link} from 'react-router-dom'

function Settings() {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <Link to="/user/settings/grades">
                    <button className="btn btn-primary">
                        Membership Grades
                    </button> 
                    </Link>                   
                </div>
                <div className="col-6">
                    <Link to="/user/settings/sections">
                    <button className="btn btn-primary">
                        Membership Sections
                    </button> 
                    </Link>                    
                </div>
                <div className="col-6">
                    <Link to="/user/settings/membership-payments">
                    <button className="btn btn-primary">
                        Membership Payments
                    </button> 
                    </Link>                    
                </div>
            </div>
        </div>
    )
}

export default Settings
