import React from 'react'
import { Link} from 'react-router-dom'
import { faHome, faRegistered, faIdBadge, faIdCard, faFileInvoiceDollar, faMoneyCheckAlt, faEnvelope, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../css/sideBar.css'

function Sidebar() {


    return (
        <div className="sidenav">
            <Link to="/user">
                <p><span style={{marginRight: 10}}><FontAwesomeIcon icon={faHome} size="2x"/></span>Main</p>
            </Link>
            <Link to="/user/register-member">
                <p><span style={{marginRight: 10}}><FontAwesomeIcon icon={faIdBadge} size="2x"/></span>Register Member</p>
            </Link>
            <Link to="/user/receipt">
                <p><span style={{marginRight: 10}}><FontAwesomeIcon icon={faFileInvoiceDollar} size="2x"/></span>Receipt</p>
            </Link>  
            <Link to="/user/members">
                <p><span style={{marginRight: 10}}><FontAwesomeIcon icon={faIdCard} size="2x"/></span>Members</p>
            </Link>
            <Link to="/user/payments/view">
                <p><span style={{marginRight: 10}}><FontAwesomeIcon icon={faMoneyCheckAlt} size="2x"/></span>Payments</p>
            </Link>
            <Link to="/user/send-mails">
                <p><span style={{marginRight: 10}}><FontAwesomeIcon icon={faEnvelope} size="2x"/></span>Send Mails</p>
            </Link>
            <Link to="/user/outdated-list">
                <p><span style={{marginRight: 10}}><FontAwesomeIcon icon={faExclamationCircle} size="2x"/></span>Outdated</p>
            </Link>
            <Link to="/user/register-user">
                <p><span style={{marginRight: 10}}><FontAwesomeIcon icon={faRegistered} size="2x"/></span>Register User</p>
            </Link>
        </div>
        // <div>
        //     <Nav vertical>
        //         <NavItem>
        //             <Link to="/user"><p><span style={{marginRight: 10}}><FontAwesomeIcon icon={faHome} size="2x"/></span>Main</p></Link>
        //         </NavItem>
        //         <NavItem>
        //         <NavLink href="#">Link</NavLink>
        //         </NavItem>
        //         <NavItem>
        //         <NavLink href="#">Another Link</NavLink>
        //         </NavItem>
        //         <NavItem>
        //         <NavLink disabled href="#">Disabled Link</NavLink>
        //         </NavItem>
        //     </Nav>
        // </div>
    
    )
}

export default Sidebar
