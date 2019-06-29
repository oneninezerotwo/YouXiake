import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//引入ui
import 'antd-mobile/dist/antd-mobile.css';

//引入路由
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

//引入axios
// import axios from 'axios';

//引入页面
import Housecar from './pages/Housecar/Housecar'
import Viewpassbook from './pages/Viewpassbook/Viewpassbook'
import Travel from './pages/Travel/Travel'
import Checkfunction from './pages/Checkfunction/Checkfunction'


ReactDOM.render(
    <Router>
        <Switch>
           <Route exact path="/hc" component={Housecar} />
           <Route exact path="/vp" component={Viewpassbook} />
           <Route exact path="/tl" component={Travel} />
           <Route exact path="/cf" component={Checkfunction} />
            <App /> 
        </Switch>    
    </Router>,
    document.getElementById('root'));







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
