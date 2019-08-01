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

    }

    render() {

        const { questions } = this.props;
        console.log(questions);

        return(
            <div>
                {questions.map( question => {
                    return <h3>{question.content}</h3>
                })}
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