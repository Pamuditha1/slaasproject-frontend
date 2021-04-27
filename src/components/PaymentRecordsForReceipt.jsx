import React from 'react'

function PaymentRecordsForReceipt({paymentRecords}) {
    const backgroundStyle = {
        height: 'auto',
        width: '80%',
        margin: '10px 5% 10px 5%',
        padding: '30px',
        backgroundColor: 'yellow'
    }
    
    return (
        <div style={backgroundStyle} className="col-12">
            
            {paymentRecords.arrearsConti ? <p className="col-12" style={{color: 'red'}}>Arrears to pay - <strong>Rs. {paymentRecords.arrearsConti}</strong></p> 
            : <p className="col-12"><strong>No Record</strong></p>}            
            {paymentRecords.lastPaidForYear ? <p className="col-12">Last payment for membership year - <strong>{paymentRecords.lastPaidForYear}</strong></p> 
            : <p className="col-12"><strong>No Record</strong></p>}
            {paymentRecords.memPaidLast ? <p className="col-12">Last payment date- <strong>{paymentRecords.memPaidLast}</strong></p> 
            : <p className="col-12"><strong>No Record</strong></p>}

            
        </div>
    )
}

export default PaymentRecordsForReceipt
