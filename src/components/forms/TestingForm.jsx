import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ValidationError from '../../validationError'
import TestingFormTwo from './TestingFormTwo'


const initialValues = {
    reseivedDate: "" ,
    paidDate: "",
    paymentMethod: "",

}
const onSubmit = values => {
    console.log("Form Data 1", values)
    alert("Submitted")

}
const validationSchema = Yup.object({
    reseivedDate: Yup.string().required('Required'),
    paidDate: Yup.string().required('Required'),
    paymentMethod: Yup.string().required('Required'),
     
})

function TestingForm(props) {   
    
    return (
        <Formik className="container"
            initialValues={initialValues}
            validationSchema= {validationSchema}
            onSubmit={onSubmit} 
        >
            {   formik => {
                   console.log(formik)
                    const handleStyle = (n)  => {  
                        
                        if(formik.errors[n] && formik.touched[n]) return "form-control is-invalid"
                        else if (!formik.errors[n] && formik.touched[n]) return "form-control is-valid"
                        else return "form-control"                     
                                                                        
                    }
                    return( 
                        
                    <Form>
                        <div className="form-group">
                            <label htmlFor="reseivedDate">Received Date</label> 
                            <Field className={ `${handleStyle('reseivedDate')}`} type="text" id="reseivedDate" name="reseivedDate"
                            />
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
                        <button className="btn btn-primary float-right mr-3"> Submit </button>
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default TestingForm

