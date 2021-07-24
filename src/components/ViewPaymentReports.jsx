import React from "react";

function ViewPaymentReports() {
  function createPDF() {
    // get elements of report data
    var report1 = document.getElementById("report1").innerHTML;

    var style = "<style>";
    style =
      style +
      "table {width: 100%;font: 17px Calibri;} body{font-size:12px; margin: 'auto'}";
    style =
      style +
      "table, th, td {border: solid 1px #DDD;color: black ;border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open("", "", "height=700,width=700");

    win.document.write("<title>Membership Payments Report</title>"); // <title> FOR PDF HEADER.
    win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write("</head>");
    win.document.write(report1);
    // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write("</body></html>");

    win.document.close(); // CLOSE THE CURRENT WINDOW.

    win.print(); // PRINT THE CONTENTS.
  }

  const headStyle = {
    textShadow: "0px 0px 1px #111111",
  };

  const buttonStyleC = {
    boxShadow: "0px 5px 10px grey",
    fontWeight: "bold",
    backgroundColor: "#005336",
    borderRadius: "30px",
  };

  return (
    <div className="container-fulid mt-5">
      <h4 className="mt-5 mb-5 text-center" style={headStyle}>
        Payments Reports
      </h4>
      <div className="row float-right mr-5">
        <button
          className="btn btn-success pr-4 pl-4 mb-2"
          style={buttonStyleC}
          onClick={createPDF}
        >
          Download
        </button>
      </div>
      <div id="report1">
        <iframe
          width="100%"
          height="650px"
          src="https://app.powerbi.com/reportEmbed?reportId=adc0243b-3e0a-4553-8533-90afd4bf1ae8&autoAuth=true&ctid=84c31ca0-ac3b-4eae-ad11-519d80233e6f&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default ViewPaymentReports;
