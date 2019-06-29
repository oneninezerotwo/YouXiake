import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";
// import { Provider } from "react-redux";

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
,
 document.getElementById('root')
 );

<<<<<<< HEAD
=======
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






>>>>>>> ljw

serviceWorker.unregister();
