import React from 'react';
import { withRouter } from "react-router-dom";
import emitter from "../../common/ev"



class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:null,
        };
    }
    componentDidMount(){
        // 声明一个自定义事件
        // 在组件装载完成以后
        this.eventEmitter = emitter.addListener("callMe",(a)=>{
            this.setState({
                msg : a,
            })
        });
    }
    // 组件销毁前移除事件监听
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter);
    }
    render(){
        return(
            <div>
                { this.state.msg }
                我是非嵌套 1 号
            </div>
        );
    }
}
// 编程式导航
export default withRouter(Foo)