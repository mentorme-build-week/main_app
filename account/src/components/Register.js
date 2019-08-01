import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, getQuestions } from '../actions/index';
import axios from 'axios';

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

    handleChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    registerAccount = (event) => {
        event.preventDefault();

        const { firstname, lastname, email, password } = this.state;

        this.props.registerUser({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password
        }).then(() => {
            const token = localStorage.getItem('token')

            axios.get('https://mentor-me-app-be.herokuapp.com/api/questions', {
                headers: {
                Authorization: token
            }
            })
                .then((response) => {
                    this.props.getQuestions(response.data)
                    this.props.history.push("/home")
                })
                .catch((err) => {
                    console.log(err);
                })
    })
        .catch((err) => {
            console.error(err)
    })

    }

    render() {
        
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
    registerUser: registerUser,
    getQuestions: getQuestions
}

export default(
	connect(
		null,
		mapDispatchToProps,
	)(Register)
)