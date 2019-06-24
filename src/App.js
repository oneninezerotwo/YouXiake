import React from 'react';

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login/login';
import Register from './pages/register/register';
import Phone from './pages/register/phoneregister';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/phone" component={Phone} />
      </Switch>
    </Router>
  );
}

export default App;
