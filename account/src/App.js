import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../src/components/Login';


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
      </div>
    );
  }
}

export default App;
