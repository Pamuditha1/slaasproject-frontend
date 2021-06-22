import React, { useState, useEffect } from "react";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";

import { getMailSettings } from "../services/getMailSettingsData";

function EmailSettings() {
  const [emailData, setemailData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result = await getMailSettings();
      setemailData(result);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="row">
        <Link to="/user/settings">
          <button className="btn btn-outline-dark">Back</button>
        </Link>
      </div>
      <div className="container">
        <Table hover borderless className="mt-5">
          <thead className="text-center">
            <tr>
              <th>No</th>
              <th>Type</th>
              <th>Subject</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {emailData.map((e, index) => {
              // setsubTotal(subTotal + p.user.total)

              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{e.type}</td>
                  <td className="text-center">{e.subject}</td>
                  <td className="text-center">
                    <Link to={`/user/email-settings/edit/${e.id}`}>
                      <button className="btn btn-outline-warning">Edit</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default EmailSettings;
