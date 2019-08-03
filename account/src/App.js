import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Home from '../src/components/Home';
import PrivateRoute from '../src/components/PrivateRoute';
import Question from '../src/components/Question';
import Search from '../src/components/Search';
import Post from '../src/components/Post';
import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {

    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path ="/questions/:id" component={Question} />
        <PrivateRoute exact path ="/search" component={Search} />
        <Route exact path='/post' render={(props) =>
            <Post {...props} /> } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      token: state.token
  }
}


export default(
connect(
  mapStateToProps,
  null,
)(App)
)