import React from 'react'
import { Link} from 'react-router-dom'
import { faHome, faRegistered, faIdBadge} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/sideBar.css'

function Sidebar() {


    return (
        <div className="sidenav">
            <Link to="/user">
                <p><span style={{marginRight: 20}}><FontAwesomeIcon icon={faHome} size="2x"/></span>Main</p>
            </Link>
            <Link to="/user/register-member">
                <p style={{color: "white"}}><span style={{marginRight: 20}}><FontAwesomeIcon icon={faIdBadge} size="2x"/></span>Register Member</p>
            </Link>
            <Link to="/user/register-user">
                <p><span style={{marginRight: 20}}><FontAwesomeIcon icon={faRegistered} size="2x"/></span>Register User</p>
            </Link>
        </div>
    
    )
}

export default Sidebar
