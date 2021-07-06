import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UpdateGradeModal = ({
  isModalOpen,
  setisModalOpen,
  modalGrade,
  setmodalGrade,
  setGradeUpdate,
  updateGrade,
}) => {
  const [gr, setgr] = useState({});

  useEffect(() => {
    setgr(modalGrade);
    console.log("mo grade", modalGrade);
    console.log("Opened");
  }, [modalGrade, isModalOpen]);

  const toggle = () => setisModalOpen(!isModalOpen);
  const saveButton = {
    backgroundColor: "#002263",
    borderRadius: "20px",
    boxShadow: "0px 5px 5px grey",
    color: "white",
  };

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>Open</Button> */}
      <Modal isOpen={isModalOpen} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle} style={{ color: "black" }}>
          Update Membership Fee
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-4">
              Grade
              <input
                name="grade"
                value={modalGrade.grade}
                className="form-control"
                type="text"
                readOnly={true}
              />
            </div>
            <div className="col-4">
              Membership Fee
              <input
                onChange={(e) => setGradeUpdate(e.target.value)}
                name="key"
                value={modalGrade.membershipFee}
                className="form-control"
                type="text"
              />
            </div>
            <div className="col-2">
              <button
                onClick={() => updateGrade()}
                className="btn btn-outline-primary"
              >
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

export default UpdateGradeModal;
