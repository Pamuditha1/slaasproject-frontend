import React, { Component } from 'react';

class RecordPayment extends Component {

    recordPayment() {
        // await addPayment(this.state)
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <button type="submit" onClick={this.props.record} className="btn btn-primary float-right m-1">Record the Payment</button>
            </div>
        );
    }
}

export default RecordPayment;