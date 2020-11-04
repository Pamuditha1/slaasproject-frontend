import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import ValidationError from '../../validationError'

const initialValues = {
    professional : {
        profession: "",
        fieldOfSpecial: "",
        academic: [{
            year: '', degree: '', disciplines: '', uni: ''
        }]
    }    
}
const onSubmit = values => {
    console.log("Form Data", values)
}
const validationSchema = Yup.object({
    profession: Yup.string().required('Required'),
    fieldOfSpecial: Yup.string().required('Required'),     
     
})

function MemberProfessionalForm() {   
     
    return (
        <Formik className="container"
            initialValues={initialValues.professional}
            validationSchema= {validationSchema}
            onSubmit={onSubmit} 
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
                            <label htmlFor="fieldOfSpecial">Specialization Field</label> 
                            <Field className={ `${handleStyle('fieldOfSpecial')}`} type="text" id="fieldOfSpecial" name="fieldOfSpecial"/>
                            <ErrorMessage name="fieldOfSpecial" component={ValidationError}/>
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
                                                        <Field className="col-8 form-control" name={`professional.academic[${index}].year`} />
                                                    </div>
                                                    <div className="row form-group">
                                                        <label className="col-4">Degree/Diploma</label>
                                                        <Field className="col-8 form-control" name={`professional.academic[${index}].degree`} />
                                                    </div>
                                                    <div className="row form-group">
                                                        <label className="col-4">Disciplines</label>
                                                        <Field className="col-8 form-control" name={`professional.academic[${index}].disciplines`} />
                                                    </div>
                                                    <div className="row form-group">
                                                        <label className="col-4">University/Institution</label>
                                                        <Field className="col-5 form-control" name={`professional.academic[${index}].uni`} />
                                                        <div className="col-3">                                                        
                                                        <button type="button" className="btn btn-success m-1" onClick={() => push('')}> + </button>
                                                        {index>0 && 
                                                        <button type="button"className="btn btn-warning m-1" onClick={() => remove(index)}> - </button>
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default MemberProfessionalForm
