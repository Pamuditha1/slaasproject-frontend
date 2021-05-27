// import React, {useState} from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'
// import PropTypes from 'prop-types'
// import ValidationError from '../../validationError'
// import DateView from 'react-datepicker'
// import ReceiptGenerator from '../ReceiptGenerator'
// import axios from 'axios'

const validationSchema = Yup.object({
    
    
})

function MemberPaymentForm() {
    const [step, setStep] = useState(1)
    const paymentMethods = ["Cash","Bank Draft","Cheque","Online"]
    const [paymentData, setPaymentData] = useState({
        memberName: '',
        membershipNo: '',
        nic: '',

        admissionFee: '',
        yearOfPayment: '',
        yearlyFee : '',
        arrearsFee: '',
        idCardFee: '',

        paymentMethod: "",
        description: ""
    })
    const [paymentRecords, setPaymentRecords] = useState({
        memPaidLast: null,
        lastPaidForYear: null,
        arrearsConti: null
    })
    const [totalState, setTotalState] = useState(0)

    const [loading, setLoading] = useState(false)
    const [viewData, setViewData] = useState({
        memberName: '',
        membershipNo: '',
        nic: '',
    })

    const onChangeMemNo = async (e) => {
        // setLoading(true)
        console.log(e.target.value)
        setPaymentData({membershipNo: e.target.value})
        // const fetchData = () => {            
        //     axios(`http://localhost:3001/slaas/api/user/receipt/${e.target.value}`)
        //     .then(function (res) {
        //         console.log("Member Data Received", res.data)
        //         // const memberData = {
        //         //     memberName: res.data.nameWinitials,
        //         //     nic: res.data.nic,
        //         // }
        //         // const paymentRecords = {
        //         //     memPaidLast: res.data.memPaidLast,
        //         //     lastPaidForYear: res.data.memPaidLast,
        //         //     arrearsConti: res.data.memPaidLast
        //         // }
        //         // setPaymentData({
        //         //     memberName: res.data.nameWinitials,
        //         //     nic: res.data.nic,
        //         //     membershipNo: res.data.membershipNo
        //         // })
        //         // setPaymentRecords(paymentRecords)
        //         // setViewData({
        //         //     membershipNo: e.target.value,
        //         //     memberName: res.data.nameWinitials,
        //         //     nic: res.data.nic
        //         // })
        //     })    
            
        // };    
        // await fetchData();
        // console.log("Payment Records", paymentRecords)
        // console.log("Payment Data", paymentData)
        // console.log("Viewing Data", viewData)
        // setLoading(false)
    }

    
    switch(step) {
        case 1 : return (
            <>
            
            <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1">Payment Receipt</h6>
            <Formik className="container"
            initialValues={paymentData}
            validationSchema= {validationSchema}
            onSubmit={values => {
                setPaymentData(values); 
                setStep(2)           
                
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
                            
                        <Form className="container">
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="memberName">Member Name</label> 
                                    <Field className={ `${handleStyle('memberName')}`} type="text" id="memberName" name="memberName"/>
                                    <ErrorMessage name="memberName" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="membershipNo">Membership No</label> 
                                    <Field className={ `${handleStyle('membershipNo')}`} onChange={onChangeMemNo} type="text" id="membershipNo" name="membershipNo"/>
                                    <ErrorMessage name="membershipNo" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="nic">NIC</label> 
                                    <Field className={ `${handleStyle('nic')}`} type="text" id="nic" name="nic"/>
                                    <ErrorMessage name="nic" component={ValidationError}/>
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
                                
                                
                                <div className="form-group col-12">
                                    Payment Amount
                                            {/* <label htmlFor="paymentDoneDate" className="form-check">Date</label> 
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
                                            <ErrorMessage name="paymentDoneDate" component={ValidationError}/> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="yearOfPayment">Year of Payment</label> 
                                    <Field className={ `${handleStyle('yearOfPayment')}`} type="number" id="yearOfPayment" name="yearOfPayment"/>
                                    <ErrorMessage name="yearOfPayment" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="yearlyFee">Yearly Fee</label> 
                                    <Field className={ `${handleStyle('yearlyFee')}`} type="number" id="yearlyFee" name="yearlyFee"/>
                                    <ErrorMessage name="yearlyFee" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="admissionFee">Admission Fee</label> 
                                    <Field className={ `${handleStyle('admissionFee')}`} type="number" id="admissionFee" name="admissionFee"/>
                                    <ErrorMessage name="admissionFee" component={ValidationError}/>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="arrearsFee">Arrears Fee</label> 
                                    <Field className={ `${handleStyle('arrearsFee')}`} type="number" id="arrearsFee" name="arrearsFee"/>
                                    <ErrorMessage name="arrearsFee" component={ValidationError}/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="idCardFee">ID Card Fee</label> 
                                    <Field className={ `${handleStyle('idCardFee')}`} type="number" id="idCardFee" name="idCardFee"/>
                                    <ErrorMessage name="idCardFee" component={ValidationError}/>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="form-group col-6">
                                        <label htmlFor="totalWords">Sum of Rupees</label> 
                                        <Field className={ `${handleStyle('totalWords')}`} type="text" id="totalWords" name="totalWords"/>
                                        <ErrorMessage name="totalWords" component={ValidationError}/>
                                </div> */}
                                <div className="form-group col-12">
                                        <label htmlFor="description">Description</label> 
                                        <Field className={ `${handleStyle('description')}`} type="text" id="description" name="description"/>
                                        <ErrorMessage name="description" component={ValidationError}/>
                                </div>
                            </div>
                            
                            <button type="submit" className="btn btn-primary float-right m-1">Continue</button>
                            {/* <button type="submit" className="btn btn-primary float-right m-1">Next</button> */}
                            {/* <button type="submit" onClick={() => setStep(1)} className="btn btn-primary float-right m-1">Back</button> */}
                        </Form> 
                        )
                    }
                }
            </Formik>
            </>
        )
        case 2 : return (
            <ReceiptGenerator paymentData={paymentData} setStep={setStep}/>
        )
    }

    
}

export default MemberPaymentForm
// MemberPaymentForm.propTypes = {
//     paymentMethods : PropTypes.array.isRequired,
//     paymentData: PropTypes.object,
//     setPaymentData: PropTypes.func.isRequired,
//     nextStep: PropTypes.func.isRequired,
//     prevStep: PropTypes.func.isRequired
//   };
