import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addResponse } from '../actions/index'


class Question extends Component {
  constructor() {
    super();
    this.state = {
      topic: '',
      content: '',
      user_id: '',
      id: '',
      comment: '',
      comments: []
    };
  }

  componentDidMount() {
    const question = this.props.questions.find(i => String(i.id) === this.props.match.params.id);

    this.setState({
        topic: question.topic,
        content: question.content,
        user_id: question.userid,
        id: question.id,
        comments: question.comments
    })
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({
        [event.target.name]: event.target.value
    })
}

  addResponse = event => {

    event.preventDefault();

    const { comments, comment, id } = this.state;

    const payload =  {...comments, comment};

    this.props.addResponse(payload, id);
  }

  render() {
      return (
          <div className="questionboard">
            <h3>{this.state.content}</h3>
            <h4>{this.state.topic}</h4>
            <form onSubmit={this.addResponse}>
                <textarea 
                    rows="5" 
                    cols="60" 
                    name="comment" 
                    placeholder="Comment/Respond" 
                    value={this.state.comment} 
                    onChange={this.handleChange} 
                />
                <input type="submit" value="submit" />
            </form>
          </div>
      )
  }

}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

const mapDispatchToProps = {
    addResponse: addResponse
}

export default(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Question)
)