import React, { useState, useEffect } from 'react'
import SendMailButtons from './SendMailButtons'
import SelectedToEmailBadges from './SelectedToEmailBadges';
import validation from './validationObjects/emailFormValidationSchema'
import {sendMails} from '../services/sendEmailsService'
import Loader from 'react-loader-spinner'

function SendMails() {

    const sections = ["Section A", "Section B ", "Section C" ,"Section D" ,"Section E1" ,"Section E2" ,"Section E3" ,"Section F"];
    const membershipGrades = ["Life Member","Annual Member","Associate Member","Corporate Member","Student Member"]
    const [selectedTo, setselectedTo] = useState([])
    const [extraTo, setextraTo] = useState('')
    const [emailerror, setemailerror] = useState('')
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    const [loading, setloading] = useState(false)

// console.log(regex.test(str));

    const [emailForm, setemailForm] = useState({
        from: '',
        subject: '',
        body: ''
    })

    const setselected = (s) => {
        setselectedTo([...selectedTo, s])
    }
    const removeselected = (s) => {

        let current = selectedTo        
        let removed = current.filter((c) => {
            if(c !== s) return true
        })
        setselectedTo(removed)
    }

    const onChange = (e) => {
        setemailForm({
            ...emailForm,
            [e.target.name] : e.target.value
        })
        console.log(emailForm)
    }
    const onChangeTo= (e) => {
        setextraTo(e.target.value)        
    }
    const ontoAdd= (e) => {
        if(emailRegex.test(extraTo)) {
            setselectedTo([...selectedTo, extraTo])
            setextraTo('')
            setemailerror('')
        }
        else {
            setemailerror('Invalid Email Address') 
        }
    }
    const onSubmit = async () => {
        setloading(true)
        await sendMails(selectedTo)
        setloading(false)
    }
    

    return (
        
        <div>
            {
                loading ? 
                <>
                <Loader style={{marginLeft : "35%"}}
                    type="ThreeDots"
                    color="#00BFFF"
                    height={300}
                    width={300}
                /> 
                <h3 style={{textAlign: 'center'}}>Sending Emails ...</h3>
                </>
                :
            <form className="container" autoComplete="off">
            <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1 mb-5">Send Emails</h6>
                
                <div className="row">
                            <div className="row ml-3 mb-3">
                                <div className="col-3"><SendMailButtons array={sections} setselected={setselected} title="Sections"/></div>
                                <div className="col-3 ml-3"><SendMailButtons array={membershipGrades} setselected={setselected} title="Membership Grades"/></div>                                
                            </div>
                                            
                            <div className="form-group col-12">
                                <div>
                                    <label htmlFor="to" className="col-1">To :</label> 
                                    <div className="col-11 mb-1">
                                        <SelectedToEmailBadges selectedTo={selectedTo} removeselected={removeselected}/>
                                    </div>
                                    <p className="text-danger ml-3">{emailerror}</p>
                                </div>   
                                <div className="row ml-3">
                                    <input value={extraTo} onChange={onChangeTo} minLength="1" className="form-control col-10" type="text" id="to" name="to" />
                                    <button type="button" className="btn btn-success ml-2 col-1" onClick={ontoAdd}> + </button>
                                </div>                                                           
                                
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="from" className="col-5">From : </label> 
                                <input value={emailForm.from} onChange={onChange} className="form-control col-11 ml-3"  type="text" id="from" name="from" />
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="subject" className="col-5">Subject : </label> 
                                <input value={emailForm.subject} onChange={onChange} className="form-control col-11 ml-3"  type="text" id="subject" name="subject" />
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="body" className="col-5">Body : </label> 
                                <textarea value={emailForm.body} onChange={onChange} className="form-control col-11 ml-3" type="textarea" rows="8" id="body" name="body"/>
                            </div>
                            {/* <button type="submit" className="btn btn-primary float-right m-1">Submit</button> */}
                            {/* <div className="form-group col-6">
                                <label htmlFor="material" className="col-5">Attachment: </label> 
                                <input className="form-control col-11 ml-3" type="text" id="material" name="material"/>
                            </div> */}
                                
                            {/* <div className="form-group col-6">
                                <label htmlFor="size" className="col-5">Size</label> 
                                <select onChange={onchangeSelect} value={productData.size} id="size" name="size" className="form-control col-11 ml-3" required>
                                    {
                                        sizes.map(option => {
                                            return(
                                                <option key={option} value={option} style={{textAlign: "center"}}>
                                                    {option}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>                     */}
                        
                </div>
                
                    {/* {savedSize && <p className="">* Product Size {savedSize} Saved</p> }
                    <button onClick={submit} type="submit" className="btn btn-primary float-right m-1 col-12">
                        {productSaved ?  `Product Saved`: 'Save Product'}</button>
                    <div>
                        {(!imageSaved && productSaved ) &&
                        <>
                            <h6 style={{backgroundColor: 'red'}} className="p-2 rounded"> Image hasn't been saved yet</h6>
                            <button onClick={submitImage} className="btn btn-success float-right m-1 col-12" type="submit">
                                Save Image
                            </button>
                        </>
                        }
                    </div> */}                
                
                <button type="submit" onClick={onSubmit} className="btn btn-primary float-right m-1">Send Mails</button>
                {/* <button type="submit" onClick={() => setStep(1)} className="btn btn-primary float-right m-1">Back</button> */}
            </form>
            }
        </div>
    )
}

export default SendMails
