import React from 'react';

import { HashRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import Login from './pages/Login/login';
import Register from './pages/register/register';
import Phone from './pages/register/phoneregister';
import Order from './pages/Order/order';
import Timer from './pages/register/timer';
import Home from './pages/Home/Home';
import Quanzi from './pages/Quanzi/Quanzi';
import Hot from './pages/Hot/Hot';



 class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/timer" component={Timer} />
          <Route path="/phone" component={Phone} />
          <Route path="/order" component={Order} />
          <Route path="/home" component={Home}/>
          <Route path="/quanzi" component={Quanzi}/>
          <Route path="/hot" component={Hot}/>
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    )
  }
  }

  export default App;
