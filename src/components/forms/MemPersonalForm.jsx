import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ValidationError from '../../validationError'
import DateView from 'react-datepicker'
import PropTypes from 'prop-types';

const validationSchema = Yup.object({
    nameWinitials: Yup.string(),
    nameInFull : Yup.string(),
    firstName: Yup.string(),
    middleName: Yup.string(),
    lastName : Yup.string(),
    nic : Yup.string(),
    dob : Yup.string(),
    resAddOne : Yup.string(),
    resAddTwo : Yup.string(),
    resAddThree : Yup.string(),
    resAddFour : Yup.string(),
    resAddFive : Yup.string(),
    email: Yup.string().email('Invalid Email')
     
})

function MemPersonalForm({titleOptions, genderOptions, personalData, setPersonalData, nextStep}) {   
     
    return (
        <Formik className="container mt-5 mb-5"
        initialValues={personalData}
        validationSchema= {validationSchema}
        onSubmit={values => {
            
            setPersonalData(values)            
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
                        <div className="row">                            
                            <div className="form-group col-12">
                                <label htmlFor="nameWinitials" className="form-group"> Name with Initials</label>
                                <div className="row col-12">
                                    <Field className="form-control col-2" as="select" id="title" name="title"> 
                                        {
                                            titleOptions.map(option => {
                                                return(
                                                    <option key={option} value={option} style={{textAlign: "center"}}>
                                                        {option}
                                                    </option>
                                                )
                                            })
                                        }
                                    </Field>
                                    <Field className={ `${handleStyle('nameWinitials')} col-10`} type="text" id="nameWinitials" name="nameWinitials"/> 
                                </div>                                                              
                                <ErrorMessage name="nameWinitials" component={ValidationError}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="nameInFull">Name in Full</label> 
                                <Field className={ `${handleStyle('nameInFull')}`} type="text" id="nameInFull" name="nameInFull"/>
                                <ErrorMessage name="nameInFull" component={ValidationError}/>
                            </div>
                        </div>                        
                        <div className="row">
                            <label className="form-group col-4">Name in Common Use</label>
                            <div className="form-group col-4">
                                <label htmlFor="firstName">First Name</label> 
                                <Field className={ `${handleStyle('firstName')}`} type="text" id="firstName" name="firstName"/>
                                <ErrorMessage name="firstName" component={ValidationError}/>
                            </div>
                            <div className="form-group col-4">
                            <label htmlFor="lastName">Last Name</label> 
                            <Field className={ `${handleStyle('lastName')}`} type="text" id="lastName" name="lastName"/>
                            <ErrorMessage name="lastName" component={ValidationError}/>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="form-group col-4">
                                    <label htmlFor="gender" className="form-check-inline">Gender</label> 
                                    <Field className={ `${handleStyle('gender')} col-4`} id="gender" name="gender" options={genderOptions}> 
                                        {
                                            ({field}) => {
                                                return genderOptions.map( option => {
                                                    return(
                                                        <React.Fragment key={option.key}>
                                                            <input className="form-check-inline" type="radio" id={option.id} {...field} 
                                                            value={option.value} checked={field.value === option.value}/>
                                                            <label htmlFor={option.value} className="mr-3">{option.key}</label>
                                                        </React.Fragment>
                                                    )
                                                }
                                                    
                                                )
                                                
                                            }
                                        }
                                    </Field>
                                    <ErrorMessage name="gender" component={ValidationError}/>
                                </div> 
                                <div className="form-group col-4">
                                    <label htmlFor="dob" className="form-check">Date of Birth</label> 
                                    <Field className={ `${handleStyle('dob')}`} name="dob" >
                                    {
                                            ({form,field}) => {
                                                const {setFieldValue} = form
                                                const {value} = field
                                                return <DateView className="form-control" id="dob" selected={value}
                                                dateFormat="dd/MM/yyyy" maxDate={new Date()} showYearDropdown scrollableMonthYearDropdown
                                                onChange={val => setFieldValue("dob", val)}/>
                                            }
                                    }
                                    </Field>
                                    <ErrorMessage name="dob" component={ValidationError}/>
                                </div>
                                <div className="form-group col-4">
                                    <label htmlFor="nic">NIC</label> 
                                    <Field className={ `${handleStyle('nic')}`} type="text" id="nic" name="nic"/>
                                    <ErrorMessage name="nic" component={ValidationError}/>
                                </div>
                        </div>                 
                        <div className="row">
                            <label className="col-12">Residence Address <hr></hr></label>
                                
                                <div className="form-group col-2">
                                    <label htmlFor="resAddOne"> No </label> 
                                    <Field className={ `${handleStyle('resAddOne')}`} type="text" id="resAddOne" name="resAddOne"/>
                                    <ErrorMessage name="resAddOne" component={ValidationError}/>
                                </div>
                                <div className="form-group col-10">
                                    <label htmlFor="resAddTwo">Street line 1</label> 
                                    <Field className={ `${handleStyle('resAddTwo')}`} type="text" id="resAddTwo" name="resAddTwo"/>
                                    <ErrorMessage name="resAddTwo" component={ValidationError}/>
                                </div>                         
                                <div className="form-group col-6">
                                    <label htmlFor="resAddThree">Street line 2</label> 
                                    <Field className={ `${handleStyle('resAddThree')}`} type="text" id="resAddThree" name="resAddThree"/>
                                    <ErrorMessage name="resAddThree" component={ValidationError}/>
                                </div>                         
                                <div className="form-group col-3">
                                    <label htmlFor="resAddFour">City</label> 
                                    <Field className={ `${handleStyle('resAddFour')}`} type="text" id="resAddFour" name="resAddFour"/>
                                    <ErrorMessage name="resAddFour" component={ValidationError}/>
                                </div>                         
                                <div className="form-group col-3">
                                    <label htmlFor="resAddFive">Town</label> 
                                    <Field className={ `${handleStyle('resAddFive')}`} type="text" id="resAddFive" name="resAddFive"/>
                                    <ErrorMessage name="resAddFive" component={ValidationError}/>
                                </div>
                        </div> 
                        <div className="form-group row">
                            <div className="form-check-inline">
                                <label className="form-check-label col-12" htmlFor="perAddrsAvai"> Permanent Address Available (different to above)</label> 
                                <Field className="form-check" type="checkbox" id="perAddrsAvai" name="perAddrsAvai"/>
                                
                            </div>
                        </div> 
                        {
                            formik.values.perAddrsAvai && 
                            <div className="row">
                                <label className="col-12">Permanent Address <hr></hr></label>
                                <div className="form-group col-2">
                                    <label htmlFor="perAddOne"> No </label> 
                                    <Field className={ `${handleStyle('perAddOne')}`} type="text" id="perAddOne" name="perAddOne"/>
                                    <ErrorMessage name="perAddOne" component={ValidationError}/>
                                </div>
                                <div className="form-group col-10">
                                    <label htmlFor="perAddTwo">Street line 1</label> 
                                    <Field className={ `${handleStyle('perAddTwo')}`} type="text" id="perAddTwo" name="perAddTwo"/>
                                    <ErrorMessage name="perAddTwo" component={ValidationError}/>
                                </div>                         
                                <div className="form-group col-6">
                                    <label htmlFor="perAddThree">Street line 2</label> 
                                    <Field className={ `${handleStyle('perAddThree')}`} type="text" id="perAddThree" name="perAddThree"/>
                                    <ErrorMessage name="perAddThree" component={ValidationError}/>
                                </div>                         
                                <div className="form-group col-3">
                                    <label htmlFor="perAddFour">City</label> 
                                    <Field className={ `${handleStyle('perAddFour')}`} type="text" id="perAddFour" name="perAddFour"/>
                                    <ErrorMessage name="perAddFour" component={ValidationError}/>
                                </div>                         
                                <div className="form-group col-3">
                                    <label htmlFor="perAddFive">Town</label> 
                                    <Field className={ `${handleStyle('perAddFive')}`} type="text" id="perAddFive" name="perAddFive"/>
                                    <ErrorMessage name="perAddFive" component={ValidationError}/>
                                </div>
                                
                            </div> 
                        }                     
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
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="email">Email</label> 
                                <Field className={ `${handleStyle('email')}`} type="text" id="email" name="email"/>
                                <ErrorMessage name="email" component={ValidationError}/>
                            </div>
                        </div>                  
                    <button type="submit" className="btn btn-primary float-right m-2">Continue</button>
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default MemPersonalForm

MemPersonalForm.propTypes = {
    titleOptions: PropTypes.array.isRequired,
    genderOptions: PropTypes.array.isRequired,
    personalData: PropTypes.object,
    setPersonalData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
  };
