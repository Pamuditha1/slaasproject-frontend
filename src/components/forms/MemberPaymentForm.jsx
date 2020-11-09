import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import ValidationError from '../../validationError'
import DateView from 'react-datepicker'

const validationSchema = Yup.object({
    
     
})
// const submitForm = (data) => {
//         console.log(data)
// }

function MemberPaymentForm({paymentMethods,formData, setFormData, nextStep, prevStep}) {

    const [direction, setDirection] = useState('back');
    

    return (
        <Formik className="container"
        initialValues={formData.payment}
        validationSchema= {validationSchema}
        onSubmit={values => {
            setFormData(values);
            // submitForm(formData)
            direction === 'back' ? prevStep() : nextStep();
            console.log(values)
            console.log(formData)
            
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
                            <div className="form-group col-6">
                                        <label htmlFor="paymentDoneDate" className="form-check">Payment Done Date</label> 
                                        <Field className={ `${handleStyle('paymentDoneDate')}`} name="paymentDoneDate" >
                                        {
                                                ({form,field}) => {
                                                    const {setFieldValue} = form
                                                    const {value} = field
                                                    return <DateView className="form-control" id="paymentDoneDate" {...field} selected={value}
                                                    dateFormat="dd/MM/yyyy" maxDate={new Date()} showYearDropdown scrollableMonthYearDropdown
                                                    onChange={val => setFieldValue("paymentDoneDate", val)}/>
                                                }
                                        }
                                        </Field>
                                        <ErrorMessage name="paymentDoneDate" component={ValidationError}/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="paymentMethod">Payment Method</label> 
                                <div>
                                        <Field className="form-control col-10" as="select" id="paymentMethod" name="paymentMethod"> 
                                            {
                                                paymentMethods.map(option => {
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
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="amount">Amount</label> 
                                <Field className={ `${handleStyle('amount')}`} type="number" id="amount" name="amount"/>
                                <ErrorMessage name="amount" component={ValidationError}/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="bank">Bank</label> 
                                <Field className={ `${handleStyle('bank')}`} type="text" id="bank" name="bank"/>
                                <ErrorMessage name="bank" component={ValidationError}/>
                            </div>
                        </div>
                        <div className="row">
                             <div className="form-group col-6">
                                <label htmlFor="branch">Branch</label> 
                                <Field className={ `${handleStyle('branch')}`} type="text" id="branch" name="branch"/>
                                <ErrorMessage name="branch" component={ValidationError}/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="accountNo">Account No</label> 
                                <Field className={ `${handleStyle('accountNo')}`} type="text" id="accountNo" name="accountNo"/>
                                <ErrorMessage name="accountNo" component={ValidationError}/>
                            </div>
                        </div>
                        <button type="submit" onClick={() => setDirection('forward')} className="btn btn-primary float-right m-1">Next</button>
                        {/* <button type="submit" className="btn btn-primary float-right m-1">Next</button> */}
                        <button type="submit" onClick={() => setDirection('back')} className="btn btn-primary float-right m-1">Back</button>
                    </Form> 
                    )
                }
            }
   
        </Formik>
    )
}

export default MemberPaymentForm
MemberPaymentForm.propTypes = {
    paymentMethods : PropTypes.array.isRequired,
    formData: PropTypes.object,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
  };
