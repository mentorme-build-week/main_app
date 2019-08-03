import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Profile extends Component {
    constructor() {
      super();
      this.state = {
      };
    }

    logout = event => {
        event.preventDefault();

        localStorage.removeItem('token');

        this.props.history.push("/")
    }

    render() {
        const { firstname, lastname, email } = this.props.user
        return (
            <div className="profile">
                <h1>{firstname} {lastname}</h1>
                <h2>{email}</h2>
                <img src="/images/portrait.jpg" />
                <Link to="/home"><h4>Home</h4></Link>
                <button onClick={this.logout}>Log Out</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default(
    connect(
        mapStateToProps,
        null,
    )(Profile)
)