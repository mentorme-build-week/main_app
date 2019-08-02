import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getQuestions } from '../actions/index'
import { Link } from 'react-router-dom'
import Question from '../components/Question'

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
                <div className="homenav">
                    <h3>Search</h3>
                    <h3>Profile</h3>
                </div>
                <div className="questions">
                    {questions.map( question => {
                        return <Link to={`/questions/${question.id}`}>
                                    <h3 className="question">{question.content}</h3>
                               </Link>
                    })}
                </div>
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