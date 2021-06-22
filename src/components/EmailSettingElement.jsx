import React, { useState, useEffect } from "react";
import { getOneMailSettings } from "../services/getOneEmailSettingData";
import { updateMailBody } from "../services/updateEmailBody";
import { Link } from "react-router-dom";

function EmailSettingElement(props) {
  const [mailData, setmailData] = useState({
    id: "",
    type: "",
    subject: "",
    body: ``,
  });

  async function fetchData() {
    let result = await getOneMailSettings(props.match.params.id);
    setmailData({
      id: result.id,
      type: result.type,
      subject: result.subject,
      body: result.body,
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const editData = (e) => {
    setmailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const update = async () => {
    console.log(mailData);
    await updateMailBody(mailData);
    fetchData();
  };

  return (
    <>
      <div className="row">
        <Link to="/user/email-settings">
          <button className="btn btn-outline-dark">Back</button>
        </Link>
      </div>
      <div className="container">
        <h5>Edit Mail Content</h5>
        <div className="row mt-5">
          <input
            value={mailData.type}
            className="form-control col-3"
            readOnly={true}
          ></input>
          <input
            type="input"
            value={mailData.subject}
            name="subject"
            onChange={editData}
            className="form-control col-8 ml-3"
            rows="15"
          ></input>
        </div>
        <div className="row">
          <textarea
            type="input"
            value={mailData.body}
            name="body"
            onChange={editData}
            className="form-control col-11 m-5"
            rows="15"
          ></textarea>
        </div>
        <center>
          <button onClick={update} className="btn btn-success mt-5">
            Update Email
          </button>
        </center>
      </div>
    </>
  );
}

export default EmailSettingElement;
