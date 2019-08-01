import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getQuestions } from '../actions/index'
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.state =  {
            user: '',
            questions: ''
        }
    }

    /// once state loads, add questions to reducer and user to state

    componentDidMount() {

        const token = localStorage.getItem('token')

        axios.get('https://mentor-me-app-be.herokuapp.com/api/questions', {
            headers: {
              Authorization: token
          }
        })
            .then((response) => {
                this.props.getQuestions(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {

        return(
            <div>
                hey
            </div>
        )
    }
}

const mapDispatchToProps = {
    getQuestions: getQuestions
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        questions: state.questions
    }
}

export default(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Home)
)