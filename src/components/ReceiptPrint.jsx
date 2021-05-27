import React from 'react'
import logo from '../images/slaasLogo.png'
import { ToWords } from 'to-words';
import {getInvoice} from '../services/getInvoiceNo'
import {addPayment} from '../services/addPaymentService'
import RecordPayment from './RecordPayment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck , faExclamation} from "@fortawesome/free-solid-svg-icons";

const toWords = new ToWords();

class ReceiptPrint extends React.PureComponent {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     invoiceNo: this.props.invoiceNum,
  //     today : new Date().toLocaleDateString(),
  //     time: new Date().toLocaleTimeString() ,
  //     dateTimeSave: new Date(),
  //     total: this.props.paymentData.admissionFee ? parseInt(this.props.paymentData.admissionFee) : 0 
  //           + this.props.paymentData.yearlyFee ? parseInt(this.props.paymentData.yearlyFee) : 0 
  //           + this.props.paymentData.arrearsFee ? parseInt(this.props.paymentData.arrearsFee) : 0
  //           + this.props.paymentData.idCardFee ? parseInt(this.props.paymentData.idCardFee) : 0
  //     ,
  //     totalWords: this.total && toWords.convert(this.total.toString(), { currency: true , ignoreDecimal: true}),     
  //     paymentRecord : this.props.paymentData,
  //     paymentRecorded : false
  //   };
  // }
  
    constructor(props) {
      super(props);

      this.state = {
        // adminF : this.props.paymentData.admissionFee,
        // YearF : this.props.paymentData.yearlyFee,
        // idFee : this.props.paymentData.idCardFee,
        // arreF : this.props.paymentData.arrearsFee,


        invoiceNo: '',
        today : '',
        time: '',
        dateTimeSave: '',
        total: '',
        totalWords: '',     
        paymentRecord : this.props.paymentData,
        paymentRecorded : false
      };
    }

    async componentDidMount() {

      const dateTimeSave = new Date()
      const todayD = new Date().toLocaleDateString()
      const timeD = new Date().toLocaleTimeString()   
 
      let totalD = (this.props.paymentData.admissionFee ? parseInt(this.props.paymentData.admissionFee) : 0 )
      + (this.props.paymentData.yearlyFee ? parseInt(this.props.paymentData.yearlyFee) : 0 )
      + (this.props.paymentData.arrearsFee ? parseInt(this.props.paymentData.arrearsFee) : 0)
      + (this.props.paymentData.idCardFee ? parseInt(this.props.paymentData.idCardFee) : 0)
      
      // let totalD = (this.state.adminF ? parseInt(this.state.adminF) : 0 )
      // + (this.state.YearF ? parseInt(this.state.YearF) : 0 )
      // + (this.state.arreF? parseInt(this.state.arreF) : 0)
      // + (this.state.idFee ? parseInt(this.state.idFee) : 0)

      if(totalD) {
        var totalWordsD = toWords.convert(totalD.toString(), { currency: true , ignoreDecimal: true});
      }

      // const invoice = await getInvoice()
      this.setState({
        invoiceNo: this.props.invoiceNum,
        dateTimeSave: dateTimeSave,
        today : todayD,
        time: timeD,
        total: totalD,
        totalWords: totalWordsD
        
      })

      console.log("Mount" + this.state)
      console.log("Receipt Print Mount")
      console.log(this.state)
      
    }
  changePaymentRecorded = () => {
    this.setState({
      paymentRecorded : true
    })
  }
  onChangeInNo = (e) => {
    this.setState({
      invoiceNo: e.target.value
    })
    this.props.setInvoiceNum(e.target.value)

  }

  // async recordPayment() {
  //   await addPayment(this.state)
  //   console.log("Record" + this.state)
  //   console.log("Receipt Print Record")
  //   console.log(this.state || 'No state record')
  // }

    render() {

      console.log("Render" + this.state)
      console.log("Receipt Print Render")
      console.log(this.state || 'No state render')

      const backgroundStyle = {
        height: '1122px',
        width: '792px',
        border: '3px solid black',
        margin: '5% 10% 10px 5%',
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
                {/* <p className="col-9">Invoice No - <strong>{this.state.invoiceNo}</strong></p> */}
                <div className="col-9">
                  <label  htmlFor="invoiceNo" className="col-3"><strong>Invoice No</strong></label> 
                  <input type="text" id="invoiceNo"  className="col-4 mt-1" name="invoiceNo" value={this.state.invoiceNo} 
                  onChange={this.onChangeInNo}/>
                </div>                

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
              
              <p className="col-2"></p><p className="col-4">Admission Fee : </p><strong className="col-6">Rs. {this.props.paymentData.admissionFee ? this.props.paymentData.admissionFee : 0}</strong>
              <p className="col-2"></p><p className="col-4">Membership Fee <strong>Rs. {this.props.paymentData.yearOfPayment ? this.props.paymentData.yearOfPayment : 0}</strong>: </p><strong className="col-6">{this.props.paymentData.yearlyFee ? this.props.paymentData.yearlyFee : 0}</strong>
              <p className="col-2"></p><p className="col-4">Arrears Fee : </p><strong className="col-6">Rs. {this.props.paymentData.arrearsFee ? this.props.paymentData.arrearsFee : 0}</strong>
              <p className="col-2"></p><p className="col-4">ID Card Fee : </p><strong className="col-6">Rs. {this.props.paymentData.idCardFee ? this.props.paymentData.idCardFee: 0}</strong>
              <p className="col-2"></p><p className="col-4" style={{fontSize: 17}}><strong>Total : </strong></p><strong className="col-6" style={{fontSize: 17}}>Rs. {this.state.total ? this.state.total : 0}</strong>
            
            <div className="row"></div>
            <p className="col-3">Total Payment : </p><strong className="col-9">{this.state.totalWords}</strong>
            <p className="col-3">Description : </p><strong className="col-9">{this.props.paymentData.description}</strong>
          </div>
        </div>        
        <div style={{marginLeft: '10%'}}>        
          {this.state.paymentRecorded ?        
          <h6 style={{color: "green"}} ><FontAwesomeIcon icon={faCheck} size="2x"/> Payment has been Recorded</h6> : 
          <h6 style={{color: "red"}} ><FontAwesomeIcon icon={faExclamation} size="2x"/> Payment hasn't been Recorded yet</h6>}

          {/* <button type="button" onClick={this.recordPayment} className="btn btn-primary float-right m-1">Record the Payment</button> */}
          <RecordPayment payment={this.state} paymentRecords={this.props.paymentRecords} record={this.recordPayment} changePaymentRecorded={this.changePaymentRecorded}/>
        </div>
        </>
      );
    }
  }
  export default ReceiptPrint