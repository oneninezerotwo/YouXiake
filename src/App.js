import React from 'react';

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login/login';
import Register from './pages/register/register';
import Phone from './pages/register/phoneregister';
import Order from './pages/order/order';
import Timer from './pages/register/timer';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/timer" component={Timer} />
        <Route path="/phone" component={Phone} />
        <Route path="/order" component={Order} />
      </Switch>
    </Router>
  );
}

export default App;
