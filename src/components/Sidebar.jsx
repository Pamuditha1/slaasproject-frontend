import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faHome,
  faRegistered,
  faIdBadge,
  faIdCard,
  faFileInvoiceDollar,
  faMoneyCheckAlt,
  faEnvelope,
  faExclamationCircle,
  faCog,
  faCalculator,
  faChartBar,
  faUsers,
  faMoneyBill,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, NavItem, NavLink } from "reactstrap";
import "../css/sideBar.css";

function Sidebar({ arrearsCalculating }) {
  const [clicked, setclicked] = useState("");

  const onClickStyle = {
    backgroundColor: "white",
    opacity: "0.7",
    color: "black",
    fontWeight: "bold",
  };
  const s = {};
  const onClick = (e) => {
    setclicked(e.target.id);
    console.log(clicked);
  };

  return (
    <div className="sidenav">
      {/* <Link to="/user">
                <div className="row m-3">
                    <span className="col-2"><FontAwesomeIcon icon={faHome} size="2x" /></span>
                    <p className="col-10">Main</p>
                </div> 
                <p onClick={onClick} id='main' style={(clicked == 'main') ? onClickStyle : s}>
                    <span style={{marginRight: 10}}><FontAwesomeIcon icon={faHome} size="2x"/></span>Main</p>
            </Link> */}
      <Link to="/user/register-member">
        <p onClick={onClick} id="rm" style={clicked == "rm" ? onClickStyle : s}>
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faIdCard} size="2x" />
          </span>
          Register Member
        </p>
      </Link>
      <Link to="/user/receipt">
        <p
          onClick={onClick}
          id="receipt"
          style={clicked == "receipt" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faMoneyBill} size="2x" />
          </span>
          Receipt
        </p>
      </Link>
      <Link to="/user/members">
        <p
          onClick={onClick}
          id="members"
          style={clicked == "members" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faUsers} size="2x" />
          </span>
          Members
        </p>
      </Link>
      <Link to="/user/payments/view">
        <p
          onClick={onClick}
          id="payments"
          style={clicked == "payments" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" />
          </span>
          Payments
        </p>
      </Link>
      <Link to="/user/send-mails">
        <p
          onClick={onClick}
          id="mails"
          style={clicked == "mails" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </span>
          Send Mails
        </p>
      </Link>
      <Link to="/user/outdated-list">
        <p
          onClick={onClick}
          id="outdated"
          style={clicked == "outdated" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
          </span>
          Outdated
        </p>
      </Link>
      <Link to="/user/terminated-list">
        <p
          onClick={onClick}
          id="terminated"
          style={clicked == "terminated" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faBan} size="2x" />
          </span>
          Terminated
        </p>
      </Link>
      {/* <Link to="/user/register-user">
                <p onClick={onClick} id='user' style={(clicked == 'user') ? onClickStyle : s}>
                    <span style={{marginRight: 10}}><FontAwesomeIcon icon={faRegistered} size="2x"/></span>Register User</p>
            </Link> */}
      <Link to="/user/reports">
        <p
          onClick={onClick}
          id="reports"
          style={clicked == "reports" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faChartBar} size="2x" />
          </span>
          Reports
        </p>
      </Link>
      <Link to="/user/arrears-calculator">
        <p
          onClick={onClick}
          id="arrears"
          style={clicked == "arrears" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faCalculator} size="2x" />
          </span>
          {arrearsCalculating ? "Calculating..." : "Update Arrears"}
        </p>
      </Link>
      <Link to="/user/settings">
        <p
          onClick={onClick}
          id="settings"
          style={clicked == "settings" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faCog} size="2x" />
          </span>
          Settings
        </p>
      </Link>
    </div>
  );
}

export default Sidebar;
