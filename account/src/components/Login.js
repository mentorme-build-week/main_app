import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state =  {
            user: '',
            password: ''
        }
    }

    handleChange = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signIn = event => {
        event.preventDefault();

    }

    render() {
        const { user, password } = this.state;

        return(
            <div className="signin">
                <h1>Sign In</h1>
                <div className="portrait">portrait placeholder</div>
                <form className="signinform" onSubmit={this.signIn}>
                    <input type="password" value={password} placeholder="Password" onChange={this.handleChange} name="password" />
                    <button type="submit">SIGN IN</button>
                </form>
                <h5>Switch account</h5>
            </div>
        )
    }
}

export default Login;