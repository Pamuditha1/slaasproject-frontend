import React, { useState } from 'react'
import MemPersonalForm from './MemPersonalForm'
import MemberOfficeForm from './MemberOfficeForm'
import MemberProfessionalForm from './MemberProfessionalForm'
import MemberMembershipForm from './MemberMembershipForm'
import MemberPaymentForm from './MemberPaymentForm'
import { Confirm } from './Confirm'
import { Success } from './stepsMethod/Success'
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

    const [membershipData, setMembershipData] = useState({
        gradeOfMem : "",
        section: "",
        memBefore: false,
        memFrom : "", memTo: "",
        sendingAddrs: "",
        proposer$seconder: {
            proposer: {
                name: "", memNo: "", address: "", contactNo: ""
            },
            seconder: {
                name: "", memNo: "", address: "", contactNo: ""
            }
        }
    })
    const [paymentData, setPaymentData] = useState({
        paymentDoneDate: "",
        paymentMethod: "",
        amount: "",
        bank: "",
        branch: "",
        accountNo: ""
    })


    const nextStep = () => setStep(prev => prev + 1)
    const prevStep = () => setStep(prev => prev - 1)
    const submit = async () => {
        const member = {
            personalData: personalData,
            officialData: officialData,
            professionalData: professionalData,
            membershipData: membershipData,
            paymentData: paymentData
        }
        await registerMember(member)
    }
    // if(step==4) {
    //     console.log(formData)
    // }


    switch(step) {
        case 1 : return (
            <MemPersonalForm personalData={personalData} setPersonalData={setPersonalData} nextStep={nextStep} genderOptions={genderOptions} titleOptions={titleOptions}/>
        )
        case 2 : return (
            <MemberOfficeForm officialData={officialData} setOfficialData={setOfficialData} nextStep={nextStep} prevStep={prevStep}/>
        )
        case 3 : return(
            <MemberProfessionalForm professionalData={professionalData} setProfessionalData={setProfessionalData} nextStep={nextStep} prevStep={prevStep}/>
        )
        case 4 : return (
            <MemberMembershipForm membershipData={membershipData} setMembershipData={setMembershipData} nextStep={nextStep} prevStep={prevStep} 
            addressOptions={addressOptions} membershipGrades={membershipGrades} sections={sections}/>
        )
        case 5 : return (
            <MemberPaymentForm paymentData={paymentData} setPaymentData={setPaymentData} nextStep={nextStep} prevStep={prevStep} paymentMethods={paymentMethods}/>
        )
        case 6 : return(
            <Confirm personalData={personalData} officialData={officialData} professionalData={professionalData}
            membershipData={membershipData} paymentData={paymentData} nextStep={nextStep} prevStep={prevStep} submit={submit}/>
        )
        default: return <Success />
        
    }
}

export default MemberRegisterForm
