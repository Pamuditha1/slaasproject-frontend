import React from "react";
import ReactToPrint from "react-to-print";
import { Button } from "reactstrap";

import ReceiptPrint from "./ReceiptPrint";
import { getInvoice } from "../services/getInvoiceNo";

class ReceiptGenerator extends React.PureComponent {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       invoiceNo: ''
  //     };
  //   }

  // async componentDidMount() {

  //   const invoice = await getInvoice()
  //   this.setState({
  //     invoiceNo: invoice,
  //   })
  //   console.log('Invoice no', this.state.invoiceNo)
  // }

  render() {
    console.log("Receipt generater rendered");
    const buttonStyleC = {
      boxShadow: "0px 5px 10px grey",
      fontWeight: "bold",
      backgroundColor: "#005336",
      borderRadius: "50px",
      float: "right",
    };

    const buttonStyle = {
      boxShadow: "0px 5px 10px grey",
      fontWeight: "bold",
      borderRadius: "50px",
      float: "right",
    };
    return (
      <div className="container">
        <ReceiptPrint
          ref={(el) => (this.componentRef = el)}
          paymentData={this.props.paymentData}
          paymentRecords={this.props.paymentRecords}
          invoiceNum={this.props.invoiceNum}
          setInvoiceNum={this.props.setInvoiceNum}
          type={this.props.type}
        />

        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return (
              <Button
                color="success mt-1 pl-4 pr-4"
                href="#"
                style={buttonStyleC}
              >
                Download
              </Button>
            );
          }}
          content={() => this.componentRef}
        />
        <button
          type="submit"
          onClick={() => this.props.setStep(1)}
          className="btn btn-dark float-right m-1 pr-4 pl-4"
          style={buttonStyle}
        >
          Back
        </button>
      </div>
    );
  }
}
export default ReceiptGenerator;
