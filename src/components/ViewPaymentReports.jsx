import React from "react";

function ViewPaymentReports() {
  const headStyle = {
    textShadow: "0px 0px 1px #111111",
  };
  return (
    <div className="container-fulid mt-5">
      <h4 className="mt-5 mb-5 text-center" style={headStyle}>
        Payments Reports
      </h4>
      <iframe
        width="100%"
        height="600px"
        src="https://app.powerbi.com/reportEmbed?reportId=adc0243b-3e0a-4553-8533-90afd4bf1ae8&autoAuth=true&ctid=84c31ca0-ac3b-4eae-ad11-519d80233e6f&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default ViewPaymentReports;
