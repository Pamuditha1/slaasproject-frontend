import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import ViewImage from "./ViewImage";
import PaymentsHistory from "./PaymentsHistory";
import UpdateMemberModal from "./modals/UpdateMemberModal";
import MemberDataEditCom from "./MemberDataEditCom";

import { terminateMember } from "../services/terminateMemberService";
import { getMemberProfile } from "../services/getMemberProfile";
import { getMembershipBack } from "../services/getBackTermination";
import { updateMember } from "../services/updateMemberProfileData";

export const MemberProfileWUpdate = (props) => {
  const [memberData, setMemberData] = useState({});
  const [academicData, setAcademicData] = useState([]);
  const [proposer, setProposer] = useState({});
  const [seconder, setSeconder] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commityData, setcommityData] = useState([]);
  const [memberIDR, setmemberIDR] = useState("");

  const [enableEdit, setenableEdit] = useState(false);
  //   const [isModalOpen, setisModalOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState("");
  const [dataToUpdate, setdataToUpdate] = useState({});

  //   console.log(props.match.params.id);
  async function fetchProfile() {
    setIsLoading(true);
    const profileData = await getMemberProfile(props.match.params.id);
    console.log(typeof profileData);
    setMemberData(profileData.member);
    setmemberIDR(profileData.member.memberID);
    setAcademicData(profileData.academic);
    setProposer(profileData.proposer);
    setSeconder(profileData.seconder);
    setcommityData(profileData.committies);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchProfile();
  }, [props.match.params.id]);

  const setUpdate = (name, value) => {
    setdataToUpdate({
      name: name,
      value: value,
    });
    setisModalOpen(name);
  };
  const onUpdateChange = (e) => {
    setdataToUpdate({ ...dataToUpdate, value: e.target.value });
  };
  const saveUpdate = async () => {
    let data = {
      name: dataToUpdate.name,
      value: dataToUpdate.value,
      id: memberData.memberID,
    };
    console.log("Data to Update", data);
    await updateMember(data);
    fetchProfile();
    setdataToUpdate({});
    setisModalOpen(false);
    setenableEdit(false);
  };

  const {
    memberID,
    membershipNo,
    gradeOfMembership,
    section,
    status,
    dot,
    enrollDate,
    appliedDate,
    councilPosition,
    memberFolioNo,
    title,
    nameWinitials,
    fullName,
    memPaidLast,
    lastPaidForYear,
    arrearsConti,
    commonFirst,
    commomLast,
    gender,
    dob,
    nic,
    mobileNo,
    fixedNo,
    email,
    resAddrs,
    perAddrs,
    sendingAddrs,
    designation,
    department,
    placeOfWork,
    offMobile,
    offLand,
    offFax,
    offEmail,
    offAddrs,
    memberBefore,
    memberFrom,
    memberTo,
    profession,
    specialization1,
    specialization2,
    specialization3,
    specialization4,
    specialization5,
    password,
    proposerID,
    seconderID,
  } = memberData;
  // const enrolledDate = Date(`${enrollDate}`).toLocaleDateString()
  const displayMembershipNo = `${membershipNo}/${section}`;

  async function terminateOnClick(membershipNo) {
    console.log(membershipNo);
    await terminateMember(membershipNo);
    fetchProfile();

    return;
  }
  async function getBackOnClick(memberID) {
    console.log(memberID);
    await getMembershipBack(memberID);
    fetchProfile();
    return;
  }

  return isLoading ? (
    <Loader
      style={{ marginLeft: "35%" }}
      type="ThreeDots"
      color="#00BFFF"
      height={300}
      width={300}
    />
  ) : (
    <div>
      <div className="container row" id="main">
        <h3 className="col-12 text-center mb-5" style={{ color: "#e95045" }}>
          Member Profile
        </h3>
        <div className="col-12 mb-5">
          <div className="row">
            <div className="col-3">
              {/* <Link to={`/user/member/profile/update/${membershipNo}`}> */}
              <button
                className="btn btn-warning"
                onClick={() => setenableEdit(!enableEdit)}
              >
                Update Member
              </button>
              {/* </Link> */}
            </div>
            {status == "Member" ? (
              <div className="col-3" style={{ display: !enableEdit && "none" }}>
                <button
                  onClick={() => terminateOnClick(membershipNo)}
                  className="btn btn-danger"
                >
                  Terminate Member
                </button>
              </div>
            ) : (
              <div className="col-3" style={{ display: !enableEdit && "none" }}>
                <button
                  onClick={() => getBackOnClick(membershipNo)}
                  className="btn btn-success"
                >
                  Continue Membership
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="col-2 mr-5">
          <ViewImage nic={nic} />
        </div>
        <div className="col-5" id="personalData">
          <p className="row">
            Name with Initials :{" "}
            <strong className="row ml-5">
              {title} {nameWinitials}
            </strong>
          </p>
          <p className="row">
            NIC : <strong className="row ml-5">{nic}</strong>
          </p>
          <p className="row">
            Email : <strong className="row ml-5">{email}</strong>
          </p>
          <p className="row">
            Mobile No : <strong className="row ml-5">{mobileNo}</strong>
          </p>
          <p className="row">
            Preffered Address :{" "}
            <strong className="row ml-5">{sendingAddrs}</strong>
          </p>
        </div>
        <div className="col-4" id="membershipData">
          <p className="row">
            Membership No:{" "}
            <strong className="row ml-5">{displayMembershipNo}</strong>
          </p>
          <p className="row">
            Member Status:
            {status == "Terminated" ? (
              <div>
                <strong className="ml-5" style={{ color: "red" }}>
                  {status}{" "}
                </strong>
                <p className="row">
                  DOT :{" "}
                  <strong className="ml-2">
                    {new Date(dot).toLocaleDateString()}
                  </strong>
                </p>
              </div>
            ) : (
              <strong className="ml-5">{status} </strong>
            )}
          </p>
          <p className="row">
            Grade of Membership :{" "}
            <strong className="row ml-3">{gradeOfMembership}</strong>
          </p>
          <p className="row">
            Section: <strong className="row ml-5">{section}</strong>
          </p>
          <p className="row">
            Date of Enrolment:{" "}
            <strong className="row ml-5">{enrollDate}</strong>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-2 mr-5"></div>
        <div className="col-9">
          Committiee :
          {commityData.length > 0 &&
            commityData.map((c) => {
              return (
                <p className="col-12" key={c.id}>
                  <strong className="row ml-3">
                    {c.committee} - {c.position} -{" "}
                    {new Date(c.fromD).toLocaleDateString()} -{" "}
                    {new Date(c.toD).toLocaleDateString()}
                  </strong>
                </p>
              );
            })}
        </div>
      </div>

      <div className="row" id="personal">
        <h5 className="col-12" style={{ backgroundColor: "#e95045" }}>
          Personal Details
        </h5>
        <p className="col-3">Name with Initials : </p>
        <strong className="col-9">
          {title} {nameWinitials}{" "}
        </strong>
        <p className="col-3">Name in Full : </p>
        <strong className="col-9">{fullName}</strong>
        <p className="col-3">Name in Common Use : </p>
        <strong className="col-9">
          {commonFirst} {commomLast}{" "}
        </strong>
        <p className="col-3">Gender : </p>
        <strong className="col-9">{gender}</strong>
        <p className="col-3">NIC : </p>
        <strong className="col-9">{nic}</strong>
        <p className="col-3">Date of Birth : </p>
        <strong className="col-9">{new Date(dob).toLocaleDateString()}</strong>
        <p className="col-3">Residence Address : </p>
        <strong className="col-9">
          {resAddrs}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("resAddrs", resAddrs)}
              className="btn btn-outline-warning"
              //   style={{ display: !enableEdit && "none" }}
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "resAddrs" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "resAddrs" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        {perAddrs && (
          <>
            <p className="col-3">Permanent Address : </p>
            <strong className="col-9">
              {perAddrs}
              <span className="ml-3">
                <button
                  onClick={() => setUpdate("perAddrs", perAddrs)}
                  className="btn btn-outline-warning"
                  style={{ display: !enableEdit && "none" }}
                >
                  <FontAwesomeIcon icon={faEdit} size="xs" />
                  {/* Edit */}
                </button>
                <input
                  className="ml-3 "
                  value={dataToUpdate.value}
                  onChange={onUpdateChange}
                  style={{ display: isModalOpen != "perAddrs" && "none" }}
                />
                <button
                  onClick={saveUpdate}
                  className="btn btn-primary ml-2"
                  style={{ display: isModalOpen != "perAddrs" && "none" }}
                >
                  Update
                </button>
              </span>
            </strong>{" "}
          </>
        )}
        <p className="col-3">Mobile No : </p>
        <strong className="col-9">
          {mobileNo}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("mobileNo", mobileNo)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "mobileNo" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "mobileNo" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        <p className="col-3">Fixed No : </p>
        <strong className="col-9">
          {fixedNo}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("fixedNo", fixedNo)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "fixedNo" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "fixedNo" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        <p className="col-3">Email : </p>
        <strong className="col-9">
          {email}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("email", email)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "email" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "email" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
      </div>

      <div className="row" id="official">
        <h5 className="col-12" style={{ backgroundColor: "#e95045" }}>
          Official Details
        </h5>
        <p className="col-3">Designation : </p>
        <strong className="col-9">
          {designation}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("designation", designation)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "designation" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "designation" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        <p className="col-3">Division/Department : </p>
        <strong className="col-9">
          {department}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("department", department)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "department" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "department" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        <p className="col-3">Place of Work : </p>
        <strong className="col-9">
          {placeOfWork}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("placeOfWork", placeOfWork)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "placeOfWork" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "placeOfWork" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        <p className="col-3">Office Address : </p>
        <strong className="col-9">
          {offAddrs}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("offAddrs", offAddrs)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "offAddrs" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "offAddrs" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        <p className="col-3">Office Mobile No : </p>
        <strong className="col-9">
          {offMobile}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("offMobile", offMobile)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "offMobile" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "offMobile" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        <p className="col-3">Office Fixed No : </p>
        <strong className="col-9">
          {offLand}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("offLand", offLand)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "offLand" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "offLand" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        <p className="col-3">Office Fax : </p>
        <strong className="col-9">
          {offFax}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("offFax", offFax)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "offFax" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "offFax" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
        <p className="col-3">Official Email : </p>
        <strong className="col-9">
          {offEmail}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("offEmail", offEmail)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3 "
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "offEmail" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "offEmail" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>
      </div>

      <div className="row" id="professional">
        <h5 className="col-12" style={{ backgroundColor: "#e95045" }}>
          Professional Details
        </h5>
        <p className="col-3">Profession : </p>
        <strong className="col-9">
          {profession}
          <span className="ml-3">
            <button
              onClick={() => setUpdate("profession", profession)}
              className="btn btn-outline-warning"
              style={{ display: !enableEdit && "none" }}
            >
              <FontAwesomeIcon icon={faEdit} size="xs" />
              {/* Edit */}
            </button>
            <input
              className="ml-3"
              value={dataToUpdate.value}
              onChange={onUpdateChange}
              style={{ display: isModalOpen != "profession" && "none" }}
            />
            <button
              onClick={saveUpdate}
              className="btn btn-primary ml-2"
              style={{ display: isModalOpen != "profession" && "none" }}
            >
              Update
            </button>
          </span>
        </strong>

        <p className="col-3">Fields of Specialization : </p>
        <div className="col-9">
          <strong>{specialization1}</strong>
          <strong>{specialization2}</strong>
          <strong>{specialization3}</strong>
          <strong>{specialization4}</strong>
          <strong>{specialization5}</strong>
        </div>
        <p className="col-3">Academic Qualifications : </p>
        <div className="col-9">
          {academicData.map((field) => {
            return (
              <div className="col-12" key={field.year}>
                <strong>
                  {field.year} - {field.degree} - {field.disciplines} -{" "}
                  {field.uni}
                </strong>
              </div>
            );
          })}
        </div>
      </div>

      <div className="row" id="membership">
        <h5 className="col-12" style={{ backgroundColor: "#e95045" }}>
          Membership Details
        </h5>
        <p className="col-3">Membership No : </p>
        <strong className="col-9">{displayMembershipNo}</strong>
        <p className="col-3">Grade of Membership : </p>
        <strong className="col-9">{gradeOfMembership}</strong>
        <p className="col-3">Section: </p>
        <strong className="col-9">{section}</strong>
        {memberBefore && (
          <>
            <p className="col-3">Member Before </p>
            <p className="col-2">From : </p>
            <strong className="col-2">{memberFrom}</strong>
            <p className="col-2">To : </p>
            <strong className="col-2">{memberTo}</strong>
          </>
        )}
        <p className="col-5 ">Address to which correspondences should be : </p>
        <strong className="col-7">
          {sendingAddrs} {sendingAddrs ? "Address" : null}{" "}
        </strong>
        <div className="col-6">
          <p className="col-12 ml-5">- Proposer - </p>
          <div className="row col-12">
            <p className="col-3">Name : </p>
            <strong className="col-9">{proposer.name}</strong>
          </div>
          <div className="row col-12">
            <p className="col-3">Membership No : </p>
            <strong className="col-9">{proposer.memNo}</strong>
          </div>
          <div className="row col-12">
            <p className="col-3">Address : </p>
            <strong className="col-9">{proposer.address}</strong>
          </div>
          <div className="row col-12">
            <p className="col-3">Contact No : </p>
            <strong className="col-9">{proposer.contactNo}</strong>
          </div>
        </div>
        <div className="col-6" id="1234">
          <p className="col-12 ml-5">- Seconder -</p>
          <div className="row col-12">
            <p className="col-3">Name : </p>
            <strong className="col-9">{seconder.name}</strong>
          </div>
          <div className="row col-12">
            <p className="col-3">Membership No : </p>
            <strong className="col-9">{seconder.memNo}</strong>
          </div>
          <div className="row col-12">
            <p className="col-3">Address : </p>
            <strong className="col-9">{seconder.address}</strong>
          </div>
          <div className="row col-12">
            <p className="col-3">Contact No : </p>
            <strong className="col-9">{seconder.contactNo}</strong>
          </div>
        </div>
      </div>

      <div className="row" id="paymentRecords">
        <PaymentsHistory memberID={memberID} memNo={props.match.params.id} />
      </div>

      <div className="row p-3 mt-3">
        <div className="col-3">
          {/* <Link to={`/user/member/profile/update/${membershipNo}`}> */}
          <button
            className="btn btn-warning"
            onClick={() => setenableEdit(!enableEdit)}
          >
            Update Member
          </button>
          {/* </Link> */}
        </div>
        {status == "Member" ? (
          <div className="col-3" style={{ display: !enableEdit && "none" }}>
            <button
              onClick={() => terminateOnClick(membershipNo)}
              className="btn btn-danger"
            >
              Terminate Member
            </button>
          </div>
        ) : (
          <div className="col-3" style={{ display: !enableEdit && "none" }}>
            <button
              onClick={() => getBackOnClick(membershipNo)}
              className="btn btn-success"
            >
              Continue Membership
            </button>
          </div>
        )}
      </div>

      <div className="mb-5"></div>
      {/* <UpdateMemberModal
        isModalOpen={isModalOpen}
        setisModalOpen={setisModalOpen}
        dataToUpdate={dataToUpdate}
      /> */}
    </div>
  );
};

// MemberProfileWUpdate.jsx.propTypes = {
//   memberData: PropTypes.object,
//   prevStep: PropTypes.func.isRequired,
//   nextStep: PropTypes.func.isRequired,
//   submit: PropTypes.func.isRequired,
// };
