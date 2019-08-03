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
            <div>
                <p>{this.state.items}</p>
                 <input placeholder="Search" value={this.state.value} name='value' onChange={this.onChangeHandler}/>
                 <form>
                    <label htmlFor="topic">Select Topic:  </label>
                    <select className="topic" value={this.state.items} onChange={this.inChangeHandler}>
                    <option value=""> Pick </option>
                    <option value="Photography"  name='Photography'> Photography </option>
                    <option value="Programming"  name="Programming"> Programming </option>
                    <option value="Small Business"  name="Small Business"> Small Bussiness </option>
                    </select>
                    <button type="submit">Find</button>
                 </form>
{ this.state.value.length > 0 ? question.map(question => {
    return <Link to={`/questions/${question.id}`}>
    <div key={question}>
    <p>{question.content}</p>
    </div>
    </Link>
 })
 : <p>Search for a question</p>  
                   }
                   
         { this.state.items.length > 0  ?  topic.map(question => {
         return <Link to={`/questions/${question.id}`}>
         <div key={question}>
         <p>{question.content}</p> 
         </div>
           </Link> })
                    :        
         
                    <p>Searching...</p>
                                
                    
}
<Link to={'/post'}><button>Post a question</button></Link>
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