import React, { Component } from 'react';
import { connect } from 'react-redux'


class Question extends Component {
  constructor() {
    super();
    this.state = {
      topic: '',
      content: '',
      user_id: '',
      id: ''
    };
  }

  componentDidMount() {
    const question = this.props.questions.find(i => String(i.id) === this.props.match.params.id);

    this.setState({
        topic: question.topic,
        content: question.content,
        user_id: question.userid,
        id: question.id
    })
  }

  render() {
      return (
          <h1>{this.state.topic}</h1>
      )
  }

}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}


export default(
	connect(
		mapStateToProps,
		null,
	)(Question)
)