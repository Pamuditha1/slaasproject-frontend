import React, {useMemo, useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { Button} from 'reactstrap'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import ViewImage from './ViewImage';

export const MemberProfile = (props) => {

    
    const [memberData, setMemberData] = useState({});
    const [academicData, setAcademicData] = useState([])
    const [proposer, setProposer] = useState({})
    const [seconder, setSeconder] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    console.log(props.match.params.id)
    useEffect(async () => {
        setIsLoading(true)
        const fetchData = () => {
            axios(`http://localhost:3001/slaas/api/user/member/profile/${props.match.params.id}`)
            .then(function (res) {
                console.log("Response data", res.data)
                console.log(typeof res.data)
                setMemberData(res.data.member)
                setAcademicData(res.data.academic)
                setProposer(res.data.proposer)
                setSeconder(res.data.seconder)
            })      
            .then(function () {
                console.log("Member data", memberData)
            })      
            
        };    
        await fetchData();
        setIsLoading(false)
    }, []);

    const {
        membershipNo, gradeOfMembership, section, status, enrollDate, appliedDate, councilPosition, memberFolioNo,
        title, nameWinitials, fullName, memPaidLast, lastPaidForYear, arrearsConti, commonFirst, commomLast, gender, dob, nic,
        mobileNo, fixedNo, email, resAddrs, perAddrs, sendingAddrs, designation, department, placeOfWork, offMobile,
        offLand, offFax, offEmail, offAddrs, memberBefore, memberFrom, memberTo, profession, specialization1, specialization2, specialization3, specialization4, 
        specialization5, password, proposerID, seconderID
        
    } = memberData   
    // const enrolledDate = Date(`${enrollDate}`).toLocaleDateString()
    const displayMembershipNo = `${membershipNo}/${section}`

    return (
    
    isLoading ? 
    <Loader style={{marginLeft : "35%"}}
        type="ThreeDots"
        color="#00BFFF"
        height={300}
        width={300}
    /> :

    <>
    <div className="row" id="main">
        <h3 className="col-12 text-center mb-5" style={{color: "#e95045"}}>Member Profile</h3>
        <div className="col-2 mr-5">
          <ViewImage nic={props.match.params.id}/>
        </div>
        <div className="col-5" id="personalData">
          <p className="row">Name with Initials : </p><strong className="row">{title} {nameWinitials}</strong>
          <p className="row">NIC : </p><strong className="row">{nic}</strong>
          <p className="row">Email : </p><strong className="row">{email}</strong>
          <p className="row">Mobile No : </p><strong className="row">{mobileNo}</strong>
          <p className="row">Preffered Address : </p><strong className="row">{sendingAddrs}</strong>
        </div>
        <div className="col-4" id="membershipData">
          <p className="row">Membership No: </p><strong className="row">{displayMembershipNo}</strong>
          <p className="row">Grade of Membership : </p><strong className="row">{gradeOfMembership}</strong>
          <p className="row">Section: </p><strong className="row">{section}</strong>
          <p className="row">Date of Enrolment: </p><strong className="row">{enrollDate}</strong>
        </div>
    </div>    

    <div className="row" id="personal">
        <h5 className="col-12" style={{backgroundColor: "#e95045"}}>Personal Details</h5>
        <p className="col-3">Name with Initials : </p><strong className="col-9">{title} {nameWinitials}</strong>
        <p className="col-3">Name in Full : </p><strong className="col-9">{fullName}</strong>
        <p className="col-3">Name in Common Use : </p><strong className="col-9">{commonFirst} {commomLast} </strong>
        <p className="col-3">Gender : </p><strong className="col-9">{gender}</strong>
        <p className="col-3">NIC : </p><strong className="col-9">{nic}</strong>
        <p className="col-3">Date of Birth : </p><strong className="col-9">{dob}</strong>
        <p className="col-3">Residence Address : </p><strong className="col-9">{resAddrs}</strong>
        {perAddrs && 
            <><p className="col-3">Permanent Address : </p><strong className="col-9">{perAddrs}</strong> </>
        }
        <p className="col-3">Mobile No : </p><strong className="col-9">{mobileNo}</strong>
        <p className="col-3">Fixed No : </p><strong className="col-9">{fixedNo}</strong>
        <p className="col-3">Email : </p><strong className="col-9">{email}</strong>
    </div>

    <div className="row" id="official">
        <h5 className="col-12" style={{backgroundColor: "#e95045"}}>Official Details</h5>
        <p className="col-3">Designation : </p><strong className="col-9">{designation}</strong>
        <p className="col-3">Division/Department : </p><strong className="col-9">{department}</strong>
        <p className="col-3">Place of Work : </p><strong className="col-9">{placeOfWork} </strong>
        <p className="col-3">Office Address : </p><strong className="col-9">{offAddrs}</strong>
        <p className="col-3">Office Mobile No : </p><strong className="col-9">{offMobile}</strong>
        <p className="col-3">Office Fixed No : </p><strong className="col-9">{offLand}</strong>
        <p className="col-3">Office Fax : </p><strong className="col-9">{offFax}</strong>
        <p className="col-3">Official Email : </p><strong className="col-9">{offEmail}</strong>
    </div>

    <div className="row" id="professional">
        <h5 className="col-12" style={{backgroundColor: "#e95045"}}>Professional Details</h5>
        <p className="col-3">Profession : </p><strong className="col-9">{profession}</strong>
        <p className="col-3">Fields of Specialization : </p>
        <div  className="col-9">
            <strong>{specialization1}</strong>
            <strong>{specialization2}</strong>
            <strong>{specialization3}</strong>
            <strong>{specialization4}</strong>
            <strong>{specialization5}</strong>
        </div>
        <p className="col-3">Academic Qualifications : </p>
        <div  className="col-9">
        {
            academicData.map( field => { 
                return (
                    <div  className="col-12">
                    <strong>{field.year} -  {field.degree} -  {field.disciplines} -  {field.uni}</strong>
                    </div>
                )
            })
        }
        </div>
    </div>

    <div className="row" id="membership">
      <h5 className="col-12" style={{backgroundColor: "#e95045"}}>Membership Details</h5>
      <p className="col-3">Membership No : </p><strong className="col-9">{displayMembershipNo}</strong>
      <p className="col-3">Grade of Membership : </p><strong className="col-9">{gradeOfMembership}</strong>
      <p className="col-3">Section: </p><strong className="col-9">{section}</strong>
      {
        memberBefore &&
        <>
          <p className="col-3">Member Before </p>
          <p className="col-2">From : </p><strong className="col-2">{memberFrom}</strong>
          <p className="col-2">To : </p><strong className="col-2">{memberTo}</strong>
        </>
      }
      <p className="col-5 ">Address to which correspondences should be : </p><strong className="col-7">{sendingAddrs} {(sendingAddrs) ? "Address" : null} </strong>
      <div className="col-6">
        <p className="col-12 ml-5">- Proposer - </p>
        <div className="row col-12"><p className="col-3">Name : </p><strong className="col-9">{proposer.name}</strong></div>
        <div className="row col-12"><p className="col-3">Membership No : </p><strong className="col-9">{proposer.memNo}</strong></div>
        <div className="row col-12"><p className="col-3">Address : </p><strong className="col-9">{proposer.address}</strong></div>
        <div className="row col-12"><p className="col-3">Contact No : </p><strong className="col-9">{proposer.contactNo}</strong></div>
      </div>
      <div className="col-6">
        <p className="col-12 ml-5">- Seconder -</p>
        <div className="row col-12"><p className="col-3">Name : </p><strong className="col-9">{seconder.name}</strong></div>
        <div className="row col-12"><p className="col-3">Membership No : </p><strong className="col-9">{seconder.memNo}</strong></div>
        <div className="row col-12"><p className="col-3">Address : </p><strong className="col-9">{seconder.address}</strong></div>
        <div className="row col-12"><p className="col-3">Contact No : </p><strong className="col-9">{seconder.contactNo}</strong></div>
      </div>      
    </div>

    {/* <div className="row" id="payment">
      <h3 className="col-12" style={{backgroundColor: "yellow"}}>Payment Details</h3>
      <p className="col-3">Payment done Date : </p><strong className="col-9">{paymentDoneDate}</strong>
      <p className="col-3">Payment Method: </p><strong className="col-9">{paymentMethod}</strong>
      <p className="col-3">Amount : </p><strong className="col-9">{amount}</strong>
      <p className="col-3">Bank: </p><strong className="col-9">{bank}</strong>
      <p className="col-3">Branch : </p><strong className="col-9">{branch}</strong>
      <p className="col-3">Account No: </p><strong className="col-9">{accountNo}</strong>
    </div>       */}

    
    {/* <Button color="primary" className="float-right m-1" onClick={() => submit()}>Confirm & Continue
        <span>
        { loading && 
            <Loader
              type="ThreeDots"
              color="white"
              height={30}
              width={30}
          />}
          
        

        </span>
    </Button>
    <Button color="secondary" className="float-right m-1" onClick={() => prevStep()}>Back</Button> */}
    
    <div className="mb-5">

    </div>
    </>
  );
};

MemberProfile.propTypes = {
  memberData: PropTypes.object,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired

};
