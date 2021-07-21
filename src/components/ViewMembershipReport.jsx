import React from "react";

function ViewMembershipReport() {
  const headStyle = {
    textShadow: "0px 0px 1px #111111",
  };
  return (
    <div className="container-fulid mt-5">
      <h4 className="mt-5 mb-5 text-center" style={headStyle}>
        Membership Reports
      </h4>
      <iframe
        width="100%"
        height="800px"
        src="https://app.powerbi.com/reportEmbed?reportId=b752e62d-9ae3-4b01-9da6-d807cc88b405&autoAuth=true&ctid=84c31ca0-ac3b-4eae-ad11-519d80233e6f&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default ViewMembershipReport;
