import React from 'react'
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ValidationError from '../../../validationError'

    const validationSchema = Yup.object({

        bank: Yup.string().required('Required'),   
        branch: Yup.string().required('Required'),
        // accountNo: Yup.string().required('Required') 
        
    })

export const TestingForm4 =({formData, setFormData, nextStep}) => {   
    
    return (
        <Formik className="container"
            initialValues={formData}
            validationSchema= {validationSchema}
            onSubmit={values => {
                setFormData(values)
                nextStep()
            }}
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
                      
                        <button  type="submit" className="btn btn-primary float-right"> Continue </button>              
                        
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

TestingForm4.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
  };
