import React from 'react';
import PropTypes from 'prop-types';
import { Button} from 'reactstrap'


export const Confirm = ({ formData, prevStep, nextStep }) => {
  
  return (
    <>
      <h1>{formData.payment.receivedDate}</h1>
      <h1>{formData.payment.bank}</h1>
     
      <Button onClick={() => prevStep()}>Back</Button>
      <Button onClick={() => nextStep()}>Confirm & Continue </Button>
        
    </>
  );
};

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};
