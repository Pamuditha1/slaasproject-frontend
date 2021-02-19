import React from 'react';
import ReactToPrint from 'react-to-print';
import {Button} from 'reactstrap'

import ReceiptPrint from './ReceiptPrint';

class ReceiptGenerator extends React.PureComponent {
  render() {
    return (
        <div className='container'>
            <ReceiptPrint ref={el => (this.componentRef = el)} paymentData={this.props.paymentData} />
            <button type="submit" onClick={() => this.props.setStep(1)} className="btn btn-primary float-right m-1">Back</button>
            <ReactToPrint
                trigger={() => {
                    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                    // to the root node of the returned component as it will be overwritten.
                    return <Button color="success mt-1" href="#" style={{float : 'right'}}>Download</Button>;
                }}
                content={() => this.componentRef}
            />
        </div>
      
    );
  }
}
export default ReceiptGenerator