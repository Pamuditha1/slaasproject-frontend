import React from "react";
// import { Link} from 'react-router-dom'
import { HashLink } from "react-router-hash-link";

function PaymentRecordsForReceipt({ paymentRecords, membershipNo }) {
  const backgroundStyle = {
    height: "auto",
    width: "80%",
    margin: "10px 5% 10px 5%",
    padding: "30px",
    backgroundColor: "#fdd30f",
    borderRadius: "30px",
    boxShadow: "0px 5px 10px grey",
  };

  const bstyle = {
    borderRadius: "30px",
    boxShadow: "0px 5px 10px grey",
    color: "black",
  };

  return (
    <div style={backgroundStyle} className="col-12">
      {paymentRecords.arrearsConti ? (
        <p className="col-12" style={{ color: "red" }}>
          Arrears to pay - <strong>Rs. {paymentRecords.arrearsConti}</strong>
        </p>
      ) : (
        <p className="col-12">
          <strong>No Record</strong>
        </p>
      )}
      {paymentRecords.lastPaidForYear ? (
        <p className="col-12">
          Last payment for membership year -{" "}
          <strong>{paymentRecords.lastPaidForYear}</strong>
        </p>
      ) : (
        <p className="col-12">
          <strong>No Record</strong>
        </p>
      )}
      {paymentRecords.lastMembershipPaid ? (
        <p className="col-12">
          Last membership payment date -{" "}
          <strong>
            {new Date(paymentRecords.lastMembershipPaid).toLocaleDateString()}
          </strong>
        </p>
      ) : (
        <p className="col-12">
          <strong>No Record</strong>
        </p>
      )}
      {paymentRecords.memPaidLast ? (
        <p className="col-12">
          Last payment date - <strong>{paymentRecords.memPaidLast}</strong>
        </p>
      ) : (
        <p className="col-12">
          <strong>No Record</strong>
        </p>
      )}
      <center>
        <HashLink to={`/user/member/profile/${membershipNo}#paymentRecords`}>
          <button className="btn btn-light" style={bstyle}>
            View Payment Records
          </button>
        </HashLink>
      </center>
    </div>
  );
}

export default PaymentRecordsForReceipt;
