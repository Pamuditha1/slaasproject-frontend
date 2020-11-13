import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import ValidationError from '../../validationError'
import DateView from 'react-datepicker'

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

function MemberMembershipForm({addressOptions,membershipGrades,sections, membershipData, setMembershipData, nextStep, prevStep}) {
    const [direction, setDirection] = useState('back');

    return (
        <Formik className="container"
        initialValues={membershipData}
        validationSchema= {validationSchema}
        onSubmit={values => {
            setMembershipData(values);
            direction == 'back' ? prevStep() : nextStep();
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
                        
                        <div className="form-group row">
                            <label htmlFor="gradeOfMem" className="col-4">Grade of Membership</label> 
                            <div className="row col-5">
                                    <Field className="form-control col-8" as="select" id="gradeOfMem" name="gradeOfMem"> 
                                        {
                                            membershipGrades.map(option => {
                                                return(
                                                    <option key={option} value={option} style={{textAlign: "center"}}>
                                                        {option}
                                                    </option>
                                                )
                                            })
                                        }
                                    </Field>
                                    <ErrorMessage name="gradeOfMem" component={ValidationError}/> 
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="section" className="col-12">Section</label> 
                            <div className="col-12">
                                    <Field className="form-control col-12" as="select" id="section" name="section"> 
                                        {
                                            sections.map(option => {
                                                return(
                                                    <option key={option.value} value={option.key} style={{textAlign: "center"}}>
                                                        {option.key}
                                                    </option>
                                                )
                                            })
                                        }
                                    </Field>
                                    <ErrorMessage name="section" component={ValidationError}/> 
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="form-check-inline">
                                <label className="form-check-label col-12" htmlFor="memBefore">Have you ever been a member before</label> 
                                <Field className="form-check" type="checkbox" id="memBefore" name="memBefore"/>
                            </div>
                        </div> 
                        {   formik.values.memBefore && 
                            <div className="row">
                                <div className="form-group form-check-inline col-4">
                                    <label htmlFor="memFrom" className="form-check">From</label> 
                                    <Field className={ `${handleStyle('memFrom')}`} name="memFrom" >
                                    {
                                            ({form,field}) => {
                                                const {setFieldValue} = form
                                                const {value} = field
                                                return <DateView className="form-control form-check ml-3" id="memFrom" {...field} selected={value}
                                                dateFormat="dd/MM/yyyy" maxDate={new Date()} showYearDropdown scrollableMonthYearDropdown
                                                onChange={val => setFieldValue("memFrom", val)}/>
                                            }
                                    }
                                    </Field>                               
                                </div>                            
                                <div className="form-group form-check-inline col-6">
                                    <label htmlFor="memTo" className="form-check">To</label> 
                                        <Field className={ `${handleStyle('memTo')}`} name="memTo" >
                                        {
                                                ({form,field}) => {
                                                    const {setFieldValue} = form
                                                    const {value} = field
                                                    return <DateView className="form-control form-check ml-3" id="memTo" {...field} selected={value}
                                                    dateFormat="dd/MM/yyyy" maxDate={new Date()} showYearDropdown scrollableMonthYearDropdown
                                                    onChange={val => setFieldValue("memTo", val)}/>
                                                }
                                        }
                                        </Field>
                                        <ErrorMessage name="dob" component={ValidationError}/>
                                </div>  
                            </div>                          
                        }
                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="sendingAddrs" className="form-check-inline col-4">Address to which correspondences should be </label> 
                                    <Field className={ `${handleStyle('sendingAddrs')} col-2`} id="sendingAddrs" name="sendingAddrs" options={addressOptions}> 
                                        {
                                            ({field}) => {
                                                    return addressOptions.map( option => {
                                                        return(
                                                            <React.Fragment key={Option.key}>
                                                                <input key={Option.key} className="form-check-inline" type="radio" id={option.id} {...field} 
                                                                value={option} checked={field.value === option}/>
                                                                <label htmlFor={option} className="mr-3">{option}</label>
                                                            </React.Fragment>
                                                        )
                                                    }
                                                        
                                                    )
                                                    
                                            }
                                        }
                                    </Field>
                                    <ErrorMessage name="gender" component={ValidationError}/>
                            </div>

                        </div>
                        <div className="form-group">
                            <label>Proposer & Seconder </label>
                            <div className="row">
                                
                                <hr></hr>
                                <div className="col-6">
                                    <label className="ml-5">Proposer</label>
                                    <div className="row form-group">
                                        <label className="col-4">Name</label>
                                        <Field className="col-8 form-control" name="proposer$seconder.proposer.name" />
                                    </div>
                                    <div className="row form-group">
                                        <label className="col-4">Membership No</label>
                                        <Field className="col-8 form-control" name="proposer$seconder.proposer.memNo"/>
                                    </div>
                                    <div className="row form-group">
                                        <label className="col-4">Address</label>
                                        <Field className="col-8 form-control" name="proposer$seconder.proposer.address" />
                                    </div>
                                    <div className="row form-group">
                                        <label className="col-4">Contact No</label>
                                        <Field className="col-8 form-control" name="proposer$seconder.proposer.contactNo"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label className="ml-5">Seconder</label>
                                    <div className="row form-group">
                                        <label className="col-4">Name</label>
                                        <Field className="col-8 form-control" name="proposer$seconder.seconder.name" />
                                    </div>
                                    <div className="row form-group">
                                        <label className="col-4">Membership No</label>
                                        <Field className="col-8 form-control" name="proposer$seconder.seconder.memNo"/>
                                    </div>
                                    <div className="row form-group">
                                        <label className="col-4">Address</label>
                                        <Field className="col-8 form-control" name="proposer$seconder.seconder.address" />
                                    </div>
                                    <div className="row form-group">
                                        <label className="col-4">Contact No</label>
                                        <Field className="col-8 form-control" name="proposer$seconder.seconder.contactNo"/>
                                    </div>
                                </div>
                            </div>
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

export default MemberMembershipForm
MemberMembershipForm.propTypes = {
    addressOptions : PropTypes.array.isRequired,
    membershipGrades : PropTypes.array.isRequired,
    sections : PropTypes.array.isRequired,
    membershipData: PropTypes.object,
    setMembershipData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
  };
