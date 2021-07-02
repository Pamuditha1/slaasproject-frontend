import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import "../css/startPageStyle.css";

let welcome = {
  // marginTop: "6%",
  textShadow: "1px 1px 1px #57585a",
  color: "white",
};

let backCover = {
  position: "absolute",
  backgroundColor: "black",
  height: "100%",
  width: "100%",
  marginLeft: "20%",
};

class StartPage extends Component {
  render() {
    return (
      <div className="container-fulid homepage-bgimage">
        <h1 style={welcome}>Welcome !.</h1>
        {/* <div className="row" style={{ marginTop: "10%" }}> */}
        <div className="row" style={{ marginTop: "10%" }}>
          <div className="col-md col-sm-12">
            <Link to="/applicant">
              <Button className="btn selectionButton" id="appBtn">
                <div className="textStyle">Applicant</div>
              </Button>
            </Link>
          </div>
          <div className="col-md col-sm-12">
            <Link to="/user/login">
              <Button className="btn selectionButton" id="useBtn">
                <div className="textStyle">Administrator</div>
              </Button>
            </Link>
          </div>
          <div className="col-md col-sm-12">
            <Link to="/member/login">
              <Button className="btn selectionButton" id="memBtn">
                <div className="textStyle">Member</div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StartPage;
