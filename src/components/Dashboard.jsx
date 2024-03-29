import React, { Component } from 'react';

import DashboardItem from './DashboardItem';

class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="row">
                
                    <DashboardItem link="/user/register-user" className="col-6" backgroundColor="1f262a" name="Register User" icn="faRegistered"/>                  
                    <DashboardItem link="/user/register-member" className="col-6" backgroundColor="green" name="Register Member" icn="faIdBadge"/>
                    <DashboardItem backgroundColor="blue" name="View Users" icn="faSearch"/>
                    <DashboardItem backgroundColor="yellow" name="View Members" icn="faIdCard"/>
                    <DashboardItem backgroundColor="blue" name="Member Profile" icn="faUserCircle"/>
                    <DashboardItem backgroundColor="yellow" name="Reports"/>
                    <DashboardItem backgroundColor="blue" name="Emails" icn="faSearch"/>
                    <DashboardItem backgroundColor="yellow" name="Certificates"/>
                    <DashboardItem backgroundColor="blue" name="Reports" icn="faSearch"/>
                    <DashboardItem backgroundColor="yellow" name="Receipts"/>
                
                </div>
            </>
        );
    }
}

export default Dashboard;