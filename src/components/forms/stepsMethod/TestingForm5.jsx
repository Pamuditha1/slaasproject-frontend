import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types';
import * as Yup from 'yup'
import { Button} from 'reactstrap'
import ValidationError from '../../../validationError'

const validationSchema = Yup.object({

    accountNo: Yup.string()
    
})

export const TestingForm5 = ({
    formData,
    setFormData,
    nextStep,
    prevStep
  }) => {
    const [direction, setDirection] = useState('back');

    return (
        <div>
            <Formik className="container"
            initialValues={formData}
            validationSchema= {validationSchema}
            onSubmit={values => {
                console.log(direction)
                setFormData(values);
                direction === 'back' ? prevStep() : nextStep();
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
                            <label htmlFor="accountNo">Account No</label> 
                            <Field className={ `${handleStyle('accountNo')}`} type="text" id="accountNo" name="accountNo"/>
                            <ErrorMessage name="accountNo" component={ValidationError}/>
                        </div>                         
                      
                        <div>
                            <Button
                                type='submit'                                
                                onClick={() => setDirection('back')}
                            >Back</Button>
                            <Button
                                type='submit'
                                onClick={() => setDirection('forward')}
                            >Continue</Button>
                        </div>              
                        
                    </Form> 
                    )
                }
            }
   
        </Formik>
        </div>
    )
}

TestingForm5.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
  };
