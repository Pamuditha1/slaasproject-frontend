import React, {useState, useEffect} from 'react'
import {getPaymentsHistory} from '../services/getPaymentHistory'
import {getPaymentsSummery} from '../services/getPaymentsSummery'
import {PaymentsHistoryTable} from '../projectTables/memberPaymentHistory/PaymentsHistoryTable'

function PaymentsHistory({memNo, memberID}) {
    // let memberID = "04054b20-b183-11eb-85e7-3d3c3aaeda52"
    // let memNo = '1005'

    const [paymentsSummery, setpaymentsSummery] = useState({})
    const [paymentsHistory, setpaymentsHistory] = useState([])

    useEffect(() => {
        async function fetchData() {
            setpaymentsSummery(await getPaymentsSummery(memNo))
            setpaymentsHistory(await getPaymentsHistory(memberID))
        }
        fetchData()   
    }, [memberID]);

    return (
        <div className="container">
            <div className="row" id="payment">
                <h5 className="col-12" style={{backgroundColor: "#e95045"}}>Payment Details</h5>
                {paymentsSummery.arrearsConti ? <p className="col-12" style={{color: 'red'}}>Arrears to pay - <strong>Rs. {paymentsSummery.arrearsConti}</strong></p> 
                : <p className="col-12"><strong>No Record</strong></p>}            
                {paymentsSummery.lastPaidForYear ? <p className="col-6">Last payment for membership year - <strong>{paymentsSummery.lastPaidForYear}</strong></p> 
                : <p className="col-12"><strong>No Record</strong></p>}
                {paymentsSummery.memPaidLast ? <p className="col-6">Last payment date- <strong>{paymentsSummery.memPaidLast}</strong></p> 
                : <p className="col-12"><strong>No Record</strong></p>}
            </div>
            <h6 className="col-6 mt-3 mb-3" style={{backgroundColor: "#e95045"}}>Payment Records</h6>
            <PaymentsHistoryTable records={paymentsHistory}/>
        </div>
    )
}

export default PaymentsHistory
