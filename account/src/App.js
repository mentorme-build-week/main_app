import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Home from '../src/components/Home';
import PrivateRoute from '../src/components/PrivateRoute';
import Question from '../src/components/Question'
import Search from '../src/components/Search'
import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    console.log(this.props.token)

    const { token } = this.props;

    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path ="/questions/:id" component={Question} />
        <PrivateRoute exact path ="/search" component={Search} />
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