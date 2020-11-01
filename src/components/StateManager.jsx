import React, { Component } from 'react';
import LoginForm from './loginForm';
import TestingLogin from './TestingLogin'

export const MyContext = React.createContext()

class MyProvider extends Component {

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

    render() {
        return(
            <MyContext.Provider value={{
                account: this.state.account,
                errors: this.state.errors,
                handleSubmit : e => {
                        e.preventDefault()
                        
                        const errors = this.validate() 
                        this.setState({errors: errors || {}})
                        
                        if(errors) return

                        alert("Submitted");
                        console.log(this.state.account)
                },

                validatePropoty : (input) => {
                        if(input.name === 'username') {
                            if (input.value.trim() === '') return 'Username is required'
                        }
                        if(input.name === 'password') {
                            if (input.value.trim() === '') return 'Password is required'
                        }
                },

                handleChange : e => {
                        const errors = {...this.state.errors}
                        const errorMessage = this.validatePropoty(e.currentTarget)
                        if (errorMessage) errors[e.currentTarget.name] = errorMessage
                        else delete errors[e.currentTarget.name]

                        const account = {...this.state.account}
                        account[e.currentTarget.name] = e.currentTarget.value
                        this.setState({account, errors})

                    
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }









//     state = {
//         account: { username: "" , password: ""},
//         errors: {}
//     }
//     validate = () => {
//         const errors = {}

//         if (this.state.account.username.trim() === '')
//             errors.username = "Username is required"
       
//         if (this.state.account.password.trim() === '')
//             errors.password = "Password is required"
            

//         return Object.keys(errors).length === 0 ? null : errors        
          
//     }

//     handleSubmit = e => {
//         e.preventDefault()
        
//         const errors = this.validate() 
//         this.setState({errors: errors || {}})
        
//         if(errors) return

//         alert("Submitted");
//         console.log(this.state.account)
//     }

//     validatePropoty = (input) => {
//         if(input.name === 'username') {
//             if (input.value.trim() === '') return 'Username is required'
//         }
//         if(input.name === 'password') {
//             if (input.value.trim() === '') return 'Password is required'
//         }
//     }

//     handleChange = e => {
//         const errors = {...this.state.errors}
//         const errorMessage = this.validatePropoty(e.currentTarget)
//         if (errorMessage) errors[e.currentTarget.name] = errorMessage
//         else delete errors[e.currentTarget.name]

//         const account = {...this.state.account}
//         account[e.currentTarget.name] = e.currentTarget.value
//         this.setState({account, errors})

      
//     }

//     render() {        
//         return (
//             <div>
//                 <TestingLogin 
//                 handleChange={this.handleChange} 
//                 account={this.state.account} 
//                 errors={this.state.errors}
//                 handleSubmit={this.handleSubmit}
//                 />
//             </div>
//         );
//     }
}


export default MyProvider;