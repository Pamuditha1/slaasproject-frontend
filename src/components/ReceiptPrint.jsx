import React from 'react'
import logo from '../images/slaasLogo.png'
import { ToWords } from 'to-words';
import {getInvoice} from '../services/getInvoiceNo'
import {addPayment} from '../services/addPaymentService'
import RecordPayment from './RecordPayment';

const toWords = new ToWords();

class ReceiptPrint extends React.PureComponent {
  
  constructor(props) {
    super(props);

    this.state = {
      invoiceNo: '',
      today : '',
      time: '',
      total: '',
      totalWords: '',     
      paymentRecord : this.props.paymentData
    };
  }

  async componentDidMount() {

    const todayD = new Date().toLocaleDateString()
    const timeD = new Date().toLocaleTimeString()      
    let totalD = this.props.paymentData.admissionFee + this.props.paymentData.yearlyFee 
    + this.props.paymentData.arrearsFee + this.props.paymentData.idCardFee|| ''
    if(totalD) {
      var totalWordsD = toWords.convert(totalD, { currency: true , ignoreDecimal: true});
    }

    const invoice = await getInvoice()
    this.setState({
      invoiceNo: invoice,
      today : todayD,
      time: timeD,
      total: totalD,
      totalWords: totalWordsD,
    })

    // console.log("Mount" + this.state)
    console.log("Mount")
    
  }

  async recordPayment() {
    // await addPayment(this.state)
    // console.log("Record" + this.state)
    console.log("Record")
  }

    render() {

      // console.log("Render" + this.state)
      console.log("Render")

      const backgroundStyle = {
        height: '1122px',
        width: '792px',
        border: '3px solid black',
        margin: '10px 5px 10px 5px',
        padding: '40px'
      }
      const logoStyle = {
        height: '100px',
        width: "auto",
        marginRight : '20px'
      }      

      return (
        <>
        <div className='container' style={backgroundStyle}>
          <div className="row" id="payment">
            <h4 className="col-12 h-5 mt-3" style={{textAlign: 'center'}}>
              <img src={logo} style={logoStyle}/>
            Sri Lanka Association for the Advancement of Science</h4>
            <h5 className="col-12 h-5" style={{textAlign: 'center'}}>Membership Payment Receipt</h5>

            <div className="col-12" style={{marginTop: '5%'}}>
              <div className="row">
                <p className="col-9">Invoice No - <strong>{this.state.invoiceNo}</strong></p>
                <p className="col-3">Date : <strong>{this.state.today}</strong></p>
                <div className='col-9'></div>
                <p className="col-3">Time : <strong>{this.state.time}</strong></p>
              </div>              
            </div>
            <p className="col-3">Member Name : </p><strong className="col-9">{this.props.paymentData.memberName}</strong>
            <p className="col-3">Membership No: </p><strong className="col-9">{this.props.paymentData.membershipNo}</strong>
            <p className="col-3">NIC : </p><strong className="col-9">{this.props.paymentData.nic}</strong>

            
            <p className="col-3">Payment Method : </p><strong className="col-9">{this.props.paymentData.paymentMethod}</strong>
            <p className="col-12">Payment</p>
              
              <p className="col-2"></p><p className="col-4">Admission Fee : </p><strong className="col-6">{this.props.paymentData.admissionFee}</strong>
              <p className="col-2"></p><p className="col-4">Membership Fee <strong>{this.props.paymentData.yearOfPayment}</strong>: </p><strong className="col-6">{this.props.paymentData.yearlyFee}</strong>
              <p className="col-2"></p><p className="col-4">Arrears Fee : </p><strong className="col-6">{this.props.paymentData.arrearsFee}</strong>
              <p className="col-2"></p><p className="col-4">ID Card Fee : </p><strong className="col-6">{this.props.paymentData.idCardFee}</strong>
              <p className="col-2"></p><p className="col-4" style={{fontSize: 17}}><strong>Total : </strong></p><strong className="col-6" style={{fontSize: 17}}>{this.state.total}</strong>
            
            <div className="row"></div>
            <p className="col-3">Total Payment : </p><strong className="col-9">{this.state.totalWords}</strong>
            <p className="col-3">Description : </p><strong className="col-9">{this.props.paymentData.description}</strong>
          </div>

          
        </div>
        <button type="button" onClick={this.recordPayment} className="btn btn-primary float-right m-1">Record the Payment</button>
          {/* <RecordPayment payment={this.state} record={this.recordPayment}/> */}
        </>
      );
    }
  }
  export default ReceiptPrint