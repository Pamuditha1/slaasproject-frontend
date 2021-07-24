import React, { useState, useEffect } from "react";
import SendMailButtons from "./SendMailButtons";
import SelectedToEmailBadges from "./SelectedToEmailBadges";
import validation from "./validationObjects/emailFormValidationSchema";
import { sendMails } from "../services/sendEmailsService";
import Loader from "react-loader-spinner";

function SendMails(props) {
  const sections = [
    "Section A",
    "Section B ",
    "Section C",
    "Section D",
    "Section E1",
    "Section E2",
    "Section E3",
    "Section F",
  ];
  const membershipGrades = [
    "Life Member",
    "Annual Member",
    "Associate Member",
    "Corporate Member",
    "Student Member",
  ];
  const [selectedTo, setselectedTo] = useState(
    props.emailList ? props.emailList : []
  );
  const [extraTo, setextraTo] = useState("");
  const [emailerror, setemailerror] = useState("");
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const [loading, setloading] = useState(false);

  // console.log(regex.test(str));

  const [emailForm, setemailForm] = useState({
    from: "",
    subject: "",
    body: ``,
  });

  const setselected = (s) => {
    setselectedTo([...selectedTo, s]);
  };
  const removeselected = (s) => {
    let current = selectedTo;
    let removed = current.filter((c) => {
      if (c !== s) return true;
    });
    setselectedTo(removed);
  };

  const onChange = (e) => {
    setemailForm({
      ...emailForm,
      [e.target.name]: e.target.value,
    });
    console.log(emailForm);
  };
  const onChangeTo = (e) => {
    setextraTo(e.target.value);
  };
  const ontoAdd = (e) => {
    if (emailRegex.test(extraTo)) {
      setselectedTo([...selectedTo, extraTo]);
      setextraTo("");
      setemailerror("");
    } else {
      setemailerror("Invalid Email Address");
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // setloading(true);
    let mailData = {
      to: selectedTo,
      from: emailForm.from,
      subject: emailForm.subject,
      body: emailForm.body,
    };
    await sendMails(mailData);
    // setloading(false);
  };

  const headStyle = {
    textShadow: "0px 0px 1px #111111",
  };
  const buttonStyle = {
    boxShadow: "0px 5px 5px grey",
    fontWeight: "bold",
    borderRadius: "60px",
    backgroundColor: "grey",
  };
  const buttonStyleC = {
    boxShadow: "0px 5px 10px grey",
    fontWeight: "bold",
    backgroundColor: "#005336",
    borderRadius: "30px",
  };

  return (
    <div>
      {loading ? (
        <>
          <Loader
            style={{ marginLeft: "35%" }}
            type="ThreeDots"
            color="#8f2032"
            height={300}
            width={300}
          />
          <h3 style={{ textAlign: "center" }}>Sending Emails ...</h3>
        </>
      ) : (
        <form className="container" autoComplete="off">
          <h4 className="mt-5 mb-5 text-center" style={headStyle}>
            Send Emails
          </h4>

          <div className="row">
            <div className="row ml-3 mb-3">
              <div className="col-3">
                <SendMailButtons
                  array={sections}
                  setselected={setselected}
                  title="Sections"
                />
              </div>
              <div className="col-3 ml-5">
                <SendMailButtons
                  array={membershipGrades}
                  setselected={setselected}
                  title="Membership Grades"
                />
              </div>
            </div>

            <div className="form-group col-12 mt-5">
              <div>
                <label htmlFor="to" className="col-12">
                  To :{" "}
                  <span className="ml-3">
                    {selectedTo && selectedTo.length} emails/collections
                    selected.
                  </span>
                </label>
                <div className="col-11 mb-1">
                  <SelectedToEmailBadges
                    selectedTo={selectedTo}
                    removeselected={removeselected}
                  />
                </div>
                <p className="text-danger ml-3">{emailerror}</p>
              </div>
              <div className="row ml-3">
                <input
                  value={extraTo}
                  onChange={onChangeTo}
                  minLength="1"
                  className="form-control col-10"
                  type="text"
                  id="to"
                  name="to"
                />
                <button
                  style={buttonStyle}
                  type="button"
                  className="btn btn-success ml-2"
                  onClick={ontoAdd}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
            <div className="form-group col-12">
              <label htmlFor="from" className="col-5">
                From :{" "}
              </label>
              <input
                value={emailForm.from}
                onChange={onChange}
                className="form-control col-11 ml-3"
                type="text"
                id="from"
                name="from"
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="subject" className="col-5">
                Subject :{" "}
              </label>
              <input
                value={emailForm.subject}
                onChange={onChange}
                className="form-control col-11 ml-3"
                type="text"
                id="subject"
                name="subject"
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="body" className="col-5">
                Body :{" "}
              </label>
              <textarea
                value={emailForm.body}
                onChange={onChange}
                className="form-control col-11 ml-3"
                type="textarea"
                rows="15"
                id="body"
                name="body"
              />
            </div>
            {/* <button type="submit" className="btn btn-primary float-right m-1">Submit</button> */}
            {/* <div className="form-group col-6">
                                <label htmlFor="material" className="col-5">Attachment: </label> 
                                <input className="form-control col-11 ml-3" type="text" id="material" name="material"/>
                            </div> */}

            {/* <div className="form-group col-6">
                                <label htmlFor="size" className="col-5">Size</label> 
                                <select onChange={onchangeSelect} value={productData.size} id="size" name="size" className="form-control col-11 ml-3" required>
                                    {
                                        sizes.map(option => {
                                            return(
                                                <option key={option} value={option} style={{textAlign: "center"}}>
                                                    {option}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>                     */}
          </div>

          {/* {savedSize && <p className="">* Product Size {savedSize} Saved</p> }
                    <button onClick={submit} type="submit" className="btn btn-primary float-right m-1 col-12">
                        {productSaved ?  `Product Saved`: 'Save Product'}</button>
                    <div>
                        {(!imageSaved && productSaved ) &&
                        <>
                            <h6 style={{backgroundColor: 'red'}} className="p-2 rounded"> Image hasn't been saved yet</h6>
                            <button onClick={submitImage} className="btn btn-success float-right m-1 col-12" type="submit">
                                Save Image
                            </button>
                        </>
                        }
                    </div> */}

          <button
            style={buttonStyleC}
            type="submit"
            onClick={onSubmit}
            className="btn btn-primary float-right mb-5 mt-3 pl-5 pr-5"
          >
            Send
          </button>
          {/* <button type="submit" onClick={() => setStep(1)} className="btn btn-primary float-right m-1">Back</button> */}
        </form>
      )}
    </div>
  );
}

export default SendMails;
