import React, { Component } from 'react';
import {addPayment} from '../services/addPaymentService'

class RecordPayment extends Component {

    recordPayment = async () => {
        await addPayment({
            paymentData : this.props.payment,
            previousRecords: this.props.paymentRecords
        })
        this.props.changePaymentRecorded()
        console.log(this.props)
    }

    render() {
        return (
            <div style={{marginRight: "20%"}}>
                <button type="submit" onClick={this.recordPayment} className="btn btn-primary float-right m-1">Record the Payment</button>
            </div>
        );
    }
}

export default RecordPayment;