import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { addApplicant } from "../../services/registerApplicant";

function RegisterApplicant() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      password: "",
      repeatpassword: "",
      type: "applicant",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 10 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid Email").required("Required!"),
      contact: Yup.string()
        .length(10, "Should be 10 Numbers")
        .required("Required!"),
      password: Yup.string()
        .min(5, "Minimum 5 Characters")
        .required("Required!"),
      repeatpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's Not Match")
        .required("Required!"),
    }),
    onSubmit: async (values) => {
      console.log("System User Register", values);
      const type = await addApplicant({
        name: values.name,
        email: values.email,
        contact: values.contact,
        password: values.password,
      });
      if (type) {
        localStorage.setItem("user", type);
        history.replace("/applicant/login");
      }
    },
  });

  // const [userData, setuserData] = useState({
  //   name: "",
  //   email: "",
  //   contact: "",
  //   password: "",
  //   repeatpassword: "",
  //   passError: "",
  //   type: "applicant",
  // });
  // const [allowSubmit, setallowSubmit] = useState(true);

  // const onchange = (e) => {
  //   if (e.target.name == "password") {
  //     setuserData({
  //       ...userData,
  //       ["firstpassword"]: e.target.value,
  //     });
  //     return;
  //   }

  //   if (e.target.name == "repeatpassword") {
  //     if (e.target.value == userData.firstpassword) {
  //       setuserData({
  //         ...userData,
  //         ["repeatpassword"]: e.target.value,
  //         ["password"]: e.target.value,
  //         ["passError"]: "",
  //       });
  //       setallowSubmit(true);
  //       return;
  //     } else {
  //       setuserData({
  //         ...userData,
  //         ["repeatpassword"]: e.target.value,
  //         ["passError"]: "Password is different to above",
  //       });
  //       setallowSubmit(false);
  //       return;
  //     }
  //   }

  //   setuserData({
  //     ...userData,
  //     [e.target.name]: e.target.value,
  //   });
  //   // console.log(userData)
  // };

  // const submit = async (e) => {
  //   e.preventDefault();
  //   console.log(userData);
  //   // setLoading(true);
  //   const type = await addApplicant({
  //     name: userData.name,
  //     email: userData.email,
  //     contact: userData.contact,
  //     password: userData.password,
  //   });
  //   if (type) {
  //     localStorage.setItem("user", type);
  //     history.replace("/applicant/login");
  //   }

  //   // addProduct(userData)
  //   console.log(userData);
  //   // setLoading(false);
  // };

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
        <h4 className="mt-5 mb-5">Register Applicant</h4>
        <form
          onSubmit={formik.handleSubmit}
          className="container mt-5"
          autoComplete="off"
        >
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="form-group col-12">
                  <label htmlFor="name" className="col-5">
                    Applicant Name
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="form-control col-11 ml-3"
                    type="text"
                    id="name"
                    name="name"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className="ml-5 mt-2 text-danger">
                      {formik.errors.name}
                    </p>
                  )}
                </div>
                <div className="form-group col-12">
                  <label htmlFor="email" className="col-5">
                    Email
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="form-control col-11 ml-3"
                    type="email"
                    id="email"
                    name="email"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="ml-5 mt-2 text-danger">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <div className="form-group col-12">
                  <label htmlFor="contact" className="col-5">
                    Contact No
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                    className="form-control col-11 ml-3"
                    type="string"
                    id="contact"
                    name="contact"
                  />
                  {formik.errors.contact && formik.touched.contact && (
                    <p className="ml-5 mt-2 text-danger">
                      {formik.errors.contact}
                    </p>
                  )}
                </div>
                {/* <div className="form-group col-12">
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
                </div> */}
                <div className="form-group col-12">
                  <label htmlFor="password" className="col-5">
                    Password
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    maxlength="10"
                    minLength="6"
                    className="form-control col-11 ml-3"
                    type="password"
                    id="password"
                    name="password"
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p className="ml-5 mt-2 text-danger">
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                <div className="form-group col-12">
                  <label htmlFor="repeatpassword" className="col-5">
                    Repeat Password
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.repeatpassword}
                    className="form-control col-11 ml-3"
                    maxlength="10"
                    minLength="6"
                    type="password"
                    id="repeatpassword"
                    name="repeatpassword"
                  />
                  {formik.errors.repeatpassword &&
                    formik.touched.repeatpassword && (
                      <p className="ml-5 mt-2 text-danger">
                        {formik.errors.repeatpassword}
                      </p>
                    )}
                </div>
                <div className="form-group col-12 mt-3">
                  <center>
                    <button
                      // onClick={submit}
                      type="submit"
                      className="btn btn-success"
                    >
                      Register
                    </button>
                    <Link to="/applicant/login" style={linkStyle}>
                      <p className="mt-3">Already Registered? Login</p>
                    </Link>
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

export default RegisterApplicant;
