import React from 'react';
import { withRouter } from "react-router-dom";
import emitter from "../../common/ev"



class Boo extends React.Component {
    state = {
        value: '美食',
    };
     cb(msg) {
         console.log(222)
         emitter.emit("callMe",msg)
        }
   
    render(){

        return(
            <div>
                我是非嵌套 2 号
                <button onClick = {this.cb.bind(this,'value')}>点击我</button>
            </div>
        );
    }
}
// 编程式导航
export default withRouter(Boo)