import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import ValidationError from '../../validationError'
import DateView from 'react-datepicker'
import ReceiptGenerator from '../ReceiptGenerator'

const validationSchema = Yup.object({
    
     
})
// const submitForm = (data) => {
//         console.log(data)
// }

function MemberPaymentForm() {
    const [step, setStep] = useState(1)
    const paymentMethods = ["Cash","Bank Draft","Cheque","Online"]
    const [paymentData, setPaymentData] = useState({
        memberName: '',
        membershipNo: '',
        nic: '',

        paymentDoneDate: "",
        receivedData : new Date(),
        paymentMethod: "",
        amount: "",
        bank: "",
        branch: "",
        accountNo: "",
        description: ""
    })
    
    switch(step) {
        case 1 : return (
            <>
            
            <h6 style={{backgroundColor: "#19BDFF"}} className="pl-5 pt-1 pb-1">Payment Receipt</h6>
            <Formik className="container"
            initialValues={paymentData}
            validationSchema= {validationSchema}
            onSubmit={values => {
                setPaymentData(values); 
                setStep(2)           
                
            }} 
            >
                {
                    formik => {
                    
                        const handleStyle = (n)  => {                      
                            
                            if(formik.errors[n] && formik.touched[n]) return "form-control is-invalid"
                            else if (!formik.errors[n] && formik.touched[n]) return "form-control is-valid"
                            else return "form-control"
                        }
                        return( 
                            
                        <Form className="container">
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="memberName">Member Name</label> 
                                    <Field className={ `${handleStyle('memberName')}`} type="text" id="memberName" name="memberName"/>
                                    <ErrorMessage name="memberName" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="membershipNo">Membership No</label> 
                                    <Field className={ `${handleStyle('membershipNo')}`} type="text" id="membershipNo" name="membershipNo"/>
                                    <ErrorMessage name="membershipNo" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="nic">NIC</label> 
                                    <Field className={ `${handleStyle('nic')}`} type="text" id="nic" name="nic"/>
                                    <ErrorMessage name="nic" component={ValidationError}/>
                                </div>
                                <div className="col-6"></div>
                                <div className="form-group col-6">
                                            <label htmlFor="paymentDoneDate" className="form-check">Payment Done Date</label> 
                                            <Field className={ `${handleStyle('paymentDoneDate')}`} name="paymentDoneDate" >
                                            {
                                                    ({form,field}) => {
                                                        const {setFieldValue} = form
                                                        const {value} = field
                                                        return <DateView className="form-control" id="paymentDoneDate" {...field} selected={value}
                                                        dateFormat="dd/MM/yyyy" maxDate={new Date()} showYearDropdown scrollableMonthYearDropdown
                                                        onChange={val => setFieldValue("paymentDoneDate", val)}/>
                                                    }
                                            }
                                            </Field>
                                            <ErrorMessage name="paymentDoneDate" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="paymentMethod">Payment Method</label> 
                                    <div>
                                            <Field className="form-control col-10" as="select" id="paymentMethod" name="paymentMethod"> 
                                                {
                                                    paymentMethods.map(option => {
                                                        return(
                                                            <option key={option} value={option} style={{textAlign: "center"}}>
                                                                {option}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </Field>
                                            <ErrorMessage name="gradeOfMem" component={ValidationError}/> 
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="amount">Amount</label> 
                                    <Field className={ `${handleStyle('amount')}`} type="number" id="amount" name="amount"/>
                                    <ErrorMessage name="amount" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="bank">Bank</label> 
                                    <Field className={ `${handleStyle('bank')}`} type="text" id="bank" name="bank"/>
                                    <ErrorMessage name="bank" component={ValidationError}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="branch">Branch</label> 
                                    <Field className={ `${handleStyle('branch')}`} type="text" id="branch" name="branch"/>
                                    <ErrorMessage name="branch" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="accountNo">Account No</label> 
                                    <Field className={ `${handleStyle('accountNo')}`} type="text" id="accountNo" name="accountNo"/>
                                    <ErrorMessage name="accountNo" component={ValidationError}/>
                                </div>
                            </div>
                            <div className="form-group col-6">
                                    <label htmlFor="description">Description</label> 
                                    <Field className={ `${handleStyle('description')}`} type="text" id="description" name="description"/>
                                    <ErrorMessage name="description" component={ValidationError}/>
                            </div>
                            <button type="submit" className="btn btn-primary float-right m-1">Continue</button>
                            {/* <button type="submit" className="btn btn-primary float-right m-1">Next</button> */}
                            {/* <button type="submit" onClick={() => setStep(1)} className="btn btn-primary float-right m-1">Back</button> */}
                        </Form> 
                        )
                    }
                }
       
            </Formik>
            </>
        )
        case 2 : return (
            <ReceiptGenerator paymentData={paymentData} setStep={setStep}/>
        )
    }

    
}

export default MemberPaymentForm
// MemberPaymentForm.propTypes = {
//     paymentMethods : PropTypes.array.isRequired,
//     paymentData: PropTypes.object,
//     setPaymentData: PropTypes.func.isRequired,
//     nextStep: PropTypes.func.isRequired,
//     prevStep: PropTypes.func.isRequired
//   };
