import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import { faSearch, faHome,faRegistered, faIdBadge} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from 'reactstrap'

function DashboardItem(props) {
    const itemstyle = {
        
        backgroundColor: `${props.backgroundColor}`,
        padding: "20px 10px 10px 10px",
        margin: "10px",
        color: "white",
        borderRadius: "25px",
        fontWeight: "bold",
        fontFamily: "Arial",
        fontSize: "30px",
        textAlign: "center",
        width: "500px",
        height: "150px"
    };


    let icon = <div></div>
    if (props.icn == "faSearch") icon = <FontAwesomeIcon icon={faSearch} size="2x"/>
    else if (props.icn == "faHome") icon = <FontAwesomeIcon icon={faHome} size="2x"/>
    else if (props.icn == "faRegistered") icon = <FontAwesomeIcon icon={faRegistered} size="2x"/>
    else if (props.icn == "faIdBadge") icon = <FontAwesomeIcon icon={faIdBadge} size="2x"/>

     return (
        <Link to={props.link}>
            <Button style={itemstyle} className="button">
                {icon}
                <div>{props.name}</div>
            </Button>
        </Link>

    );
    
}

export default DashboardItem;


