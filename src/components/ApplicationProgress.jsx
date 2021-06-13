import React from "react";
import { Progress } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
const { Circle } = Progress;
const style = {
  width: 120,
  display: "inline-block",
  marginRight: 70,
};

function ApplicationProgress() {
  let today = new Date().toLocaleDateString();
  return (
    <div className="container">
      <div className="row mt-5" style={{ textAlign: "center" }}>
        <div style={style}>
          <Circle percent={100} status="success" />
          Submitted {today}
        </div>
        <div style={style}>
          <Circle percent={100} status="fail" />
          Viewed
        </div>
        <div style={style}>
          <Circle percent={100} status="fail" />
          Being Checked
        </div>
        <div style={style}>
          <Circle percent={100} status="fail" />
          Action
        </div>
      </div>
    </div>
  );
}

export default ApplicationProgress;
