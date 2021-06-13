import React, { Component } from "react";
import logo from "../images/slaasLogo.png";

class Header extends Component {
  style = {
    height: "100px",
    backgroundColor: "#800004",
    textAlign: "center",
    marginBottom: "20px",
    color: "white",
    fontSize: "30px",
    fontFamily: "Times New Roman",
  };
  imageStyle = {
    height: "100px",
    width: "auto",
    backgroundColor: "#DCDCDC",
    marginBottom: "0",
    paddingTop: "0",
    float: "left",
    marginLeft: "10%",
    marginRight: "-15%",
    marginTop: "0",
  };
  render() {
    return (
      <>
        <div style={this.style} className="sticky-top">
          <img src={logo} style={this.imageStyle} />
          <div style={{ paddingTop: "20px" }}>SLAAS Member Manager</div>
        </div>
      </>
    );
  }
}

export default Header;
