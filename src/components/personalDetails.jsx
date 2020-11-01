import React, { Component } from 'react';
import {userRegister} from '../services/userService'
import axios from 'axios'
import Joi from 'joi-browser'

class PersonalDetailsForm extends Component {

    state = {
        account: { 
            nameWinitials: "" ,
            fullName: {
                firstName: "",
                middleName: "",
                lastName: "",
            },
            gender: "",
            nic : "",
            dob : "",
            residenceAddrs: {
                lineOne : "",
                lineTwo : "",
                lineThree : "",
                lineFour : "",
                lineFive : ""
            },
            perAddrsAvai : false,
            permanentAddrs : {
                lineOne : "",
                lineTwo : "",
                lineThree : "",
                lineFour : "",
                lineFive : ""
            },
            mobileNo : "",
            landNo : "",
            email: "", 
            fax: "",
        },
        errors: {}
    }  

    // schema = {
    //     nameWinitials : Joi.string().alphanum().required(),
    //     firstName: Joi.string().required(),
    //     email: Joi.string().email().required(),
    //     password: Joi.string().required(),
    //     accountType: Joi.string().required()
    // }

    // validate = () => {
    //     const errors = {}

    //     if (this.state.account.nameWinitials.trim() === '')
    //         errors.nameWinitials = "Name is required"
    //     if (this.state.account.firstName.trim() === '')
    //         errors.firstName = "First Name is required"
    //     if (this.state.account.lastName.trim() === '')
    //         errors.lastName = "Last Name is required"
    //     if (this.state.account.gender.trim() === '')
    //         errors. = "firstName is required"

    //     if (this.state.account.email.trim() === '')
    //         errors.email = "Email is required"

    //     if (this.state.account.password.trim() === '')
    //     errors.password = "Password is required"

    //     if (this.state.account.accountType.trim() === '')
    //     errors.accountType = "Password is required"
            

    //     return Object.keys(errors).length === 0 ? null : errors        
          
    // }

    // handleSubmit = async (e) => {
    //     e.preventDefault()
        
    //     const errors = this.validate() 
    //     this.setState({errors: errors || {}})
        
    //     if(errors) return

    //     await userRegister(this.state.account)
    // }

    // validatePropoty = (input) => {
    //     if(input.name === 'nameWinitials') {
    //         if (input.value.trim() === '') return 'nameWinitials is required'
    //     }
    //     if(input.name === 'firstName') {
    //         if (input.value.trim() === '') return 'firstName is required'
    //     }
    //     if(input.name === 'email') {
    //         if (input.value.trim() === '') return 'Email is required'
    //     }
    //     if(input.name === 'password') {
    //         if (input.value.trim() === '') return 'Password is required'
    //     }
    //     if(input.name === 'accountType') {
    //         if (input.value.trim() === '') return 'Account Type is required'
    //     }
    // }
    
    handleChange = e => {
        // const errors = {...this.state.errors}
        // const errorMessage = this.validatePropoty(e.currentTarget)
        // if (errorMessage) errors[e.currentTarget.name] = errorMessage
        // else delete errors[e.currentTarget.name]

        
        const account = {...this.state.account}
        if(e.currentTarget.type == "checkbox") this.setState(account[e.currentTarget.name] = e.currentTarget.checked)

        account[e.currentTarget.name] = e.currentTarget.value
        // this.setState({account, errors})
        this.setState({account});
        console.log(this.state.account)
    }

    handleCheckbox = e => {
        const account = {...this.state.account}
        account.perAddrsAvai = e.currentTarget.checked
        this.setState({account})
    }
    
