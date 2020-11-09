import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ValidationError from '../../validationError'
import { useHistory } from "react-router-dom";



function MemberLogin(props) {
    const history = useHistory()

    const initialValues = {
        email: "", 
        password: "", 
    }
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().required('Required'),   
    })

    const onSubmit = (values,props) => {
        console.log("Form Data", values)
        // props.history.replace('/user/dashboard')
        history.replace('/user/dashboard');
    }

    return (
        <Formik className="container"
        initialValues={initialValues}
        validationSchema= {validationSchema}
        onSubmit={onSubmit} >
            {formik => {
                const handleStyle = (n)  => {                       
                    if(formik.errors[n] && formik.touched[n]) return "form-control is-invalid"
                    else if (!formik.errors[n] && formik.touched[n]) return "form-control is-valid"
                    else return "form-control"                     
                } 
                return(
                    <Form>
                        <div className="form-group">                         
                            <label htmlFor="email">Member Email</label> 
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
                
            }}



        </Formik>
    )
}

export default MemberLogin
