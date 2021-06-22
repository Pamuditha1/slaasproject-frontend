import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { addMember } from "../../services/addMemberAccount";

function RegisterMember() {
  const [userData, setuserData] = useState({
    membershipNo: "",
    password: "",
    firstpassword: "",
    repeatpassword: "",
    passError: "",
    type: "Member",
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
    console.log("User", userData);
    // setLoading(true);
    const type = await addMember({
      membershipNo: userData.membershipNo,
      password: userData.password,
    });
    if (type) {
      localStorage.setItem("user", type);
      history.replace("/member/login");
    }
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
        <h4 className="mt-5 mb-5 text-center">Register Member</h4>
        <form className="container mt-5" autoComplete="off">
          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="membershipNo" className="col-5">
                Membership No
              </label>
              <input
                onChange={onchange}
                value={userData.membershipNo}
                className="form-control col-11 ml-3"
                type="text"
                id="membershipNo"
                name="membershipNo"
                required
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
                <Link to="/member/login" style={linkStyle}>
                  <p className="mt-3">Already Registered? Login</p>
                </Link>
              </center>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterMember;
