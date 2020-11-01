import React, { Component } from 'react';
import MyContext from './StateManager'

class TestingLogin extends Component {

    static contextType = MyContext
    render() { 
        return ( 
        <div>
        
               
                <form  onSubmit={this.context.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                        autoFocus
                        value={this.context.account.username} 
                        onChange={this.context.handleChange}
                        name="username"
                        id="username" 
                        type="text" 
                        className="form-control" />
                    </div>
                    {/* {this.context.errors.username}  */}
                    { this.context.errors.username && <div className="alert alert-danger">{this.context.errors.username}</div>} 

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        value={this.context.account.password}  
                        onChange={this.context.handleChange}
                        name="password"
                        id="password" 
                        type="text" 
                        className="form-control" />
                    </div>
                    { this.context.errors.password && <div className="alert alert-danger">{this.context.errors.password}</div>}
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                
            
        </div> 
        );
    }
}
 
export default TestingLogin;