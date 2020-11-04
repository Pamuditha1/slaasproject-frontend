import React from 'react';
import PropTypes from 'prop-types';
import { Button} from 'reactstrap'




export const Confirm = ({ formData, prevStep, nextStep }) => {

  const { nameWinitials,
  firstName,
  middleName,
  lastName,
  gender,
  nic ,
  dob ,
  resAddOne,
  resAddTwo ,
  resAddThree ,
  resAddFour ,
  resAddFive ,
  perAddrsAvai ,
  
  mobileNo ,
  landNo ,
  email, 
  fax,
  designation,
division,
placeWork,    
offAddrslineOne ,
offAddrslineTwo ,
offAddrslineThree ,
offAddrslineFour ,
offAddrslineFive ,   
offMobile ,
offLandNo ,
offEmail, 
offFax } = formData;
  return (
    <>
      
      <div>
        <ul>
          <li>
            {firstName}
          </li>
          <li>
            {lastName}
          </li>
          <li>
            {designation}
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
