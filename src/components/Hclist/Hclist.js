import React from 'react';
import { withRouter } from "react-router-dom";

import './Hclist.css';
//引入axios
import axios from 'axios';

//引入一个事件对象
import emitter from "../../common/ev"



class Hclist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             arr: [],
             url: 'https://www.easy-mock.com/mock/5d1356628f31ca7a37d266a6/list/housecar',

        }
    }
   
    componentDidMount(){
        this.loadMore(this.state.url);
        // 声明一个自定义事件
        this.eventEmitter = emitter.addListener("callMe",(value)=>{
            this.setState({
                url: value
            })
            console.log(this.state.url)
            this.loadMore(this.state.url);
        });
       
      
    }
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter);
    }
    componentDidUpdate(){
        // console.log(666)
        
         
    }
    async loadMore(url){
        const data = await axios.get(url)
        const result = data.data.data.lines.data;
        // console.log(result);
        this.setState({arr: result});
        // console.log(this.state.arr)

    }

  
    render() {
        return (
            <div style={{paddingTop: '120px',}}>
                {
                    this.state.arr.map((item,index) => {
                        return <div className="route-list" key={index}>
                        <div className="route-list-image">
                            <img src={item.img}/>
                            <div className="list-image-gather"></div>
                        </div>
                        <div className="route-list-desc">
                            <div className="list-desc-title">{item.title}</div>
                            <div className="list-desc-type">
                                <div className="desc-type-time">{item.time}</div> 
                                <div className="desc-type-label">{item.class_type_name}</div>
                            </div>
                            <div className="list-desc-price"> 
                                <div className="price-jg">￥{item.price}起</div>
                                <div className="desc-price-num">{item.num}人已报名</div>
                            </div>
                        </div>
                        </div>      
                        
                    })
                }
                
            
            </div>

        )
    }
}
// 编程式导航
export default withRouter(Hclist)