import React, { useState, useEffect } from "react";
import { getCommMembersHistory } from "../services/getCommityHistory";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

function OneCommityHistory({ comm }) {
  const [dateRanges, setdateRanges] = useState([]);
  const [members, setmembers] = useState([]);

  useEffect(() => {
    // setIsLoading(true)
    async function fetchSections() {
      const records = await getCommMembersHistory(comm);
      //   console.log(records);
      setdateRanges(records.ranges);
      setmembers(records.members);

      console.log("Ranges", records.ranges);
      console.log("Members", records.members);
    }
    fetchSections();
    // setIsLoading(false)
  }, [comm]);

  const membersList = dateRanges.forEach((r) => {
    members.filter((m) => {
      if (m.fromD == r.fromD) {
      }
    });
  });

  return (
    <div>
      <div className="row">
        <div className="col-12 mt-5">
          <h5>Former {comm} Committees</h5>
        </div>
        {dateRanges &&
          dateRanges.map((r) => {
            let membersF = members.filter((m) => {
              if (m.fromD == r.fromD) return true;
            });
            return (
              <div className="container mt-5">
                <h6 className="row">
                  From {new Date(r.fromD).toLocaleDateString()} To{" "}
                  {new Date(r.toD).toLocaleDateString()}
                </h6>
                <Table borderless className="mt-3 text-center">
                  <thead>
                    <tr>
                      <th>Position</th>
                      {/* <th>From</th>
                      <th>To</th> */}
                      <th>Membership No</th>
                      <th>Member Name</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {membersF.length > 0 &&
                      membersF.map((m) => {
                        return (
                          <tr key={m.id}>
                            <td>{m.position}</td>
                            {/* <td>{new Date(m.fromD).toLocaleDateString()}</td>
                            <td>{new Date(m.toD).toLocaleDateString()}</td> */}
                            <td>{m.membershipNo}</td>
                            <td>{m.name}</td>
                            <td>
                              <Link
                                to={`/user/member/profile/${m.membershipNo}`}
                                target="_blank"
                              >
                                <button className="btn btn-outline-primary">
                                  Profile
                                </button>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OneCommityHistory;
