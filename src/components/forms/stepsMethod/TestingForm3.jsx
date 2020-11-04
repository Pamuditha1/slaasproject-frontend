import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {TestingForm4} from './TestingForm4'
import {TestingForm5} from './TestingForm5'
import { Confirm } from './Confirm'
import { Success } from './Success'




function TestingForm3() { 
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        bank: "",
        branch: "",
        accountNo : ""
    })
    const nextStep = () => setStep(prev => prev + 1)
    const prevStep = () => setStep(prev => prev - 1)
    if(step==4) {
        console.log(formData)
    }

    switch(step) {
        case 1 : return (
            <TestingForm4 formData={formData} setFormData={setFormData}
            nextStep={nextStep} />
        )
        case 2 : return (
            <TestingForm5 formData={formData} setFormData={setFormData}
            nextStep={nextStep} />
        )
        case 3 : return (
            <Confirm formData={formData} nextStep={nextStep} prevStep={prevStep}/>
        )
        default: return <Success />
        
    }
}

export default TestingForm3

