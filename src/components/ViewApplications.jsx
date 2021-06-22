import React from "react";
import { ApplicationsTable } from "../projectTables/applications/ApplicationsTable";

function ViewApplications() {
  return (
    <div>
      <h6
        style={{ backgroundColor: "#e95045" }}
        className="pl-5 pt-1 pb-1 mb-5"
      >
        Applications
      </h6>
      <ApplicationsTable />
    </div>
  );
}

export default ViewApplications;
