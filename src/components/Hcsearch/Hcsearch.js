import React from 'react';
import { withRouter } from "react-router-dom";

//引入flex组件
import { Flex, WhiteSpace } from 'antd-mobile';
//引入css文件
import './Hcsearch.css'
//引入一张对的图片
import picTure from './1.png'
//引入一个事件对象
import emitter from "../../common/ev"

class Hcsearch extends React.Component {
    state = {
        searchList: ["全部", "跟团游", "当地玩乐", "自由行", "邮轮", "大型活动", "体育赛事", "分享会"],
        num: 0,
        orderList: ["默认排序", "行程天数", "筛选"],
        orderNum: 0,
        bool: false,
        url: ['https://www.easy-mock.com/mock/5d1356628f31ca7a37d266a6/list/housecar',
            'https://www.easy-mock.com/mock/5d1356628f31ca7a37d266a6/list/hcarSecond',
             'https://www.easy-mock.com/mock/5d1356628f31ca7a37d266a6/list/localtour',
             'https://www.easy-mock.com/mock/5d1356628f31ca7a37d266a6/list/freeDrive',
             'https://www.easy-mock.com/mock/5d1356628f31ca7a37d266a6/list/shiptour'
        ],
        // msg: '',
    };
    

    toggle(index) {
        this.setState({ num: index });
        // emitter.emit("callMe",this.state.url[index])
        console.log(this)
       
    };
    checkItem(index) {
        this.setState({ orderNum: index });
        console.log(111)
    }
    showSort(){
        this.setState({bool: !this.state.bool})
    };
    cb(value){
        emitter.emit("callMe",value)
    }
    
   


    render() {
        return (
            <div >
                <div className="hc-search"  style={{position: 'fixed',top: '44px',left: '0px',background: '#fff'}}>
                    <ul className="">
                        {this.state.searchList.map((item, index) => {
                            return <li key={index} onClick={this.toggle.bind(this, index)} 
                                onMouseDown={this.cb.bind(this,this.state.url[index])}
                                className={index === this.state.num ? 'active' : ''}>{item}</li>
                        })}
                    </ul>
                </div>

                <div style={{ paddingTop: '5px', height: '30px' ,background: "#fff",position: 'fixed',top: '84px',left: '0px',width: "375px"}}>
                    <Flex>
                        <Flex.Item><div className="filter-box" onClick={this.showSort.bind(this)}>
                            <span className="filter-choose-text">默认排序</span>
                            <img src="" className="filter-default-image" />
                        </div></Flex.Item>
                        <Flex.Item><div className="filter-box"><span className="filter-default-text">行程天数</span>
                            <img src="" className="filter-default-image" />
                        </div></Flex.Item>
                        <Flex.Item><div className="filter-box"><span className="filter-default-text">筛选</span>
                            <img src="" className="filter-default-image" />
                        </div></Flex.Item>
                    </Flex>
                </div>
                {/* 三选一排序 */}
                    <div style={{ height: '135px',position: 'fixed',top: '120px',width: '375px',left: '0px',background: '#fff',display: this.state.bool ? 'block' : 'none'}} >
                        <div className="filter__default_">
                            {this.state.orderList.map((item, index) => {
                                return <div className="filter__default__list" key={index}
                                    onClick={this.checkItem.bind(this, index)} ><span>{item}</span>
                                    <img src={this.state.orderNum === index ? picTure : ''} alt="" className="filter_choosed" />
                                </div>
                            })}
                        </div>
                    </div>
                  
               

            </div>

        )
    }
}
// 编程式导航
export default withRouter(Hcsearch)