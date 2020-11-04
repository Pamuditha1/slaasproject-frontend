import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        account: { username: "" , password: ""},
        errors: {}
    }

    validate = () => {
        const errors = {}

        if (this.state.account.username.trim() === '')
            errors.username = "Username is required"
       
        if (this.state.account.password.trim() === '')
            errors.password = "Password is required"
            

        return Object.keys(errors).length === 0 ? null : errors        
          
    }

    handleSubmit = e => {
        e.preventDefault()
        
        const errors = this.validate() 
        this.setState({errors: errors || {}})
        
        if(errors) return

        this.props.history.replace('/dashboard')
    }

    validatePropoty = (input) => {
        if(input.name === 'username') {
            if (input.value.trim() === '') return 'Username is required'
        }
        if(input.name === 'password') {
            if (input.value.trim() === '') return 'Password is required'
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
                    <label htmlFor="username">Username</label>
                    <input
                     autoFocus
                     value={this.state.account.username} 
                     onChange={this.handleChange}
                     name="username"
                     id="username" 
                     type="text" 
                     className="form-control" />
                </div>
                {/* {this.state.errors.username} */}
                { this.state.errors.username && <div className="alert alert-danger">{this.state.errors.username}</div>}

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
                <button disabled={this.validate()!= null} type="submit" className="btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;