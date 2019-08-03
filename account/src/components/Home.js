import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getQuestions } from '../actions/index'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super();
        this.state =  {
            user: '',
            questions: ''
        }
    }

    render() {

        const { questions } = this.props;
        console.log(questions);
        console.log(this.props.user)

        return(
            <div className="questionshome">
                <h2>Welcome {this.props.user.firstname} !</h2>
                <div className="homenav">
                    <Link to="/search"><h3>Search</h3></Link>
                    <Link to="/post"><h3>Post</h3></Link>
                    <Link to="/profile"><h3>Profile</h3></Link>
                </div>
                <div className="questions">
                    {questions.map( question => {
                        return <Link to={`/questions/${question.id}`}>
                                    <div className="questionblock">
                                        <h3 className="topic">{question.topic}</h3>
                                        <h3 className="question">{question.content}</h3>    
                                    </div>
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