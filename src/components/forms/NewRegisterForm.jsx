import React, { useState } from 'react'
import { NewConfirm } from './NewConfirm'
import ValidationError from '../../validationError'
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import DateView from 'react-datepicker'
import {registerMember} from '../../services/registerMemberService'

function NewRegisterForm () {

    const genderOptions = [{key: "Male", value: "Male"},{key: "Female", value: "Female"}]
    const titleOptions = ["Rev.","Prof.","Dr.","Mr.","Mrs.","Miss."]
    const addressOptions = ["Residence", "Permanent", "Official"]
    const membershipGrades = ["Life Member","Annual Member","Associate Member","Corporate Member","Student Member"]
    const sections = [{key: "Section A  -  Medical, Dental and Veterinary Sciences", value: "A"},
                    {key: "Section B  - Agricultural Sciences and Forestry", value: "B"},
                    {key: "Section C  -  Engineering, Architecture and Surveying", value: "C"},
                    {key: "Section D  -  Life & Earth Sciences (Botany, Zoology, Fisheries, Geology and Mineralogy)", value: "D"},
                    {key: "Section E1 -  Physical Sciences (Physics, Mathematics, Statistics)", value: "E1"},
                    {key: "Section E2 -  Chemical Sciences (Chemistry, Bio-Chemistry, Agricultural Chemistry, Chemical Technology, Food Chemistry and Polymer Chemistry)", value: "E2"},
                    {key: "Section E3 -  Computer Science", value: "E3"},
                    {key: "Section F  -  Social Sciences (Anthropology, Archaeology, Demography, Education, Economics, Geography, Psychology and Sociology)", value: "F"},
    ]    
    const paymentMethods = ["Cash","Bank Draft","Cheque","Online"]
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [isConfirmed, setIsConfirmed] = useState(false)
    
    var datetime = new Date();

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

    const [memberData, setMemberData] = useState({
        title: "",
        nameWinitials: "" ,
        nameInFull: "",
        firstName: "",
        lastName: "",
        gender: "",
        nic : "",
        dob : "",
        resAddOne : "", resAddTwo : "", resAddThree : "", resAddFour : "", resAddFive : "",
        perAddrsAvai : false,
        perAddOne : "", perAddTwo : "", perAddThree : "", perAddFour : "", perAddFive : "",
        mobileNo : "",
        landNo : "",
        email: "", 
        designation: "" ,
        division: "",
        placeWork: "",    
        offAddrslineOne : "",
        offAddrslineTwo : "",
        offAddrslineThree : "",
        offAddrslineFour : "",
        offAddrslineFive : " ",   
        offMobile : "",
        offLandNo : "",
        offEmail: "", 
        offFax: "",
        profession: "",
        fieldOfSpecial: [''],
        academic: [{
            year: '', degree: '', disciplines: '', uni: ''
        }],
        gradeOfMem : "",
        section: "",
        memBefore: false,
        memFrom : "", memTo: "",
        sendingAddrs: "",
        status: "member",
        enrollDate: datetime,
        proposer$seconder: {
            proposer: {
                name: "", memNo: "", address: "", contactNo: ""
            },
            seconder: {
                name: "", memNo: "", address: "", contactNo: ""
            }
        }
    
    })

    const nextStep = () => setStep(prev => prev + 1)
    const prevStep = () => setStep(prev => prev - 1)
    const submit = async () => {
        setLoading(true)
        const member = memberData
        console.log(member)
        await registerMember(member)
        setLoading(false)
    }
    const reload = () => {
        window.location.reload(false);
    }

    switch(step) {

    case 1 : return(
        <>
        <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1">Personal Details</h6>
        <Formik className="container mt-5 mb-5"
        initialValues={memberData}
        validationSchema= {validationSchema}
        onSubmit={values => {
            
            setMemberData(values)     
            // setIsConfirmed(true)
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
                    
                        
                    <Form style={{marginBottom : 50}}>
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


                        <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1">Official Details</h6>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="designation">Designation </label> 
                                <Field className={ `${handleStyle('designation')}`} type="text" id="designation" name="designation"/>
                                <ErrorMessage name="designation" component={ValidationError}/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="division">Division / Department</label> 
                                <Field className={ `${handleStyle('division')}`} type="text" id="division" name="division"/>
                                <ErrorMessage name="division" component={ValidationError}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="placeWork">Place of Work</label> 
                            <Field className={ `${handleStyle('placeWork')}`} type="text" id="placeWork" name="placeWork"/>
                            <ErrorMessage name="placeWork" component={ValidationError}/>
                        </div>
                        <label>Office Address</label> 
                        <div className="row">
                            <div className="form-group col-2">                         
                                <label htmlFor="offAddrslineOne">No</label> 
                                <Field className={ `${handleStyle('offAddrslineOne')}`} type="text" id="offAddrslineOne" name="offAddrslineOne"/>
                                <ErrorMessage name="offAddrslineOne" component={ValidationError}/>
                            </div>
                            <div className="form-group col-10">
                                <label htmlFor="offAddrslineTwo">Street Line 1</label> 
                                <Field className={ `${handleStyle('offAddrslineTwo')}`} type="text" id="offAddrslineTwo" name="offAddrslineTwo"/>
                                <ErrorMessage name="offAddrslineTwo" component={ValidationError}/>
                            </div>                         
                            <div className="form-group col-6">
                                <label htmlFor="offAddrslineThree">Street Line 2</label> 
                                <Field className={ `${handleStyle('offAddrslineThree')}`} type="text" id="offAddrslineThree" name="offAddrslineThree"/>
                                <ErrorMessage name="offAddrslineThree" component={ValidationError}/>
                            </div>                         
                            <div className="form-group col-3">
                                <label htmlFor="offAddrslineFour">City</label> 
                                <Field className={ `${handleStyle('offAddrslineFour')}`} type="text" id="offAddrslineFour" name="offAddrslineFour"/>
                                <ErrorMessage name="offAddrslineFour" component={ValidationError}/>
                            </div>                         
                            <div className="form-group col-3">
                                <label htmlFor="offAddrslineFive">Town</label> 
                                <Field className={ `${handleStyle('offAddrslineFive')}`} type="text" id="offAddrslineFive" name="offAddrslineFive"/>
                                <ErrorMessage name="offAddrslineFive" component={ValidationError}/>
                            </div>

                        </div>
                        
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="offMobile">Office Mobile No</label> 
                                <Field className={ `${handleStyle('offMobile')}`} type="text" id="offMobile" name="offMobile"/>
                                <ErrorMessage name="offMobile" component={ValidationError}/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="offLandNo">Office Fixed No</label> 
                                <Field className={ `${handleStyle('offLandNo')}`} type="text" id="offLandNo" name="offLandNo"/>
                                <ErrorMessage name="offLandNo" component={ValidationError}/>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="offEmail">Office Email</label> 
                                <Field className={ `${handleStyle('offEmail')}`} type="text" id="offEmail" name="offEmail"/>
                                <ErrorMessage name="offEmail" component={ValidationError}/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="offFax">Office Fax</label> 
                                <Field className={ `${handleStyle('offFax')}`} type="text" id="offFax" name="offFax"/>
                                <ErrorMessage name="offFax" component={ValidationError}/>
                            </div>
                        </div>


                        <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1">Professional Details</h6>
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

                        
                        <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1">Membership Details</h6>
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
                                                    <option key={option.value} value={option.value} style={{textAlign: "center"}}>
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

                        
                    <button type="submit" className={isConfirmed ? "btn btn-success float-right m-2 is-valid" :"btn btn-primary float-right m-2"}>
                        { isConfirmed ? "Confirmed" : "Confirm" }
                    </button>

                    </Form> 
                    )
                }
            }

        </Formik>
        </>
    )

    case 2 : return(
        <div className="container">
                <NewConfirm memberData={memberData} nextStep={nextStep} prevStep={prevStep} submit={submit} loading={loading}/>
        </div>
    )

    }
}

export default NewRegisterForm