    render() { 
        return ( <div>
            <form  onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nameWinitials">Name with Initials</label>
                    <input
                     autoFocus
                     value={this.state.account.nameWinitials} 
                     onChange={this.handleChange}
                     name="nameWinitials"
                     id="nameWinitials" 
                     type="text" 
                     className="form-control" />
                </div>          
                { this.state.errors.nameWinitials && <div className="alert alert-danger">{this.state.errors.nameWinitials}</div>}
                

                <label htmlFor="fullName">Full Name</label>
                    <div className="form-group m-3 w-50" >
                        <label htmlFor="firstName">First Name</label>
                        <input
                        value={this.state.account.fullName.firstName}  
                        onChange={this.handleChange}
                        name="firstName"
                        id="firstName" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.firstName && <div className="alert alert-danger">{this.state.errors.firstName}</div>}
                    <div className="form-group m-3">
                        <label htmlFor="middleName">Middle Name</label>
                        <input
                        value={this.state.account.fullName.middleName}  
                        onChange={this.handleChange}
                        name="middleName"
                        id="middleName" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.middleName && <div className="alert alert-danger">{this.state.errors.middleName}</div>}
                    <div className="form-group m-3 w-50">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                        value={this.state.account.fullName.lastName}  
                        onChange={this.handleChange}
                        name="lastName"
                        id="lastName" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.lastName && <div className="alert alert-danger">{this.state.errors.lastName}</div>}

                <label htmlFor="gender">Gender</label> <br></br>
                <label  className="form-group m-3 w-50">
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.account.gender === "male"}
                        onChange={this.handleChange}
                        /> Male
                </label>
                <label  className="form-group m-3 w-50">
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.account.gender === "female"}
                        onChange={this.handleChange}
                        /> Female
                </label>
                {this.state.account.gender }

                <div className="form-group">
                    <label htmlFor="nic">NIC</label>
                    <input
                    value={this.state.account.password}  
                    onChange={this.handleChange}
                    name="nic"
                    id="nic" 
                    type="text" 
                    className="form-control" />
                </div>
                { this.state.errors.nic && <div className="alert alert-danger">{this.state.errors.nic}</div>}
                
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                    value={this.state.account.dob}  
                    onChange={this.handleChange}
                    name="dob"
                    id="dob" 
                    type="text" 
                    className="form-control" />
                </div>
                { this.state.errors.dob && <div className="alert alert-danger">{this.state.errors.dob}</div>}

                <label htmlFor="residenceAddrs">Residence Address</label>
                    <div className="form-group m-3 w-50" >
                        <label htmlFor="lineOne">Line One</label>
                        <input
                        value={this.state.account.residenceAddrs.lineOne}  
                        onChange={this.handleChange}
                        name="lineOne"
                        id="lineOne" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.lineOne && <div className="alert alert-danger">{this.state.errors.lineOne}</div>}
                    <div className="form-group m-3">
                        <label htmlFor="lineTwo">Line Two</label>
                        <input
                        value={this.state.account.residenceAddrs.lineTwo}  
                        onChange={this.handleChange}
                        name="lineTwo"
                        id="lineTwo" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.lineTwo && <div className="alert alert-danger">{this.state.errors.lineTwo}</div>}
                    <div className="form-group m-3">
                        <label htmlFor="lineThree">Line Three</label>
                        <input
                        value={this.state.account.residenceAddrs.lineThree}  
                        onChange={this.handleChange}
                        name="lineThree"
                        id="lineThree" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.lineThree && <div className="alert alert-danger">{this.state.errors.lineThree}</div>}
                    <div className="form-group m-3">
                        <label htmlFor="lineFour">Line Four</label>
                        <input
                        value={this.state.account.residenceAddrs.lineFour}  
                        onChange={this.handleChange}
                        name="lineFour"
                        id="lineFour" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.lineFour && <div className="alert alert-danger">{this.state.errors.lineFour}</div>}
                    <div className="form-group m-3">
                        <label htmlFor="lineFive">Line Five</label>
                        <input
                        value={this.state.account.residenceAddrs.ineFive}  
                        onChange={this.handleChange}
                        name="ineFive"
                        id="ineFive" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.ineFive && <div className="alert alert-danger">{this.state.errors.ineFive}</div>}

                <label className="form-group">
                Permanent Address Available (different to above)
                    <input className="m-3"
                        type="checkbox"
                        name="perAddrsAvai"
                        checked={this.state.account.perAddrsAvai} 
                        onChange={this.handleCheckbox}
                    />
                </label>

                {this.state.account.perAddrsAvai &&  
                <div id="permanentAddress">
                    <label htmlFor="permanentAddrs">Permanent Address</label>
                    <div className="form-group m-3 w-50" >
                        <label htmlFor="lineOne">Line One</label>
                        <input
                        value={this.state.account.permanentAddrs.lineOne}  
                        onChange={this.handleChange}
                        name="lineOne"
                        id="lineOne" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.lineOne && <div className="alert alert-danger">{this.state.errors.lineOne}</div>}
                    <div className="form-group m-3">
                        <label htmlFor="lineTwo">Line Two</label>
                        <input
                        value={this.state.account.permanentAddrs.lineTwo}  
                        onChange={this.handleChange}
                        name="lineTwo"
                        id="lineTwo" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.lineTwo && <div className="alert alert-danger">{this.state.errors.lineTwo}</div>}
                    <div className="form-group m-3">
                        <label htmlFor="lineThree">Line Three</label>
                        <input
                        value={this.state.account.permanentAddrs.lineThree}  
                        onChange={this.handleChange}
                        name="lineThree"
                        id="lineThree" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.lineThree && <div className="alert alert-danger">{this.state.errors.lineThree}</div>}
                    <div className="form-group m-3">
                        <label htmlFor="lineFour">Line Four</label>
                        <input
                        value={this.state.account.permanentAddrs.lineFour}  
                        onChange={this.handleChange}
                        name="lineFour"
                        id="lineFour" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.lineFour && <div className="alert alert-danger">{this.state.errors.lineFour}</div>}
                    <div className="form-group m-3">
                        <label htmlFor="lineFive">Line Five</label>
                        <input
                        value={this.state.account.permanentAddrs.ineFive}  
                        onChange={this.handleChange}
                        name="ineFive"
                        id="ineFive" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.state.errors.ineFive && <div className="alert alert-danger">{this.state.errors.ineFive}</div>}
                </div>}


                <div className="form-group">
                    <label htmlFor="mobileNo">Contact No (Moblie)</label>
                    <input
                    value={this.state.account.mobileNo}  
                    onChange={this.handleChange}
                    name="mobileNo"
                    id="mobileNo" 
                    type="text" 
                    className="form-control" />
                </div>
                { this.state.errors.mobileNo && <div className="alert alert-danger">{this.state.errors.mobileNo}</div>}

                <div className="form-group">
                    <label htmlFor="landNo">Contact No (Fixed)</label>
                    <input
                    value={this.state.account.landNo}  
                    onChange={this.handleChange}
                    name="landNo"
                    id="landNo" 
                    type="text" 
                    className="form-control" />
                </div>
                { this.state.errors.landNo && <div className="alert alert-danger">{this.state.errors.landNo}</div>}

                
                <button type="submit" className="btn btn-primary right-align">Next</button>
                {/* disabled={this.validate()!= null} */}
                
            </form>
        </div> );
    }
}
 
export default PersonalDetailsForm;