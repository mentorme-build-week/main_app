import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super();
        this.state =  {
        }
    }

    render() {

        return(
            <div>
                <h1 className="mentormeheader">MentorMe</h1>
                <div className="signin">
                    <h1>Sign In</h1>
                    <div className="portrait">portrait placeholder</div>
                    <form className="signinform" onSubmit={this.signIn}>
                        <input type="password" value={password} placeholder="Password" onChange={this.handleChange} name="password" />
                        <button type="submit">SIGN IN</button>
                    </form>
                    <Link to="/register"><h5>Create an Account</h5></Link>
                </div>
            </div>
        )
    }
}

export default Home;