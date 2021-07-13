import React from "react";
import { MemberRequestsTable } from "../projectTables/memberRequests/MemberRequestsTable";

function MemberRequests() {
  const headStyle = {
    textShadow: "0px 0px 1px #111111",
  };

  return (
    <div>
      <h4 className="mt-5 mb-5 text-center" style={headStyle}>
        Member Requests
      </h4>
      <div className="mr-4">
        <MemberRequestsTable />
      </div>
    </div>
  );
}

export default MemberRequests;
