import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ValidationError from "../../validationError";
import http from "../../services/httpService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { api } from "../../services/api";

function RegisterUserForm(props) {
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    nic: Yup.string(),
    officeID: Yup.string(),
    password: Yup.string().required("Required"),
    accountType: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    mobileNo: Yup.string().required("Required"),
  });

  const [userData, setUserData] = useState({
    userName: "",
    officeID: "",
    nic: "",
    email: "",
    password: "",
    passwordR: "",
    accountType: props.accountType,
    mobileNo: "",
  });
  const history = useHistory();
  const submitData = () => {
    const user = userData;
    console.log(user);

    if (user.password == user.passwordR) {
      switch (user.accountType) {
        case "applicant": {
          const apiEndPoint = `${api}/register-user`;
          http
            .post(apiEndPoint, {
              userName: user.userName,
              mobile: user.mobileNo,
              email: user.email,
              password: user.password,
              type: user.accountType,
            })
            .then(function (response) {
              console.log(response);
              toast.success(`${response.data}`);
              if (props.accountType == "applicant") {
                history.replace("/applicant/login");
                return;
              }
              history.replace("/user/dashboard");
            })
            .catch(function (error) {
              console.log(error.response.data);
              toast.error(error.response.data);
            });
        }
      }
    } else {
      toast.error("Repeat Passwords is Different to Password");
    }
  };

  return (
    <div className="container">
      {props.accountType === "user" ? (
        <h4 className="mt-5 mb-5">Register User</h4>
      ) : (
        <h4 className="mt-5 mb-5">Register Applicant</h4>
      )}

      <Formik
        className="container"
        initialValues={userData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setUserData(values);
          console.log(userData);
          submitData();
        }}
      >
        {(formik) => {
          const handleStyle = (n) => {
            if (formik.errors[n] && formik.touched[n])
              return "form-control is-invalid";
            else if (!formik.errors[n] && formik.touched[n])
              return "form-control is-valid";
            else return "form-control";
          };
          return (
            <Form>
              <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <Field
                  className={`${handleStyle("userName")}`}
                  type="text"
                  id="userName"
                  name="userName"
                />
                <ErrorMessage name="userName" component={ValidationError} />
              </div>
              {props.accountType === "user" && (
                <>
                  <div className="form-group">
                    <label htmlFor="nic">NIC</label>
                    <Field
                      className={`${handleStyle("nic")}`}
                      type="text"
                      id="nic"
                      name="nic"
                    />
                    <ErrorMessage name="nic" component={ValidationError} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="officeID">Office ID</label>
                    <Field
                      className={`${handleStyle("officeID")}`}
                      type="text"
                      id="officeID"
                      name="officeID"
                    />
                    <ErrorMessage name="officeID" component={ValidationError} />
                  </div>
                </>
              )}
              <div className="form-group">
                <label htmlFor="mobileNo">Mobile No</label>
                <Field
                  className={`${handleStyle("mobileNo")}`}
                  type="text"
                  id="mobileNo"
                  name="mobileNo"
                />
                <ErrorMessage name="mobileNo" component={ValidationError} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  className={`${handleStyle("email")}`}
                  type="text"
                  id="email"
                  name="email"
                />
                <ErrorMessage name="email" component={ValidationError} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  className={`${handleStyle("password")}`}
                  type="text"
                  id="password"
                  name="password"
                />
                <ErrorMessage name="password" component={ValidationError} />
              </div>
              <div className="form-group">
                <label htmlFor="passwordR">Repeat Password</label>
                <Field
                  className={`${handleStyle("passwordR")}`}
                  type="text"
                  id="passwordR"
                  name="passwordR"
                />
                <ErrorMessage name="passwordR" component={ValidationError} />
              </div>
              <button type="submit" className="btn btn-primary float-right m-1">
                Continue
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegisterUserForm;
