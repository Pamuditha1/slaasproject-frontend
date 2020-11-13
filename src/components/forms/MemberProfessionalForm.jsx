import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types';
import ValidationError from '../../validationError'

const validationSchema = Yup.object({
    profession: Yup.string(),
    fieldOfSpecial: Yup.string(),    
     
})

function MemberProfessionalForm({professionalData, setProfessionalData, nextStep, prevStep}) {   
    const [direction, setDirection] = useState('back');
    return (
        <Formik className="container"
        initialValues={professionalData}
        validationSchema= {validationSchema}
        onSubmit={values => {
            setProfessionalData(values)
            direction === 'back' ? prevStep() : nextStep();
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
                            <label htmlFor="profession">Profession</label> 
                            <Field className={ `${handleStyle('profession')}`} type="text" id="profession" name="profession"/>
                            <ErrorMessage name="profession" component={ValidationError}/>
                        </div>
                        <div className="form-group">
                            <label>Fields of Specialization</label> 
                            <FieldArray name="fieldOfSpecial">
                                {
                                    (fieldArrayProps) => {
                                        const {push, remove ,form} = fieldArrayProps
                                        const {values} = form 
                                        const {fieldOfSpecial} = values
                                        
                                        return (
                                        <div>
                                            {fieldOfSpecial.map((academic, index) => (
                                                <div key={index} className="ml-5">
                                                    <div className="row form-group">
                                                        <Field className="col-5 form-control" name={`fieldOfSpecial[${index}]`} />
                                                        <div className="col-3">
                                                        {index>0 && 
                                                        <button type="button"className="btn btn-warning m-1" onClick={() => remove(index)}> - </button>
                                                        }
                                                        {index<=3 && 
                                                        <button type="button" className="btn btn-success m-1" onClick={() => push('')}> + </button>
                                                        }                                                                                                                
                                                        
                                                        </div>                                                     
                                                    </div>                                              
                                                </div>
                                            ))}
                                        </div>
                                        )
                                    }
                                }
                            </FieldArray>
                            {/* <Field className={ `${handleStyle('fieldOfSpecial')}`} type="text" id="fieldOfSpecial" name="fieldOfSpecial"/>
                            <ErrorMessage name="fieldOfSpecial" component={ValidationError}/> */}
                        </div>
                        <div className="form-group">
                            <label>Academic Qualifications</label>
                            <FieldArray name="academic">
                                {
                                    (fieldArrayProps) => {
                                        const {push, remove ,form} = fieldArrayProps
                                        const {values} = form 
                                        const {academic} = values
                                        
                                        return (
                                        <div>
                                            {academic.map((academic, index) => (
                                                <div key={index} className="ml-5">
                                                    <hr></hr>
                                                    <div className="row form-group">
                                                        <label className="col-4">Year</label>
                                                        <Field className="col-2 form-control" name={`academic[${index}].year`} />
                                                    </div>
                                                    <div className="row form-group">
                                                        <label className="col-4">Degree/Diploma</label>
                                                        <Field className="col-8 form-control" name={`academic[${index}].degree`} />
                                                    </div>
                                                    <div className="row form-group">
                                                        <label className="col-4">Disciplines</label>
                                                        <Field className="col-8 form-control" name={`academic[${index}].disciplines`} />
                                                    </div>
                                                    <div className="row form-group">
                                                        <label className="col-4">University/Institution</label>
                                                        <Field className="col-5 form-control" name={`academic[${index}].uni`} />
                                                        <div className="col-3">
                                                        {index>0 && 
                                                        <button type="button"className="btn btn-warning m-1" onClick={() => remove(index)}> - </button>
                                                        } 
                                                        {index<=3 &&                                                        
                                                        <button type="button" className="btn btn-success m-1" onClick={() => push('')}> + </button>
                                                        }
                                                        </div>                                                     
                                                    </div>                                              
                                                </div>
                                            ))}
                                        </div>
                                        )
                                    }
                                }
                            </FieldArray>

                        </div>                        
                        <button type="submit" onClick={() => setDirection('forward')} className="btn btn-primary float-right m-1">Continue</button>
                        <button type="submit" onClick={() => setDirection('back')} className="btn btn-primary float-right m-1">Back</button>
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default MemberProfessionalForm

MemberProfessionalForm.propTypes = {
    professionalData: PropTypes.object,
    setProfessionalData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
  };
