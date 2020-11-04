import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types';
import ValidationError from '../../validationError'


const validationSchema = Yup.object({
    designation: Yup.string().required('Required'),
    division: Yup.string().required('Required'),
    placeWork: Yup.string().required('Required'),   
    offEmail: Yup.string().email('Invalid offEmail').required('Required'),
    offAddrslineOne: Yup.string(),
    offAddrslineTwo : Yup.string(),
    offAddrslineThree : Yup.string(),
    offAddrslineFour : Yup.string(),
    offAddrslineFive : Yup.string(),   
     
})

function MemberOfficeForm({formData,
    setFormData,
    nextStep,
    prevStep}) {   

    const [direction, setDirection] = useState('back');
     
    return (
        <Formik className="container"
        initialValues={formData.official}
        validationSchema= {validationSchema}
        onSubmit={values => {
            console.log(direction)
            setFormData(values);
            direction === 'back' ? prevStep() : nextStep();
        }}
        >
            {   formik => {
                   
                    const handleStyle = (n)  => {  
                        if(n != "offAddrs") {
                            if(formik.errors[n] && formik.touched[n]) return "form-control is-invalid"
                            else if (!formik.errors[n] && formik.touched[n]) return "form-control is-valid"
                            else return "form-control"
                        } else {
                            if(formik.errors[n] && formik.touched[n]) return "form-control is-invalid"
                        else if (!formik.errors[n] && formik.touched[n]) return "form-control is-valid"
                        else return "form-control" 
                        }
                                       
                                                
                    }
                    return( 
                        
                    <Form>
                        <div className="form-group">
                            <label htmlFor="designation">Designation</label> 
                            <Field className={ `${handleStyle('designation')}`} type="text" id="designation" name="designation"/>
                            <ErrorMessage name="designation" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="division">Division / Department</label> 
                            <Field className={ `${handleStyle('division')}`} type="text" id="division" name="division"/>
                            <ErrorMessage name="division" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="placeWork">Place of Work</label> 
                            <Field className={ `${handleStyle('placeWork')}`} type="text" id="placeWork" name="placeWork"/>
                            <ErrorMessage name="placeWork" component={ValidationError}/>
                        </div>
                        <label>Office Address</label> 
                        <div className="form-group ml-5">                         
                            <label htmlFor="offAddrslineOne">Line One</label> 
                            <Field className={ `${handleStyle('offAddrslineOne')}`} type="text" id="offAddrslineOne" name="offAddrslineOne"/>
                            <ErrorMessage name="offAddrslineOne" component={ValidationError}/>
                        </div>
                        <div className="form-group ml-5">
                            <label htmlFor="offAddrslineTwo">Line Two</label> 
                            <Field className={ `${handleStyle('offAddrslineTwo')}`} type="text" id="offAddrslineTwo" name="offAddrslineTwo"/>
                            <ErrorMessage name="offAddrslineTwo" component={ValidationError}/>
                        </div>                         
                        <div className="form-group ml-5">
                            <label htmlFor="offAddrslineThree">Line Three</label> 
                            <Field className={ `${handleStyle('offAddrslineThree')}`} type="text" id="offAddrslineThree" name="offAddrslineThree"/>
                            <ErrorMessage name="offAddrslineThree" component={ValidationError}/>
                        </div>                         
                        <div className="form-group ml-5">
                            <label htmlFor="offAddrslineFour">Line Four</label> 
                            <Field className={ `${handleStyle('offAddrslineFour')}`} type="text" id="offAddrslineFour" name="offAddrslineFour"/>
                            <ErrorMessage name="offAddrslineFour" component={ValidationError}/>
                        </div>                         
                        <div className="form-group ml-5">
                            <label htmlFor="offAddrslineFive">Line Five</label> 
                            <Field className={ `${handleStyle('offAddrslineFive')}`} type="text" id="offAddrslineFive" name="offAddrslineFive"/>
                            <ErrorMessage name="offAddrslineFive" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="offMobile">Office Mobile No</label> 
                            <Field className={ `${handleStyle('offMobile')}`} type="text" id="offMobile" name="offMobile"/>
                            <ErrorMessage name="offMobile" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="offLandNo">Office Fixed No</label> 
                            <Field className={ `${handleStyle('offLandNo')}`} type="text" id="offLandNo" name="offLandNo"/>
                            <ErrorMessage name="offLandNo" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="offEmail">Office Email</label> 
                            <Field className={ `${handleStyle('offEmail')}`} type="text" id="offEmail" name="offEmail"/>
                            <ErrorMessage name="offEmail" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="offFax">Office Fax</label> 
                            <Field className={ `${handleStyle('offFax')}`} type="text" id="offFax" name="offFax"/>
                            <ErrorMessage name="offFax" component={ValidationError}/>
                        </div>                   
                        <button type="submit" onClick={() => setDirection('back')} className="btn btn-primary float-right">Back</button>
                        <button type="submit" onClick={() => setDirection('forward')} className="btn btn-primary float-right">Next</button>
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default MemberOfficeForm
MemberOfficeForm.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
  };