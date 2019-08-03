/// Jamison's search component

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Search extends Component{
    constructor() {
        super()
        this.state= {
           questions: '',
           value: '',
            items: ''

        }
    } 
    
   onChangeHandler = (event) => {
       event.preventDefault();
       this.setState({value : event.target.value})
   }

   inChangeHandler = (event) => {
    event.preventDefault();
    this.setState({items : event.target.value})
}



   addComments = (event) => {
       event.preventDefault();
       
   }
   componentDidMount() {

    }

    render(){
        const question = this.props.questions.filter(question => question.content.includes(this.state.value))
        const topic = this.props.questions.filter(question => question.topic.includes(this.state.items)) 
        return(
            <div className="searchpage">
                <h3 className="topictitle">{this.state.items}</h3>
                 <input className="searchinput" placeholder="Search" value={this.state.value} name='value' onChange={this.onChangeHandler}/>
                 <form>
                    <label htmlFor="topic">Select Topic:  </label>
                    <select className="topic" value={this.state.items} onChange={this.inChangeHandler}>
                    <option value=""> Pick </option>
                    <option value="Photography"  name='Photography'> Photography </option>
                    <option value="Programming"  name="Programming"> Programming </option>
                    <option value="Small Business"  name="Small Business"> Small Business </option>
                    </select>
                    <button type="submit">Find</button>
                 </form>
{ this.state.value.length > 0 ? question.map(question => {
    return <div className="questions">
                <Link to={`/questions/${question.id}`}>
                    <div className="questionblock">
                        <h3 className="topic">{question.topic}</h3>
                        <h3 className="question">{question.content}</h3>    
                    </div>
                </Link>
            </div>
 })
 : <p>Search for a question</p>  
                   }
                   
         { this.state.items.length > 0  ?  topic.map(question => {
         return <div className="questions">
                    <Link to={`/questions/${question.id}`}>
                        <div className="questionblock">
                            <h3 className="topic">{question.topic}</h3>
                            <h3 className="question">{question.content}</h3>    
                        </div>
                    </Link> 
                </div>
                    })
                    :        
         
                    <p>Searching...</p>
                                
                    
}
            </div>
            
        )
    }
}    

const mapStateToProps = (state) => {
    return {
        token: state.token,
        questions: state.questions
    }
}

export default(
	connect(
		mapStateToProps,
		null,
	)(Search)
)