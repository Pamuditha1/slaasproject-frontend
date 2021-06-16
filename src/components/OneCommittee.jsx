import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { DatePicker } from "react-rainbow-components";
import { Link } from "react-router-dom";

import UpdateCommittee from "./modals/UpdateCommittee";

import { getCommMembers } from "../services/getCommMembers";
import { getMemberToSet } from "../services/getMemberToSetCommity";
import { addNewCommityPosition } from "../services/setNewCommityPositions";
import { updateCommityPosition } from "../services/updateCommMembers";

function OneCommittee({ comm }) {
  const [commMembers, setcommMembers] = useState([]);
  const [newMember, setnewMember] = useState({
    position: "",
    from: "",
    to: "",
    membershipNo: "",
    name: "",
  });
  const [memData, setmemData] = useState({});
  const [isUpdating, setisUpdating] = useState(false);

  useEffect(() => {
    // setIsLoading(true)
    async function fetchSections() {
      const records = await getCommMembers(comm);
      //   console.log(records);
      setcommMembers(records);
      console.log(records);
    }
    fetchSections();

    // setIsLoading(false)
  }, [comm]);

  const getName = async (e) => {
    if (e.key === "Enter") {
      const result = await getMemberToSet(e.target.value);
      setmemData(result);
      setnewMember({
        ...newMember,
        name: result.nameWinitials,
      });
    }
  };

  const addChange = (e) => {
    setnewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };
  const setDates = (name, date) => {
    setnewMember({
      ...newMember,
      [name]: date,
    });
  };

  const updateSet = (m) => {
    setnewMember({
      position: m.position,
      from: m.fromD,
      to: m.toD,
      membershipNo: m.membershipNo,
      name: m.name,
    });
    setisUpdating(true);
  };

  const onAdd = async () => {
    console.log("New MEem", newMember);

    await addNewCommityPosition({
      committe: comm,
      position: newMember.position,
      fromD: newMember.from,
      toD: newMember.to,
      memberID: memData.memberID,
      name: memData.nameWinitials,
      membershipNo: memData.membershipNo,
    });
    setcommMembers([...commMembers, newMember]);
    setnewMember({
      position: "",
      from: "",
      to: "",
      membershipNo: "",
      name: "",
    });
  };

  const onUpdate = async () => {
    console.log("New MEem", newMember);

    await updateCommityPosition({
      committe: comm,
      position: newMember.position,
      fromD: newMember.from,
      toD: newMember.to,
      memberID: memData.memberID,
      name: memData.nameWinitials,
      membershipNo: memData.membershipNo,
    });
    setcommMembers(await getCommMembers(comm));
    setnewMember({
      position: "",
      from: "",
      to: "",
      membershipNo: "",
      name: "",
    });
    setisUpdating(false);
  };

  // const viewModal = (m) => {
  //   console.log(m);
  //   setmodalPosition(m);
  //   setisModalOpen(true);
  //   setmodalPosition(m);
  //   console.log(modalPosition);
  // };

  return (
    <div>
      {/* <h4>{comm}</h4> */}
      <h4
        style={{ backgroundColor: "#e95045" }}
        className="pl-5 pt-1 pb-1 mb-5 mt-5"
      >
        {comm}
      </h4>

      {/* <div className="row"> */}
      <h6 className="pl-5 pt-1 pb-1 mb-3 mt-3">Assign New Position</h6>
      {/* </div> */}
      <div className="row">
        <div className="col-6">
          Position
          <input
            onChange={addChange}
            value={newMember.position}
            name="position"
            className="form-control"
            type="text"
            readOnly={isUpdating}
          />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              From
              <DatePicker
                id="from"
                formatStyle="medium"
                value={newMember.from}
                onChange={(value) => setDates("from", value.toISOString())}
              />
            </div>

            <div className="col-6">
              To
              <DatePicker
                id="to"
                formatStyle="medium"
                value={newMember.to}
                onChange={(value) => setDates("to", value.toISOString())}
              />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-5">
              Membership No
              <input
                onChange={addChange}
                onKeyDown={getName}
                value={newMember.membershipNo}
                name="membershipNo"
                className="form-control"
                type="text"
              />
            </div>

            <div className="col-5">
              Name
              <input
                onChange={addChange}
                value={newMember.name}
                name="name"
                className="form-control"
                type="text"
              />
            </div>
            {/* <div className="col-3"> */}
            {!isUpdating ? (
              <button onClick={onAdd} className="btn btn-success col-2 mt-3">
                Save
              </button>
            ) : (
              <button onClick={onUpdate} className="btn btn-warning col-2 mt-3">
                Update
              </button>
            )}

            {/* </div> */}
          </div>
        </div>
      </div>

      <h6 className="pl-5 pt-1 pb-1 mb-3 mt-5">Committee Members</h6>
      <Table borderless className="mt-5 text-center">
        <thead>
          <tr>
            <th>Position</th>
            <th>From</th>
            <th>To</th>
            <th>Membership No</th>
            <th>Member Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {commMembers.length > 0 &&
            commMembers.map((m) => {
              return (
                <tr key={m.id}>
                  <td>{m.position}</td>
                  <td>{new Date(m.fromD).toLocaleDateString()}</td>
                  <td>{new Date(m.toD).toLocaleDateString()}</td>
                  <td>{m.membershipNo}</td>
                  <td>{m.name}</td>
                  <td>
                    <button
                      // onClick={() => viewModal(m)}
                      onClick={() => updateSet(m)}
                      className="btn btn-outline-warning"
                    >
                      Update
                    </button>
                    <Link
                      to={`/user/member/profile/${m.membershipNo}`}
                      target="_blank"
                    >
                      <button className="btn btn-outline-primary ml-3">
                        Profile
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      {/* <UpdateCommittee
        positionData={modalPosition}
        isModalOpen={isModalOpen}
        setisModalOpen={setisModalOpen}
      /> */}
    </div>
  );
}

export default OneCommittee;
