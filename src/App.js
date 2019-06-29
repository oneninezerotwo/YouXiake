import React from 'react';

import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Mine from './pages/Mine/Mine';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Timer from './pages/Register/timer';
import Youji from './pages/Youji/Youji';
import Order from './pages/Order/Order';
import Home from './pages/Home/Home';

 class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/mine" component={Mine} />
          <Route path="/register" component={Register} />
          <Route path="/timer" component={Timer} />
          <Route path="/Login" component={Login} />
          <Route path="/order" component={Order} />
          <Route path="/youji" component={Youji} />
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    )
  }
}

export default App;
