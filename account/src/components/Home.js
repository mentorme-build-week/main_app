import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getQuestions } from '../actions/index'
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
                {questions.map( question => {
                    return <Question question={question} key={question.id} />
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