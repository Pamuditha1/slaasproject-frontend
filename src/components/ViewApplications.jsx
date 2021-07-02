import React from "react";
import { ApplicationsTable } from "../projectTables/applications/ApplicationsTable";

function ViewApplications() {
  const headStyle = {
    textShadow: "0px 0px 1px #111111",
  };

  return (
    <div>
      <h4 className="mt-5 mb-5 text-center" style={headStyle}>
        Membership Applications
      </h4>
      <ApplicationsTable />
    </div>
  );
}

export default ViewApplications;
