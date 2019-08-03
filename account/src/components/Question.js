import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addResponse } from '../actions/index'
import { getQuestions } from '../actions/index'
import axios from 'axios'


class Question extends Component {
  constructor() {
    super();
    this.state = {
      comment: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({
        [event.target.name]: event.target.value
    })
}

  addResponse = event => {

    event.preventDefault();
    
    this.props.addResponse([...this.props.comments, this.state.comment], this.props.id)
  }

  deleteQuestion = event => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    
    axios.delete(`https://mentor-me-app-be.herokuapp.com/api/questions/${this.props.match.params.id}`, {
        headers: {
            Authorization: token
        }
        })
        .then(() => {
          const token = localStorage.getItem('token')

          axios.get('https://mentor-me-app-be.herokuapp.com/api/questions', {
              headers: {
              Authorization: token
          }
          })
              .then((response) => {
                  this.props.getQuestions(response.data)
                  this.props.history.push("/home")
              })
              .catch((err) => {
                  console.log(err);
              })
  })
    .catch(error => {
        console.log(error)
    })

}

  render() {
      return (
          <div className="questionboard">
            <h1>{this.props.comments}</h1>
            <h3>{this.props.content}</h3>
            <h4>{this.props.topic}</h4>
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
            <button onClick={this.deleteQuestion}>DELETE QUESTION</button>
          </div>
      )
  }

}

const mapStateToProps = (state, props) => {
  const question = state.questions.find(i => String(i.id) === props.match.params.id);
    return {
      comments: [],
      ...question
    }
}

const mapDispatchToProps = {
    addResponse: addResponse,
    getQuestions: getQuestions
}

export default(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Question)
)