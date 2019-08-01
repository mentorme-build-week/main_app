import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Home from '../src/components/Home';
import PrivateRoute from '../src/components/PrivateRoute'
import { connect } from 'react-redux'


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
      </div>
    );
  }
}

export default App;