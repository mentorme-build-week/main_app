// Jamison's post code

import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/index'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: '',
            content: '',
            topic: '',
        }
    }


changeHandler = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
}

submitHandler = (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem("token");

    axios.post('https://mentor-me-app-be.herokuapp.com/api/questions/', this.state, {
            headers: {
                Authorization: token
            }
            })
        .then(response => {
            let { questions } = this.props;
            questions = [...questions, response.data]
            console.log(this.props)
            this.props.getQuestions(questions)
            this.props.history.push(`/questions/${response.data.id}`)
        })
        .catch(err => {
            console.log(err);
        })
}

inChangeHandler = (event) => {
    event.preventDefault();
    this.setState({topic : event.target.value})
}

render() {

        return (
            <div>
              
           <form onSubmit={this.submitHandler} > 
            <input placeholder='user_id' type="number" value={this.state.user_id} onChange={this.changeHandler} name='user_id'/>
            <input placeholder='content' value={this.state.content} onChange={this.changeHandler} name='content' />
                 <label htmlFor="topic">Select Topic:  </label>
                 <select value={this.state.topic} onChange={this.inChangeHandler}>
                    <option value="Photography">Photography</option>
                    <option value="Programming">Programming</option>
                    <option value="Small Business">Small Business</option>
                </select>
            <button type="submit">Post</button>
           </form>   
            </div>
    )
        }

}

const mapStateToProps = (state) => {
    return {
        token: state.token,
        user: state.user,
        questions: state.questions
    }
  }

const mapDispatchToProps = {
    getQuestions: getQuestions
}
  
  
  export default(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Post)
  )