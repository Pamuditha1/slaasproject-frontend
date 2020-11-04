import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ValidationError from '../../validationError'
import PropTypes from 'prop-types';

const validationSchema = Yup.object({
    nameWinitials: Yup.string().required('Required'),
    nameInFull : Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    middleName: Yup.string().required('Required'),
    lastName : Yup.string().required('Required'),
    nic : Yup.string().required('Required'),
    dob : Yup.string().required('Required'),
    resAddOne : Yup.string(),
    resAddTwo : Yup.string(),
    resAddThree : Yup.string(),
    resAddFour : Yup.string(),
    resAddFive : Yup.string(),

    email: Yup.string().email('Invalid Email').required('Required')     
     
})

function MemPersonalForm({formData, setFormData, nextStep}) {   
     
    return (
        <Formik className="container"
        initialValues={formData.personal}
        validationSchema= {validationSchema}
        onSubmit={values => {
            setFormData(values)
            nextStep()
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
                        
                    <Form>
                        <div className="form-group">
                            <label htmlFor="nameWinitials">Name with Initials</label> 
                            <Field className={ `${handleStyle('nameWinitials')}`} type="text" id="nameWinitials" name="nameWinitials"/>
                            <ErrorMessage name="nameWinitials" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nameInFull">Name in Full</label> 
                            <Field className={ `${handleStyle('nameInFull')}`} type="text" id="nameInFull" name="nameInFull"/>
                            <ErrorMessage name="nameInFull" component={ValidationError}/>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="firstName">First Name</label> 
                                <Field className={ `${handleStyle('firstName')}`} type="text" id="firstName" name="firstName"/>
                                <ErrorMessage name="firstName" component={ValidationError}/>
                            </div>
                            <div className="form-group col-6">
                            <label htmlFor="lastName">Last Name</label> 
                            <Field className={ `${handleStyle('lastName')}`} type="text" id="lastName" name="lastName"/>
                            <ErrorMessage name="lastName" component={ValidationError}/>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="nic">NIC</label> 
                                <Field className={ `${handleStyle('nic')}`} type="text" id="nic" name="nic"/>
                                <ErrorMessage name="nic" component={ValidationError}/>
                            </div>                        
                            <div className="form-group col-6">
                                <label htmlFor="dob">Date of Birth</label> 
                                <Field className={ `${handleStyle('dob')}`} type="text" id="dob" name="dob"/>
                                <ErrorMessage name="dob" component={ValidationError}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-2">
                                <label htmlFor="resAddOne">Line One</label> 
                                <Field className={ `${handleStyle('resAddOne')}`} type="text" id="resAddOne" name="resAddOne"/>
                                <ErrorMessage name="resAddOne" component={ValidationError}/>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="resAddTwo">Line Two</label> 
                                <Field className={ `${handleStyle('resAddTwo')}`} type="text" id="resAddTwo" name="resAddTwo"/>
                                <ErrorMessage name="resAddTwo" component={ValidationError}/>
                            </div>                         
                            <div className="form-group col-6">
                                <label htmlFor="resAddThree">Line Three</label> 
                                <Field className={ `${handleStyle('resAddThree')}`} type="text" id="resAddThree" name="resAddThree"/>
                                <ErrorMessage name="resAddThree" component={ValidationError}/>
                            </div>                         
                            <div className="form-group col-6">
                                <label htmlFor="resAddFour">Line Four</label> 
                                <Field className={ `${handleStyle('resAddFour')}`} type="text" id="resAddFour" name="resAddFour"/>
                                <ErrorMessage name="resAddFour" component={ValidationError}/>
                            </div>                         
                            <div className="form-group col-6">
                                <label htmlFor="resAddFive">Line Five</label> 
                                <Field className={ `${handleStyle('resAddFive')}`} type="text" id="resAddFive" name="resAddFive"/>
                                <ErrorMessage name="resAddFive" component={ValidationError}/>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="mobileNo">Mobile No</label> 
                                <Field className={ `${handleStyle('mobileNo')}`} type="text" id="mobileNo" name="mobileNo"/>
                                <ErrorMessage name="mobileNo" component={ValidationError}/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="landNo">Fixed No</label> 
                                <Field className={ `${handleStyle('landNo')}`} type="text" id="landNo" name="landNo"/>
                                <ErrorMessage name="landNo" component={ValidationError}/>
                            </div>
                        </div>                      
                        <div className="form-group">
                            <label htmlFor="email">Email</label> 
                            <Field className={ `${handleStyle('email')}`} type="text" id="email" name="email"/>
                            <ErrorMessage name="email" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fax">Fax</label> 
                            <Field className={ `${handleStyle('fax')}`} type="text" id="fax" name="fax"/>
                            <ErrorMessage name="fax" component={ValidationError}/>
                        </div>                   
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default MemPersonalForm

MemPersonalForm.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
  };
