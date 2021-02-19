import React from 'react'
import logo from '../images/slaasLogo.png'

class ReceiptPrint extends React.PureComponent {

    render() {
      const today = new Date().toLocaleDateString()
      const time = new Date().toLocaleTimeString()
      const logoStyle = {
        height: '100px',
        width: "auto",
        marginRight : '20px'
      }
      const backgroundStyle = {
        height: '576px',
        width: '792px',
        border: '3px solid black',
        margin: '10px 5px 10px 5px',
        padding: '10px'
      }
      
      return (
        <div className='container' style={backgroundStyle}>
          <div className="row" id="payment">
            <h4 className="col-12 h-5 mt-3" style={{textAlign: 'center'}}>
              <img src={logo} style={logoStyle}/>
            Sri Lanka Association for the Advancement of Science</h4>
            <h5 className="col-12 h-5" style={{textAlign: 'center'}}>Membership Payment Receipt</h5>

            <div className="col-12" style={{marginTop: '5%'}}>
              <div className="row">
                <p className="col-9">Invoice No - </p>
                <p className="col-3">Date : <strong>{today}</strong></p>
                <div className='col-9'></div>
                <p className="col-3">Time : <strong>{time}</strong></p>
              </div>              
            </div>
            <p className="col-3">Payment done Date : </p><strong className="col-9">{this.props.paymentData.paymentDoneDate}</strong>
            <p className="col-3">Payment Method: </p><strong className="col-9">{this.props.paymentData.paymentMethod}</strong>
            <p className="col-3">Amount : </p><strong className="col-9">{this.props.paymentData.amount}</strong>
            <p className="col-3">Bank: </p><strong className="col-9">{this.props.paymentData.bank}</strong>
            <p className="col-3">Branch : </p><strong className="col-9">{this.props.paymentData.branch}</strong>
            <p className="col-3">Account No: </p><strong className="col-9">{this.props.paymentData.accountNo}</strong>
          </div>
        </div>
      );
    }
  }
  export default ReceiptPrint