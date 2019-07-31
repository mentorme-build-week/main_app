import React, { Component } from 'react';
import { registerUser } from '../actions/index'
import { connect } from 'react-redux'

class Register extends Component {
    constructor() {
        super();
        this.state =  {
            firstname: '',
            lastname: '',
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
            <div>
                <h1 className="mentormeheader">MentorMe</h1>
                <div className="register">
                    <h1>Register</h1>
                    <form className="registerform" onSubmit={this.registerAccount}>
                        <h3>First Name</h3>
                        <input type="text" onChange={this.handleChange} name="firstname" />
                        <h3>Last Name</h3>
                        <input type="text" onChange={this.handleChange} name="lastname" /> 
                        <h3>Email</h3>
                        <input type="text" onChange={this.handleChange} name="email" /> 
                        <h3>Password</h3>
                        <input type="password" onChange={this.handleChange} name="password" /> 
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    registerUser: registerUser
}

export default(
	connect(
		null,
		mapDispatchToProps,
	)(Register)
)