import React from 'react'
import { Formik, Form, Field, ErrorMessage , FormikConfig, FormikValues } from 'formik'
import * as Yup from 'yup'
import ValidationError from '../../validationError'
import TestingForm from './TestingForm';
import TestingFormTwo from './TestingFormTwo';
import { Component } from 'react';

var today = new Date(),
date =  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

const initialValues = {
    reseivedDate: "" ,
    paidDate: "",
    paymentMethod: "",
    bank: "",
    branch: "",
    accountNo : "", 
    council: "", 
    memberFolioNo: "",
    enrollDate : date
}
const onSubmit = values => {
    console.log("Form Data", values)
}
const validationSchema = Yup.object({
    reseivedDate: Yup.string().required('Required'),
    paidDate: Yup.string().required('Required'),
    paymentMethod: Yup.string().required('Required'),
    bank: Yup.string().required('Required'),   
    branch: Yup.string().required('Required'),
    accountNo: Yup.string().required('Required'),
    council : Yup.string().required('Required'),
    memberFolioNo: Yup.string().required('Required'),   
    benrollDate: Yup.string().required('Required'),   
     
})

function OfficeForm() { 

     
    return (
        <Formik className="container"
            initialValues={initialValues}
            validationSchema= {validationSchema}
            onSubmit={onSubmit} 
        >
            {   formik => {
                   
                    const handleStyle = (n)  => {  
                        
                        if(formik.errors[n] && formik.touched[n]) return "form-control is-invalid"
                        else if (!formik.errors[n] && formik.touched[n]) return "form-control is-valid"
                        else return "form-control"                     
                                                                        
                    }
                    return( 
                        
                    <Form>
                        <div className="form-group">
                            <label htmlFor="reseivedDate">Received Date</label> 
                            <Field className={ `${handleStyle('reseivedDate')}`} type="text" id="reseivedDate" name="reseivedDate"/>
                            <ErrorMessage name="reseivedDate" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="paidDate">Payment Done Date</label> 
                            <Field className={ `${handleStyle('paidDate')}`} type="text" id="paidDate" name="paidDate"/>
                            <ErrorMessage name="paidDate" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="paymentMethod">Payment Method</label> 
                            <Field className={ `${handleStyle('paymentMethod')}`} type="text" id="paymentMethod" name="paymentMethod"/>
                            <ErrorMessage name="paymentMethod" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bank">Bank</label> 
                            <Field className={ `${handleStyle('bank')}`} type="text" id="bank" name="bank"/>
                            <ErrorMessage name="bank" component={ValidationError}/>
                        </div>                       
                        <div className="form-group">
                            <label htmlFor="branch">Branch</label> 
                            <Field className={ `${handleStyle('branch')}`} type="text" id="branch" name="branch"/>
                            <ErrorMessage name="branch" component={ValidationError}/>
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="accountNo">Account No</label> 
                            <Field className={ `${handleStyle('accountNo')}`} type="text" id="accountNo" name="accountNo"/>
                            <ErrorMessage name="accountNo" component={ValidationError}/>
                        </div>                         
                        <div className="form-group">
                            <label htmlFor="council">Council</label> 
                            <Field className={ `${handleStyle('council')}`} type="text" id="council" name="council"/>
                            <ErrorMessage name="council" component={ValidationError}/>
                        </div>                    
                        <div className="form-group">                         
                            <label htmlFor="memberFolioNo">Member Folio No</label> 
                            <Field className={ `${handleStyle('memberFolioNo')}`} type="text" id="memberFolioNo" name="memberFolioNo"/>
                            <ErrorMessage name="memberFolioNo" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="enrollDate">Enroll Date</label> 
                            <Field className={ `${handleStyle('enrollDate')}`} type="text" id="enrollDate" name="enrollDate"/>
                            <ErrorMessage name="enrollDate" component={ValidationError}/>
                        </div>                         
                                           
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default OfficeForm