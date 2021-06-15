import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { addUser } from "../../services/registerUser";

function NewRegisterUser() {
  const [userData, setuserData] = useState({
    userName: "",
    officeID: "",
    email: "",
    nic: "",
    mobile: "",
    fixed: "",
    address: "",

    password: "",
    firstpassword: "",
    repeatpassword: "",
    passError: "",
    type: "applicant",
  });
  const [allowSubmit, setallowSubmit] = useState(true);
  const history = useHistory();

  const onchange = (e) => {
    if (e.target.name == "password") {
      setuserData({
        ...userData,
        ["firstpassword"]: e.target.value,
      });
      return;
    }

    if (e.target.name == "repeatpassword") {
      if (e.target.value == userData.firstpassword) {
        setuserData({
          ...userData,
          ["repeatpassword"]: e.target.value,
          ["password"]: e.target.value,
          ["passError"]: "",
        });
        setallowSubmit(true);
        return;
      } else {
        setuserData({
          ...userData,
          ["repeatpassword"]: e.target.value,
          ["passError"]: "Password is different to above",
        });
        setallowSubmit(false);
        return;
      }
    }

    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    // console.log(userData)
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(userData);
    // setLoading(true);
    await addUser(userData);
    // if (type) {
    //   localStorage.setItem("user", type);
    //   history.replace("/applicant/login");
    // }

    // // addProduct(userData)
    // console.log(userData);
    // setLoading(false);
  };

  let linkStyle = {
    textDecoration: "none",
    color: "black",
    marginTop: "10px",
  };

  return (
    <div>
      <div>
        {/* <center>
          <Link to="/user/login">
            <button type="button" className="btn btn-light">
              Already Registered? Login
            </button>
          </Link>
        </center> */}
        <h4 className="mt-5 mb-5">Register System User</h4>
        <form className="container mt-5" autoComplete="off">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="form-group col-12">
                  <label htmlFor="userName" className="col-5">
                    User Name
                  </label>
                  <input
                    onChange={onchange}
                    value={userData.userName}
                    className="form-control col-11 ml-3"
                    type="text"
                    id="userName"
                    name="userName"
                    required
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="officeID" className="col-5">
                    Office ID
                  </label>
                  <input
                    onChange={onchange}
                    value={userData.officeID}
                    className="form-control col-11 ml-3"
                    type="text"
                    id="officeID"
                    name="officeID"
                    required
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="email" className="col-5">
                    Email
                  </label>
                  <input
                    onChange={onchange}
                    value={userData.email}
                    className="form-control col-11 ml-3"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="nic" className="col-5">
                    NIC
                  </label>
                  <input
                    onChange={onchange}
                    value={userData.nic}
                    className="form-control col-11 ml-3"
                    type="text"
                    id="nic"
                    name="nic"
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="mobile" className="col-5">
                    Contact No (Mobile)
                  </label>
                  <input
                    onChange={onchange}
                    value={userData.mobile}
                    className="form-control col-11 ml-3"
                    type="number"
                    size="10"
                    id="mobile"
                    name="mobile"
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="fixed" className="col-5">
                    Contact No (Fixed)
                  </label>
                  <input
                    onChange={onchange}
                    value={userData.fixed}
                    className="form-control col-11 ml-3"
                    type="number"
                    size="10"
                    id="fixed"
                    name="fixed"
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="address" className="col-5">
                    Address
                  </label>
                  <input
                    onChange={onchange}
                    value={userData.address}
                    className="form-control col-11 ml-3"
                    type="text"
                    id="address"
                    name="address"
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="password" className="col-5">
                    Password
                  </label>
                  <input
                    onChange={onchange}
                    value={userData.firstpassword}
                    maxlength="10"
                    minLength="6"
                    className="form-control col-11 ml-3"
                    type="password"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="repeatpassword" className="col-5">
                    Repeat Password
                  </label>
                  <input
                    onChange={onchange}
                    value={userData.repeatpassword}
                    className="form-control col-11 ml-3"
                    maxlength="10"
                    minLength="6"
                    type="password"
                    id="repeatpassword"
                    name="repeatpassword"
                  />
                  <p className="col-11 ml-3 " style={{ color: "red" }}>
                    {userData.passError}
                  </p>
                </div>
                <div className="form-group col-12 mt-3">
                  <center>
                    <button
                      onClick={submit}
                      type="submit"
                      className="btn btn-success"
                      disabled={!allowSubmit}
                    >
                      Register
                    </button>
                    {/* <Link to="/applicant/login" style={linkStyle}>
                      <p className="mt-3">Already Registered? Login</p>
                    </Link> */}
                  </center>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewRegisterUser;
