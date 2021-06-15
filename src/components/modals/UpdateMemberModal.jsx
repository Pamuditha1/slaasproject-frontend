import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UpdateMemberModal = ({ isModalOpen, setisModalOpen, dataToUpdate }) => {
  const toggle = () => setisModalOpen(!isModalOpen);

  const updateData = () => {
    console.log("Update");
    console.log(dataToUpdate);
  };

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>Open</Button> */}
      <Modal isOpen={isModalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ color: "black" }}>
          Update Membership Fee
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-4">
              {/* {dataToUpdate.name} */}hello
              <input
                name="grade"
                value={dataToUpdate.value}
                className="form-control"
                type="text"
              />
            </div>
            {/* <div className="col-4">
              Membership Fee
              <input
                onChange={(e) => setGradeUpdate(e.target.value)}
                name="key"
                value={modalGrade.membershipFee}
                className="form-control"
                type="text"
              />
            </div> */}
            <div className="col-2">
              <button onClick={updateData} className="btn btn-outline-primary">
                Save
              </button>
            </div>
          </div>
        </ModalBody>
        {/* <ModalFooter>                   

                    <Button color="danger" onClick={toggle}>Close</Button> 
                </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default UpdateMemberModal;
