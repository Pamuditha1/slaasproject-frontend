import React, { useState, useEffect } from "react";
import { Progress, Loader } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import jwtDecode from "jwt-decode";
import { getApplicationProgress } from "../services/getApplicationProgress";

const { Circle } = Progress;

const style = {
  width: 120,
  display: "inline-block",
  marginRight: 250,
};

function ApplicationProgress(props) {
  const [submit, setsubmit] = useState("success");
  const [check, setcheck] = useState("active");
  const [action, setaction] = useState("");
  const [reason, setreason] = useState("");
  const [enroll, setenroll] = useState("");
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    let token = jwtDecode(jwt);
    console.log("Token", token);

    async function fetchData() {
      let result = await getApplicationProgress(token.id);

      if (result.status == "Rejected") {
        setcheck("success");
        setaction("fail");
        setreason(result.appReasons);
        setenroll(new Date(result.enrollDate).toLocaleDateString());
      } else if (result.status == "Member") {
        setcheck("success");
        setaction("success");
        setenroll(new Date(result.enrollDate).toLocaleDateString());
      }
      console.log("Pro", result);
    }
    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center">Membership Application Process</h3>

        <button onClick={logout} className="btn btn-outline-dark float-right">
          Logout
        </button>
      </div>
      <div className="row mt-5" style={{ textAlign: "center" }}>
        <div style={style}>
          <Circle percent={100} status={submit} />
          Submitted
        </div>
        <div style={style}>
          {check == "active" ? (
            <Circle percent={100} status={check} showInfo={false} />
          ) : (
            <Circle percent={100} status={check} />
          )}
          Being Checked
        </div>

        <div style={style}>
          {action == "active" ? (
            <Circle percent={100} status={action} showInfo={false} />
          ) : (
            action == "success" ||
            (action == "fail" ? (
              <Circle percent={100} status={action} />
            ) : (
              <Circle showInfo={false} />
            ))
          )}
          Action <strong className="mt-3">{enroll}</strong>
        </div>
      </div>
      {reason && (
        <div className="row mt-5 ml-5">
          <div className="col-4">
            <strong>Reasons for Reject Application : </strong>
          </div>
          <div className="col-7">{reason}</div>
        </div>
      )}
    </div>
  );
}

export default ApplicationProgress;
