import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage , FormikConfig, FormikValues } from 'formik'
import {string, object} from 'yup'
import ValidationError from '../../validationError'
import TestingForm from './TestingForm';
import TestingFormTwo from './TestingFormTwo';
import { Component } from 'react';

var today = new Date(),
date =  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();


function TestingMain() {
    
    return (
        <FormikStepper 
            validationSchema = {object({
            reseivedDate: string().required('Required'),
            paidDate: string().required('Required'),
            paymentMethod: string().required('Required'),
            bank: string().required('Required'),   
            branch: string().required('Required'),
            accountNo: string().required('Required'),
            council : string().required('Required'),
            memberFolioNo: string().required('Required'),   
            benrollDate: string().required('Required'),   
             
        })}

        initialValues = {{
            reseivedDate: "" ,
            paidDate: "",
            paymentMethod: "",
            bank: "",
            branch: "",
            accountNo : "", 
            council: "", 
            memberFolioNo: "",
            enrollDate : date
        }}

        onSubmit = {() => {}}
        >
            
                    
                   
                     {/* const handleStyle = (n: object)  => {  
                        
                        if(errors[n] && formik.touched[n]) return "form-control is-invalid"
                        else if (!formik.errors[n] && formik.touched[n]) return "form-control is-valid"
                        else return "form-control"                     
                                                                        
                    } */}
                    
                        
                    
                        <div className="form-group">
                            <label htmlFor="reseivedDate">Received Date</label> 
                            <Field className="form-control" type="text" id="reseivedDate" name="reseivedDate"/>
                            <ErrorMessage name="reseivedDate" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="paidDate">Payment Done Date</label> 
                            <Field className="form-control" type="text" id="paidDate" name="paidDate"/>
                            <ErrorMessage name="paidDate" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="paymentMethod">Payment Method</label> 
                            <Field className="form-control" type="text" id="paymentMethod" name="paymentMethod"/>
                            <ErrorMessage name="paymentMethod" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bank">Bank</label> 
                            <Field className="form-control" type="text" id="bank" name="bank"/>
                            <ErrorMessage name="bank" component={ValidationError}/>
                        </div>                       
                        <div className="form-group">
                            <label htmlFor="branch">Branch</label> 
                            <Field className="form-control" type="text" id="branch" name="branch"/>
                            <ErrorMessage name="branch" component={ValidationError}/>
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="accountNo">Account No</label> 
                            <Field className="form-control" type="text" id="accountNo" name="accountNo"/>
                            <ErrorMessage name="accountNo" component={ValidationError}/>
                        </div>                         
                        <div className="form-group">
                            <label htmlFor="council">Council</label> 
                            <Field className="form-control" type="text" id="council" name="council"/>
                            <ErrorMessage name="council" component={ValidationError}/>
                        </div>                    
                        <div className="form-group">                         
                            <label htmlFor="memberFolioNo">Member Folio No</label> 
                            <Field className="form-control" type="text" id="memberFolioNo" name="memberFolioNo"/>
                            <ErrorMessage name="memberFolioNo" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="enrollDate">Enroll Date</label> 
                            <Field className="form-control" type="text" id="enrollDate" name="enrollDate"/>
                            <ErrorMessage name="enrollDate" component={ValidationError}/>
                        </div>
                    
                    
                
            
   
        </FormikStepper>
    )
}

export default TestingMain

export function FormikStepper({children, ...props}: FormikConfig<FormikValues>) {
    
    const childrenArray = React.Children.toArray(children)
    const [step, setStep] = useState(0)
    const currentChild = childrenArray[step]

    function isLastStep() {
        return step === childrenArray.length - 1
    }
    return(
        <Formik {...props} 
        onSubmit={            
            async (values, helpers) => {
                if(isLastStep()) {
                    await props.onSubmit(values, helpers)
                    console.log(values)
                    
                }else {
                    setStep((s) => s + 1)
                    console.log(values)
                }
                console.log("Submit Works")
            }
        }
        >
            <Form autoComplete="off">
                {currentChild}
                {step > 0 ? <button onClick={() => setStep((s) => s - 1)} 
                className="btn btn-primary"> Back </button> : null}
                <button type="submit" className="btn btn-primary">{isLastStep() ? 'Submit' : 'Next'}</button>
                {step}
            
            </Form>
        </Formik>
    )
    
}