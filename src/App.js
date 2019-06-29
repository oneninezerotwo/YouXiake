import React from 'react';

import { HashRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import Login from './pages/Login/login';
import Register from './pages/register/register';
// import Phone from './pages/register/phoneregister';
import Order from './pages/Order/order';
import Youji from './pages/Youji/youji';
import Timer from './pages/register/timer';
import Home from './pages/Home/Home';
import Quanzi from './pages/Quanzi/Quanzi';
import Hot from './pages/Hot/Hot';
import Housecar from './pages/Housecar/Housecar'
import Viewpassbook from './pages/Viewpassbook/Viewpassbook'
import Travel from './pages/Travel/Travel'
import Checkfunction from './pages/Checkfunction/Checkfunction'
import 'antd-mobile/dist/antd-mobile.css';


 class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/timer" component={Timer} />
          {/* <Route path="/phone" component={Phone} /> */}
          <Route path="/Login" component={Login} />
          <Route path="/order" component={Order} />
          <Route path="/youji" component={Youji} />
          <Route path="/home" component={Home} />
          <Route path="/quanzi" component={Quanzi}/>
          <Route path="/hot" component={Hot}/>
          <Route exact path="/hc" component={Housecar} />
          <Route exact path="/vp" component={Viewpassbook} />
          <Route exact path="/tl" component={Travel} />
          <Route exact path="/cf" component={Checkfunction} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    )
  }
}

export default App;
