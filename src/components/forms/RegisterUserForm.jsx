import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ValidationError from '../../validationError'

const initialValues = {
    userName: "" ,
    officeID: "",
    nic: "",
    email: "", 
    password: "", 
    accountType: "",
    mobileNo : ""
}
const onSubmit = values => {
    console.log("Form Data", values)
}
const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    nic: Yup.string().required('Required'),
    officeID: Yup.string().required('Required'),
    password: Yup.string().required('Required'),   
    accountType: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    mobileNo : Yup.string().required('Required'),   
     
})

function RegisterUserForm() {   
     
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
                            <label htmlFor="userName">User Name</label> 
                            <Field className={ `${handleStyle('userName')}`} type="text" id="userName" name="userName"/>
                            <ErrorMessage name="userName" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nic">NIC</label> 
                            <Field className={ `${handleStyle('nic')}`} type="text" id="nic" name="nic"/>
                            <ErrorMessage name="nic" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="officeID">Office ID</label> 
                            <Field className={ `${handleStyle('officeID')}`} type="text" id="officeID" name="officeID"/>
                            <ErrorMessage name="officeID" component={ValidationError}/>
                        </div>                       
                        <div className="form-group">
                            <label htmlFor="accountType">Account Type</label> 
                            <Field className={ `${handleStyle('accountType')}`} type="text" id="accountType" name="accountType"/>
                            <ErrorMessage name="accountType" component={ValidationError}/>
                        </div>                         
                        <div className="form-group">
                            <label htmlFor="mobileNo">Mobile No</label> 
                            <Field className={ `${handleStyle('mobileNo')}`} type="text" id="mobileNo" name="mobileNo"/>
                            <ErrorMessage name="mobileNo" component={ValidationError}/>
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="email">Email</label> 
                            <Field className={ `${handleStyle('email')}`} type="text" id="email" name="email"/>
                            <ErrorMessage name="email" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label> 
                            <Field className={ `${handleStyle('password')}`} type="text" id="password" name="password"/>
                            <ErrorMessage name="password" component={ValidationError}/>
                        </div>                         
                                           
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default RegisterUserForm
