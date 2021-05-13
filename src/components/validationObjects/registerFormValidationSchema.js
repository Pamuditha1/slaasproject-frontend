import * as Yup from 'yup'

const validationSchema = Yup.object({
    title : Yup.string().required('Title is required.'),
    nameWinitials: Yup.string().required('Name with Initials is required.'),
    nameInFull : Yup.string(),
    firstName: Yup.string(),
    lastName : Yup.string(),
    gender: Yup.string().required('Genderis required.'),
    nic : Yup.string().matches(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/,'Invalid NIC number').required('National Identity Card Number is required.'),
    dob : Yup.string().required('Date of Birth is required.'),
    resAddOne : Yup.string(), resAddTwo : Yup.string(), resAddThree : Yup.string(), resAddFour : Yup.string(), resAddFive : Yup.string(),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    perAddrsAvai : Yup.boolean(),
    perAddOne : Yup.string(), perAddTwo : Yup.string(), perAddThree : Yup.string(), perAddFour : Yup.string(), perAddFive : Yup.string(),
    mobileNo : Yup.number('Invalid Contact Number').required('Mobile Contact Number is Required'),
    landNo : Yup.number('Invalid Contact Number').required('Fixed Contact Number is Required'),
    designation:  Yup.string(),
    division: Yup.string(),
    placeWork: Yup.string(),    
    offAddrslineOne : Yup.string(), offAddrslineTwo : Yup.string(), offAddrslineThree : Yup.string(), offAddrslineFour : Yup.string(), offAddrslineFive : Yup.string(),
    offMobile : Yup.number('Invalid Contact Number'),
    offLandNo : Yup.number('Invalid Contact Number'),
    offEmail: Yup.string().email('Invalid Email'), 
    offFax: Yup.number('Invalid Contact Number'),
    profession: Yup.string(),
    gradeOfMem : Yup.string(),
    section: Yup.string(),
    memBefore: Yup.boolean(),
    memFrom : Yup.string(),  memTo: Yup.string(),
    sendingAddrs: Yup.string(),
    status: Yup.string(),
    enrollDate: Yup.string()
})

export default validationSchema


