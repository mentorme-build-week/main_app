import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state =  {
            name: '',
            country: '',
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    registerAccount = event => {
        event.preventDefault();

    }

    render() {
        const { name, password } = this.state;

        return(
            <div className="register">
                <h1>Register</h1>
                <form className="registerform" onSubmit={this.registerAccount}>
                    <h3>Full Name</h3>
                    <input type="text" onChange={this.handleChange} name="name" />
                    <h3>Country</h3>
                    <input type="text" onChange={this.handleChange} name="country" /> 
                    <h3>Email</h3>
                    <input type="text" onChange={this.handleChange} name="email" /> 
                    <h3>Password</h3>
                    <input type="password" onChange={this.handleChange} name="password" /> 
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register;