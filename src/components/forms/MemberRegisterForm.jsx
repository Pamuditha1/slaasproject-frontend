import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Confirm } from './Confirm'
import { Success } from './stepsMethod/Success'
import MemPersonalForm from './MemPersonalForm'
import MemberOfficeForm from './MemberOfficeForm'

function MemberRegisterForm() {

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        personal : {
            nameWinitials: "" ,
            nameInFull: "",
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            nic : "",
            dob : "",
            resAddOne : "",
            resAddTwo : "",
            resAddThree : "",
            resAddFour : "",
            resAddFive : "",
            perAddrsAvai : false,
            permanentAddrs : {
                lineOne : "",
                lineTwo : "",
                lineThree : "",
                lineFour : "",
                lineFive : ""
            },
            mobileNo : "",
            landNo : "",
            email: "", 
            fax: "",
        },
        official : {
            designation: "" ,
            division: "",
            placeWork: "",    
            offAddrslineOne : "",
            offAddrslineTwo : "",
            offAddrslineThree : "",
            offAddrslineFour : "",
            offAddrslineFive : "",   
            offMobile : "",
            offLandNo : "",
            offEmail: "", 
            offFax: ""
        }
        
        
        })
    const nextStep = () => setStep(prev => prev + 1)
    const prevStep = () => setStep(prev => prev - 1)
    if(step==4) {
        console.log(formData)
    }

    switch(step) {
        case 1 : return (
            <MemPersonalForm formData={formData}
            setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
        )
        case 2 : return (
            <MemberOfficeForm formData={formData}
            setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
        )
        case 3 : return (
            <Confirm formData={formData}
            setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
        )
        default: return <Success />
        
    }
}

export default MemberRegisterForm
