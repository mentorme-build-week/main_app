import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getQuestions } from '../actions/index'

class Home extends Component {
    constructor() {
        super();
        this.state =  {
            user: '',
            questions: ''
        }
    }

    /// once state loads, add questions to reducer

    componentDidMount() {
        
        this.props.getQuestions();

        this.setState({
            user: this.props.user,
            questions: this.props.questions
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