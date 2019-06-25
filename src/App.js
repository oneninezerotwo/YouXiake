import React, { Component } from 'react';
import { Switch, Route,Redirect } from "react-router-dom";
import Home from './pages/Home/Home';

class App extends Component {

  
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/home" component={Home}/>
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }

}

export default App;
