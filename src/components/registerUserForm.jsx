import React, { Component } from 'react';
import {userRegister} from '../services/userService'
import axios from 'axios'
import Joi from 'joi-browser'

class RegisterUserForm extends Component {

    state = {
        account: { userName: "" ,officeID: "",email: "", password: "", accountType: ""},
        errors: {}
    }  

    schema = {
        userName : Joi.string().alphanum().required(),
        officeID: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        accountType: Joi.string().required()
    }

    validate = () => {
        const errors = {}

        if (this.state.account.userName.trim() === '')
            errors.username = "Username is required"
       
        if (this.state.account.officeID.trim() === '')
            errors.officeID = "OfficeID is required"

        if (this.state.account.email.trim() === '')
            errors.email = "Email is required"

        if (this.state.account.password.trim() === '')
        errors.password = "Password is required"

        if (this.state.account.accountType.trim() === '')
        errors.accountType = "Password is required"
            

        return Object.keys(errors).length === 0 ? null : errors        
          
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        
        const errors = this.validate() 
        this.setState({errors: errors || {}})
        
        if(errors) return

        await userRegister(this.state.account)
    }

    validatePropoty = (input) => {
        if(input.name === 'userName') {
            if (input.value.trim() === '') return 'Username is required'
        }
        if(input.name === 'officeID') {
            if (input.value.trim() === '') return 'OfficeID is required'
        }
        if(input.name === 'email') {
            if (input.value.trim() === '') return 'Email is required'
        }
        if(input.name === 'password') {
            if (input.value.trim() === '') return 'Password is required'
        }
        if(input.name === 'accountType') {
            if (input.value.trim() === '') return 'Account Type is required'
        }
    }
    
    handleChange = e => {
        const errors = {...this.state.errors}
        const errorMessage = this.validatePropoty(e.currentTarget)
        if (errorMessage) errors[e.currentTarget.name] = errorMessage
        else delete errors[e.currentTarget.name]

        const account = {...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value
        this.setState({account, errors})
    }
    
    render() { 
        return ( <div>
            <form  onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                     autoFocus
                     value={this.state.account.username} 
                     onChange={this.handleChange}
                     name="userName"
                     id="userName" 
                     type="text" 
                     className="form-control" />
                </div>
                <div className="form-group">
                { this.state.errors.userName && <div className="alert alert-danger">{this.state.errors.userName}</div>}

                <div className="form-group">
                    <label htmlFor="officeID">Password</label>
                    <input
                    value={this.state.account.officeID}  
                    onChange={this.handleChange}
                    name="officeID"
                    id="officeID" 
                    type="text" 
                    className="form-control" />
                </div>
                { this.state.errors.officeID && <div className="alert alert-danger">{this.state.errors.officeID}</div>}

                <label htmlFor="email">Email</label>
                    <input
                     value={this.state.account.email} 
                     onChange={this.handleChange}
                     name="email"
                     id="email" 
                     type="text" 
                     className="form-control" />
                </div>                
                { this.state.errors.email && <div className="alert alert-danger">{this.state.errors.email}</div>}
                

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    value={this.state.account.password}  
                    onChange={this.handleChange}
                    name="password"
                    id="password" 
                    type="text" 
                    className="form-control" />
                </div>
                { this.state.errors.password && <div className="alert alert-danger">{this.state.errors.password}</div>}

                <div className="form-group">
                    <label htmlFor="accountType">Account Type</label>
                    <input
                    value={this.state.account.accountType}  
                    onChange={this.handleChange}
                    name="accountType"
                    id="accountType" 
                    type="text" 
                    className="form-control" />
                </div>
                { this.state.errors.accountType && <div className="alert alert-danger">{this.state.errors.accountType}</div>}

                
                <button disabled={this.validate()!= null} type="submit" className="btn btn-primary">Register</button>
            </form>
        </div> );
    }
}
 
export default RegisterUserForm;