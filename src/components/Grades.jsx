import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getGrades } from "../services/getGrades";
import { addGrade } from "../services/addGrade";
import UpdateGradeModal from "./modals/UpdateGradeModal";

import { updateGradeS } from "../services/updateGrade";

function Grades() {
  const [grade, setgrade] = useState("");
  const [membershipFee, setmembershipFee] = useState("");
  const [grades, setgrades] = useState([]);

  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalGrade, setmodalGrade] = useState({});
  const [updatingItem, setupdatingItem] = useState("");

  useEffect(() => {
    // setIsLoading(true)
    async function fetchGrades() {
      const records = await getGrades();
      setgrades(records);
    }
    fetchGrades();
    // setIsLoading(false)
  }, []);

  const addChange = (e) => {
    if (e.target.name == "grade") setgrade(e.target.value);
    else setmembershipFee(e.target.value);
  };
  const onAdd = async () => {
    console.log(grade);
    await addGrade({
      grade: grade,
      membershipFee: membershipFee,
    });
    setgrades([
      ...grades,
      {
        grade: grade,
        membershipFee: membershipFee,
      },
    ]);
    setgrade("");
    setmembershipFee("");
    // let cGrades = grades
    // cGrades.push(grade)
    // setgrades(cGrades)
  };

  const viewModal = (g) => {
    setmodalGrade(g);
    setisModalOpen(true);
    setupdatingItem(g.grade);
  };
  const setGradeUpdate = (g) => {
    setmodalGrade({ ...modalGrade, membershipFee: g });
  };
  const updateGrade = async () => {
    console.log("Updated Grade", modalGrade);
    await updateGradeS(modalGrade);
    const records = await getGrades();
    setgrades(records);
    setupdatingItem("");
    setisModalOpen(false);
  };

  const onCancel = () => {
    setupdatingItem("");
    setisModalOpen(false);
  };
  // const openUpdate = () => {
  //     setupdate(true)
  //     setupdatedGrades(grades)
  //     // let edi = updatedGrades
  //     // edi.forEach((g) => {
  //     //     g.membershipFee = ''
  //     // })
  //     // setupdatedGrades(edi)

  // }

  // const updateChange = (value, grade) => {
  //     setsaveButton(true)
  //     // settemValue(value)
  //     // setupdatedGrades(...updatedGrades, {
  //     //     [grade] : value
  //     // })
  //     let upG = updatedGrades
  //     upG.forEach(g => {
  //         if(g.grade == grade) g.membershipFee = value
  //     });

  //     // setneedToSave([...needToSave, {grade: grade, membershipFee: value}])
  //     console.log(updatedGrades)
  // }

  // const saveUpdates = () => {
  //     setneedToSave([...needToSave, {grade: grade, membershipFee: value}])
  // }

  const headStyle = {
    textShadow: "0px 0px 1px #111111",
  };

  const buttonStyle = {
    boxShadow: "0px 5px 10px grey",
    fontWeight: "bold",
    borderRadius: "40px",
  };

  const savebuttonStyle = {
    boxShadow: "0px 5px 10px grey",
    fontWeight: "bold",
    borderRadius: "40px",
    backgroundColor: "#002263",
    color: "white",
  };
  //   const buttonStyleCancel = {
  //     boxShadow: "0px 5px 10px grey",
  //     fontWeight: "bold",
  //     borderRadius: "40px",
  //   };

  return (
    <>
      <div className="row mt-3">
        <Link to="/user/settings">
          <button
            style={buttonStyle}
            className="btn btn-outline-dark pl-4 pr-4"
          >
            Back
          </button>
        </Link>
      </div>
      <h4 className="mb-5 text-center" style={headStyle}>
        Membership Grades
      </h4>
      <div className="mt-5">
        <div className="row ml-3">
          <div className="mr-3">Add New Grade</div>
          <input
            onChange={addChange}
            value={grade}
            name="grade"
            className="form-control col-4"
            type="text"
          />
          <div className="mr-3 ml-3">Membership Fee</div>
          <input
            onChange={addChange}
            value={membershipFee}
            name="key"
            className="form-control col-3"
            type="text"
          />
          <div className="input-group-append col-2 mb-3">
            <button
              style={buttonStyle}
              onClick={onAdd}
              className="btn btn-success"
            >
              +
            </button>
          </div>
        </div>
        <center className="mt-5 mr-5">
          <ul>
            {grades.length > 0 &&
              grades.map((g) => {
                return (
                  <div className="row" key={g.grade}>
                    <div className="col-1"></div>
                    <h4 className={isModalOpen ? "col-5" : "col-7"}>
                      {g.grade} - Rs. {g.membershipFee}{" "}
                    </h4>
                    {updatingItem == g.grade && (
                      <>
                        {/* <div className="row"> */}
                        <div className="col-3">
                          {/* Membership Fee */}
                          <span className="font-weight-bold">{g.grade}</span>

                          <input
                            onChange={(e) => setGradeUpdate(e.target.value)}
                            name="key"
                            value={modalGrade.membershipFee}
                            className="form-control"
                            type="text"
                          />
                        </div>
                        <div className="col-1 mt-4">
                          <button
                            style={buttonStyle}
                            onClick={() => updateGrade()}
                            className="btn btn-outline-primary pl-3 pr-3"
                          >
                            Save
                          </button>
                        </div>
                        {/* </div> */}
                        {/* <div className="col-2"> */}
                        {/* <button
                            onClick={() => updateGrade()}
                            className="btn btn-outline-primary mt-5"
                          >
                            Save
                          </button> */}
                        {/* </div> */}
                      </>
                    )}
                    {updatingItem == g.grade && (
                      <button
                        style={buttonStyle}
                        onClick={onCancel}
                        className="col-1 btn btn-secondary mb-5"
                      >
                        Cancel
                      </button>
                    )}
                    {updatingItem != g.grade && (
                      <button
                        style={buttonStyle}
                        onClick={() => viewModal(g)}
                        className="col-1 btn btn-warning mb-5"
                      >
                        Update
                      </button>
                    )}
                    {/* <div className="col-3"></div> */}
                    {/* {updatingItem == g.grade && (
                      <center>
                        <div className="row">
                          <div className="col-3"></div>
                          <div className="col-3">
                            Grade
                            <input
                              name="grade"
                              value={modalGrade.grade}
                              className="form-control"
                              type="text"
                              readOnly={true}
                            />
                          </div>
                          <div className="col-3">
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
                          <div className="col-3"></div>
                        </div>
                      </center>
                    )} */}
                  </div>
                );
              })}
          </ul>
          {/* <button onClick={openUpdate} className="btn btn-warning mb-5">Update Membership Grades</button> */}
        </center>
        {/* {isModalOpen && (
          <UpdateGradeModal
            isModalOpen={isModalOpen}
            setisModalOpen={setisModalOpen}
            modalGrade={modalGrade}
            setmodalGrade={setmodalGrade}
            setGradeUpdate={setGradeUpdate}
            updateGrade={updateGrade}
          />
        )} */}

        {/* {update &&
                <div>
                    <center>
                {updatedGrades.length>0 && updatedGrades.map(g => {
                    return <div className="row ml-5">
                        <div className="mr-3"> Grade</div>
                        <input  name="grade" value={g.grade} className="form-control col-4" type="text" readonly="true"/>
                        <div className="mr-3 ml-3">Membership Fee</div> 
                        <input onChange={(e) => updateChange(e.target.value, g.grade)}  name="key" value={g.membershipFee} className="form-control col-3" type="text" />
                        {saveButton &&
                            <div className="input-group-append col-2 mb-3">
                                <button  className="btn btn-outline-primary">Save</button>
                            </div>
                        }
                    </div>
                    // <h4 key={g.grade}>{g.grade} - Rs. {g.membershipFee}</h4>
                })}</center>
                <center>
                     <button onClick={saveUpdates} className="btn btn-outline-primary mt-3">Save Changes</button> 
                    <button onClick={() => setupdate(false)} className="btn btn-outline-danger mt-3">Close</button>
                </center>
                
                </div>
            } */}
      </div>
    </>
  );
}

export default Grades;
