import React, { useState } from 'react'
import MemPersonalForm from './MemPersonalForm'
import MemberOfficeForm from './MemberOfficeForm'
import MemberProfessionalForm from './MemberProfessionalForm'
import MemberMembershipForm from './MemberMembershipForm'
import MemberPaymentForm from './MemberPaymentForm'
import { Confirm } from './Confirm'
import {registerMember} from '../../services/registerMemberService'

function MemberRegisterForm() {

    const genderOptions = [{key: "Male", value: "Male"},{key: "Female", value: "Female"}]
    const titleOptions = ["Rev.","Prof.","Dr.","Mr.","Mrs.","Miss."]
    const addressOptions = ["Residence", "Permanent", "Official"]
    const membershipGrades = ["Life Member","Annual Member","Associate Member","Corporate Member","Student Member"]
    const sections = [{key: "Section A  -  Medical, Dental and Veterinary Sciences", value: "A"},
                    {key: "Section B  - Agricultural Sciences and Forestry", value: "B"},
                    {key: "Section C  -  Engineering, Architecture and Surveying", value: "C"},
                    {key: "Section D  -  Life & Earth Sciences (Botany, Zoology, Fisheries, Geology and Mineralogy)", value: "D"},
                    {key: "Section E1 -  Physical Sciences (Physics, Mathematics, Statistics)", value: "E1"},
                    {key: "Section E2 -  Chemical Sciences (Chemistry, Bio-Chemistry, Agricultural Chemistry, Chemical Technology, Food Chemistry and Polymer Chemistry)", value: "E2"},
                    {key: "Section E3 -  Computer Science", value: "E3"},
                    {key: "Section F  -  Social Sciences (Anthropology, Archaeology, Demography, Education, Economics, Geography, Psychology and Sociology)", value: "F"},
    ]    
    const paymentMethods = ["Cash","Bank Draft","Cheque","Online"]
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [personalData, setPersonalData] = useState({
        title: "",
        nameWinitials: "" ,
        nameInFull: "",
        firstName: "",
        lastName: "",
        gender: "",
        nic : "",
        dob : "",
        resAddOne : "", resAddTwo : "", resAddThree : "", resAddFour : "", resAddFive : "",
        perAddrsAvai : false,
        perAddOne : "", perAddTwo : "", perAddThree : "", perAddFour : "", perAddFive : "",
        mobileNo : "",
        landNo : "",
        email: "", 
    })
    const [officialData, setOfficialData] = useState({
        designation: "" ,
        division: "",
        placeWork: "",    
        offAddrslineOne : "",
        offAddrslineTwo : "",
        offAddrslineThree : "",
        offAddrslineFour : "",
        offAddrslineFive : " ",   
        offMobile : "",
        offLandNo : "",
        offEmail: "", 
        offFax: ""
    })
    const [professionalData, setProfessionalData] = useState({
        profession: "",
        fieldOfSpecial: [''],
        academic: [{
            year: '', degree: '', disciplines: '', uni: ''
        }]
    })
    var datetime = new Date();
    const [membershipData, setMembershipData] = useState({
        gradeOfMem : "",
        section: "",
        memBefore: false,
        memFrom : "", memTo: "",
        sendingAddrs: "",
        status: "member",
        enrollDate: datetime,
        proposer$seconder: {
            proposer: {
                name: "", memNo: "", address: "", contactNo: ""
            },
            seconder: {
                name: "", memNo: "", address: "", contactNo: ""
            }
        }
    })
    // const [paymentData, setPaymentData] = useState({
    //     paymentDoneDate: "",
    //     receivedData : new Date(),
    //     paymentMethod: "",
    //     amount: "",
    //     bank: "",
    //     branch: "",
    //     accountNo: "",
    //     description: ""
    // })


    const nextStep = () => setStep(prev => prev + 1)
    const prevStep = () => setStep(prev => prev - 1)
    const submit = async () => {
        setLoading(true)
        const member = {
            personalData: personalData,
            officialData: officialData,
            professionalData: professionalData,
            membershipData: membershipData,
            // paymentData: paymentData
        }
        console.log(member)
        await registerMember(member)
        setLoading(false)
    }
    const reload = () => {
        window.location.reload(false);
    }


    switch(step) {
        case 1 : return(
            <>
                <MemPersonalForm personalData={personalData} setPersonalData={setPersonalData} nextStep={nextStep} genderOptions={genderOptions} titleOptions={titleOptions}/>
                <MemberOfficeForm officialData={officialData} setOfficialData={setOfficialData} nextStep={nextStep} prevStep={prevStep}/>
                <MemberProfessionalForm professionalData={professionalData} setProfessionalData={setProfessionalData} nextStep={nextStep} prevStep={prevStep}/>
                <MemberMembershipForm membershipData={membershipData} setMembershipData={setMembershipData} nextStep={nextStep} prevStep={prevStep} 
                addressOptions={addressOptions} membershipGrades={membershipGrades} sections={sections} reload={reload}/>
                
            </>
        )

        case 2 : return(
            <div className="container">
                <Confirm personalData={personalData} officialData={officialData} professionalData={professionalData}
                membershipData={membershipData} nextStep={nextStep} prevStep={prevStep} submit={submit} loading={loading}/>
            </div>
        )
            
        
    }

    // switch(step) {
    //     case 1 : return (
    //         <div className="container">
    //             <MemPersonalForm personalData={personalData} setPersonalData={setPersonalData} nextStep={nextStep} genderOptions={genderOptions} titleOptions={titleOptions}/>
    //         </div>
    //     )
    //     case 2 : return (
    //         <div className="container">
    //             <MemberOfficeForm officialData={officialData} setOfficialData={setOfficialData} nextStep={nextStep} prevStep={prevStep}/>
    //         </div>
            
    //     )
    //     case 3 : return(            
    //         <div className="container">
    //             <MemberProfessionalForm professionalData={professionalData} setProfessionalData={setProfessionalData} nextStep={nextStep} prevStep={prevStep}/>
    //         </div>
    //     )
    //     case 4 : return (
    //         <MemberMembershipForm membershipData={membershipData} setMembershipData={setMembershipData} nextStep={nextStep} prevStep={prevStep} 
    //         addressOptions={addressOptions} membershipGrades={membershipGrades} sections={sections}/>
    //     )
    //     case 5 : return (
    //         // <div className="container">
    //         //     <MemberPaymentForm paymentData={paymentData} setPaymentData={setPaymentData} nextStep={nextStep} prevStep={prevStep} paymentMethods={paymentMethods}/>
    //         // </div>
    //         <div className="container">
    //             <Confirm personalData={personalData} officialData={officialData} professionalData={professionalData}
    //             membershipData={membershipData} nextStep={nextStep} prevStep={prevStep} submit={submit} loading={loading}/>
    //         </div>
    //     )
    //     // case 6 : return(
    //     //     // <div className="container">
    //     //     //     <Confirm personalData={personalData} officialData={officialData} professionalData={professionalData}
    //     //     //     membershipData={membershipData} paymentData={paymentData} nextStep={nextStep} prevStep={prevStep} submit={submit} loading={loading}/>
    //     //     // </div>
            
    //     // )
    //     default: return <MemPersonalForm />
        
    // }
}

export default MemberRegisterForm
