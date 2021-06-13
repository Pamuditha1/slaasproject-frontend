import React from "react";
import { Link } from "react-router-dom";
import SettingItem from "./SettingItem";

function Settings() {
  return (
    <div>
      <div className="row mr-3">
        <SettingItem name="Membership Grades" link="/user/settings/grades" />
        <SettingItem
          name="Membership Sections"
          link="/user/settings/sections"
        />
        <SettingItem
          name="Termination Periods"
          link="/user/settings/terminations"
        />
        <SettingItem name="Add New Committe" link="/user/settings/committees" />
        <SettingItem
          name="Manage Committies"
          link="/user/settings/manage-committees"
        />
        {/* <div className="col-6">
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
                </div> */}
      </div>
    </div>
  );
}

export default Settings;
