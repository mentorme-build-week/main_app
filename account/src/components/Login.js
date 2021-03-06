import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signIn, getQuestions } from '../actions/index'
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state =  {
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

    /// this action signs in a user, returns a token to storage, 
    /// and loads the questions to the store
    signIn = event => {
        event.preventDefault();

        const { email, password } = this.state;

        this.props.signIn({
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
        const { email, password } = this.state;

        return(
            <div>
                <h1 className="mentormeheader">MentorMe</h1>
                <div className="signin">
                    <h1>Sign In</h1>
                    <div className="portrait">portrait placeholder</div>
                    <form className="signinform" onSubmit={this.signIn}>
                    <input type="text" value={email} placeholder="Email" onChange={this.handleChange} name="email" />
                        <input type="password" value={password} placeholder="Password" onChange={this.handleChange} name="password" />
                        <button type="submit">SIGN IN</button>
                    </form>
                    <Link to="/register"><h5>Create an Account</h5></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signingIn: state.signingIn,
        token: state.token
    }
}

const mapDispatchToProps = {
    signIn: signIn,
    getQuestions: getQuestions
}

export default(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Login)
)