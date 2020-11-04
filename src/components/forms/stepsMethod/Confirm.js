import React from 'react';
import PropTypes from 'prop-types';
import { Button} from 'reactstrap'




export const Confirm = ({ formData, prevStep, nextStep }) => {

  const { bank,  branch,  accountNo } = formData;
  return (
    <>
      
      <div>
        <ul>
          <li>
            {bank}
          </li>
          <li>
            {branch}
          </li>
          <li>
            {accountNo}
          </li>
        </ul>
        <div>
          <Button
            onClick={() => prevStep()}
          >
            Back
          </Button>

          <Button
            onClick={() => nextStep()}
          >
            Confirm & Continue
          </Button>
        </div>
      </div>
    </>
  );
};

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};
