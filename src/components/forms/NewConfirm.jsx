import React from 'react';
import PropTypes from 'prop-types';
import { Button} from 'reactstrap'
import Loader from 'react-loader-spinner'
import MembershipNo from './MembershipNo'

export const NewConfirm = ({dateOfBirth, membershipNo, setMembershipNo, proposer, seconder, memberData, prevStep, nextStep, loading, submit , filePreview, file}) => {
  const {title,nameWinitials,nameInFull,firstName,lastName,gender,nic,dob,resAddOne,
        resAddTwo, resAddThree, resAddFour, resAddFive,perAddrsAvai, perAddOne,perAddTwo,perAddThree,perAddFour,perAddFive,
        mobileNo,landNo,email,designation,division,placeWork,offAddrslineOne,offAddrslineTwo,offAddrslineThree,offAddrslineFour,
        offAddrslineFive, offMobile,offLandNo,offEmail, offFax, profession, fieldOfSpecial,academic,gradeOfMem,section,memBefore,memFrom ,memTo,
        sendingAddrs,proposer$seconder,lastPaidForYear, arrearstoPay, enrollDate, council} = memberData
  // const {receivedDate,paymentDoneDate,paymentMethod,amount,bank,branch,accountNo} = paymentData
  
  console.log('File Previewing', filePreview)
  return (
    
    <>
    {/* <div className="col-4">                
      <img style={{ width: "100%" }, { height: "200px"}} src={file} />
    </div> */}
    <div className="row" id="personal">
      <h6 className="col-12" style={{backgroundColor: "yellow"}}>Personal Details</h6>     
      <p className="col-3">Name with Initials : </p><strong className="col-9">{title} {nameWinitials}</strong>
      <p className="col-3">Name in Full : </p><strong className="col-9">{nameInFull}</strong>
      <p className="col-3 ">Name in Common Use : </p><strong className="col-9">{firstName} {lastName} </strong>
      <p className="col-3">Gender : </p><strong className="col-9">{gender}</strong>
      <p className="col-3">NIC : </p><strong className="col-9">{nic}</strong>
      <p className="col-3">Date of Birth : </p><strong className="col-9">{new Date(dob).toLocaleDateString()}</strong>
      <p className="col-3">Residence Address : 
      </p><strong className="col-9">
          {resAddOne ? `${resAddOne}` : null}  
          {resAddTwo ? `, ${resAddTwo}` : null} 
          {resAddThree ? `, ${resAddThree}` : null} 
          {resAddFour ? `, ${resAddFour}` : null} 
          {resAddFive ? `, ${resAddFive}` : null}
          </strong>
      { perAddrsAvai && 
        <>
          <p className="col-3">Permanent Address : </p>
          <strong className="col-9">
                      {perAddOne ? `${perAddOne}` : null}  
                      {perAddTwo ? `, ${perAddTwo}` : null} 
                      {perAddThree ? `, ${perAddThree}` : null} 
                      {perAddFour ? `, ${perAddFour}` : null} 
                      {perAddFive ? `, ${perAddFive}` : null}
            </strong> 
        </>
      }
      <p className="col-3">Mobile No : </p><strong className="col-9">{mobileNo}</strong>
      <p className="col-3">Fixed No : </p><strong className="col-9">{landNo}</strong>
      <p className="col-3">Email : </p><strong className="col-9">{email}</strong>
    </div>

    <div className="row" id="official">
      <h6 className="col-12" style={{backgroundColor: "yellow"}}>Official Details</h6>
      <p className="col-3">Designation : </p><strong className="col-9">{designation}</strong>
      <p className="col-3">Division/Department : </p><strong className="col-9">{division}</strong>
      <p className="col-3 ">Place of Work : </p><strong className="col-9">{placeWork} </strong>
      <p className="col-3">Office Address : </p>
          <strong className="col-9">
                  {offAddrslineOne ? `${offAddrslineOne}` : null}  
                  {offAddrslineTwo ? `, ${offAddrslineTwo}` : null} 
                  {offAddrslineThree ? `, ${offAddrslineThree}` : null} 
                  {offAddrslineFour ? `, ${offAddrslineFour}` : null} 
                  {offAddrslineFive ? `, ${offAddrslineFive}` : null}
          </strong>
      <p className="col-3">Office Mobile No : </p><strong className="col-9">{offMobile}</strong>
      <p className="col-3">Office Fixed No : </p><strong className="col-9">{offLandNo}</strong>
      <p className="col-3">Office Fax : </p><strong className="col-9">{offFax}</strong>
      <p className="col-3">Official Email : </p><strong className="col-9">{offEmail}</strong>
    </div>

    <div className="row" id="professional">
      <h6 className="col-12" style={{backgroundColor: "yellow"}}>Professional Details</h6>
      <p className="col-3">Profession : </p><strong className="col-9">{profession}</strong>
      <p className="col-3">Fields of Specialization : </p>
        <div  className="col-9">
        {
          fieldOfSpecial.map( field => { 
            return <div key={field}  className="col-12"><strong>{field}</strong></div> 
          })
        }
        </div>
      <p className="col-3">Academic Qualifications : </p>
        <div  className="col-9">
        {
          academic.map( field => { 
            return (
              <div  className="col-12" key={field.degree}>
                <strong>{field.year} -  {field.degree} -  {field.disciplines} -  {field.uni}</strong>
              </div>
            )
          })
        }
        </div>
    </div>

    <div className="row" id="membership">      
      <h6 className="col-12" style={{backgroundColor: "yellow"}}>Membership Details</h6>
      <div className="col-12 mt-3 mb-3">
        <MembershipNo membershipNo={membershipNo} section={section} setMembershipNo={setMembershipNo} />
      </div>      
      <p className="col-3">Grade of Membership : </p><strong className="col-9">{gradeOfMem}</strong>
      <p className="col-3">Section: </p><strong className="col-9">{section}</strong>
      <p className="col-3">Enrolled Date: </p><strong className="col-9">{new Date(enrollDate).toLocaleDateString()}</strong>
      <p className="col-3">Council Position: </p><strong className="col-9">{council}</strong>
      {
        memBefore &&
        <>
          <p className="col-3">Member Before </p>
          <p className="col-2">From : </p><strong className="col-2">{new Date(memFrom).toLocaleDateString()}</strong>
          <p className="col-2">To : </p><strong className="col-2">{new Date(memTo).toLocaleDateString()}</strong>
        </>
      }
      <p className="col-5 ">Address to which correspondences should be : </p><strong className="col-7">{sendingAddrs} {(sendingAddrs) ? "Address" : null} </strong>
      <div className="col-6">
        <p className="col-12 ml-5">- Proposer - </p>
        <div className="row col-12"><p className="col-3">Membership No : </p><strong className="col-9">{proposer.memNo}</strong></div>
        <div className="row col-12"><p className="col-3">Name : </p><strong className="col-9">{proposer.name}</strong></div>
        <div className="row col-12"><p className="col-3">Address : </p><strong className="col-9">{proposer.address}</strong></div>
        <div className="row col-12"><p className="col-3">Contact No : </p><strong className="col-9">{proposer.contactNo}</strong></div>
      </div>
      <div className="col-6">
        <p className="col-12 ml-5">- Seconder -</p>
        <div className="row col-12"><p className="col-3">Membership No : </p><strong className="col-9">{seconder.memNo}</strong></div>
        <div className="row col-12"><p className="col-3">Name : </p><strong className="col-9">{seconder.name}</strong></div>
        <div className="row col-12"><p className="col-3">Address : </p><strong className="col-9">{seconder.address}</strong></div>
        <div className="row col-12"><p className="col-3">Contact No : </p><strong className="col-9">{seconder.contactNo}</strong></div>
      </div>      
    </div>
    <div className="row" id="official">
      <h6 className="col-12" style={{backgroundColor: "yellow"}}>Payment Details</h6>
      <p className="col-3">Last Membership Payment for Year : </p><strong className="col-9">{lastPaidForYear}</strong>
      <p className="col-3">Arrears to Pay : </p><strong className="col-9">{arrearstoPay}</strong>
    </div>

    
    <Button color="primary" className="float-right m-1" onClick={() => submit()}>Confirm & Continue
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
    <Button color="secondary" className="float-right m-1" onClick={() => prevStep()}>Back</Button>
    
    <div className="mb-5">

    </div>
    </>
  );
};

NewConfirm.propTypes = {
  memberData: PropTypes.object,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired

};
