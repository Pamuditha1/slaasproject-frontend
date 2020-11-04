import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ValidationError from '../../validationError'

var today = new Date(),
date =  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

const initialValues = {

    bank: "",
    branch: "",
    accountNo : ""
}
const onSubmit = values => {
    console.log("Form Data 2", values)
}
const validationSchema = Yup.object({

    bank: Yup.string().required('Required'),   
    branch: Yup.string().required('Required'),
    accountNo: Yup.string().required('Required') 
     
})

function TestingFormTwo(props) {   
    
    return (
        <Formik className="container"
            initialValues={props.initialValues}
            validationSchema= {props.validationSchema}
            onSubmit={props.onSubmit} 
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
                      
                        <button className="btn btn-primary float-right"> Submit </button>              
                        
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default TestingFormTwo
