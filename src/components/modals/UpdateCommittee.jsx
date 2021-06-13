import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { DatePicker } from "react-rainbow-components";
import { getMemberToSet } from "../../services/getMemberToSetCommity";

const UpdateCommittee = ({ isModalOpen, setisModalOpen, positionData }) => {
  const [commMembers, setcommMembers] = useState([]);
  const [newMember, setnewMember] = useState({
    position: positionData.position,
    from: positionData.from,
    to: positionData.to,
    membershipNo: positionData.membershipNo,
    name: positionData.name,
  });
  const [memData, setmemData] = useState({});

  useEffect(() => {
    setnewMember({
      position: positionData.position,
      from: positionData.from,
      to: positionData.to,
      membershipNo: positionData.membershipNo,
      name: positionData.name,
    });
  }, []);

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

  const onAdd = (name, date) => {
    console.log(newMember);
  };

  const toggle = () => setisModalOpen(!isModalOpen);

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>Open</Button> */}
      <Modal isOpen={isModalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ color: "black" }}>
          Update Committee Position
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-6">
              Position
              <input
                readOnly={true}
                value={newMember.position}
                name="position"
                className="form-control"
                type="text"
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
                <button
                  onClick={onAdd}
                  className="btn btn-outline-success col-2 mt-3"
                >
                  Save
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="mr-3"> Grade</div> */}
          {/* Membership Fee<input  name="grade" value={modalGrade.grade} className="form-control col-4" type="text" readonly="true"/> */}
          {/* <div className="mr-3 ml-3">Membership Fee</div>  */}
          {/* <input name="key" value={modalGrade.membershipFee} className="form-control col-3" type="text" /> */}
          {/* {saveButton &&
                            <div className="input-group-append col-2 mb-3">
                                <button  className="btn btn-outline-primary">Save</button>
                            </div>
                        }                         */}
          {/* </div> */}
        </ModalBody>
        {/* <ModalFooter>                   

                    <Button color="danger" onClick={toggle}>Close</Button> 
                </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default UpdateCommittee;
