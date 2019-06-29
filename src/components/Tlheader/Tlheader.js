import React from 'react';
import { withRouter } from "react-router-dom";

//引入css文件
import './Tlheader.css';
//引入头部组件
import { NavBar, Icon } from 'antd-mobile';
//引入走马灯
import { Carousel, WingBlank } from 'antd-mobile';

import pic from './logo.png'
import pic_1 from './pic_1.jpeg'
import pic_2 from './pic_2.jpeg'
import pic_3 from './pic_3.jpeg'
import pic_4 from './pic_4.jpeg'
import pic_5 from './pic_5.jpeg'
class Tlheader extends React.Component {
    state = {
        data: [pic_1, pic_2, pic_3, pic_4, pic_5],
        imgHeight: 176,
        word: ['#2019春天花事# 中朝建交70周年探访神秘朝鲜，抛去你的偏见，带你揭秘真实朝鲜',
            '#2019春天花事# 中朝建交70周年探访神秘朝鲜，抛去你的偏见，带你揭秘真实朝鲜',
            '#2019春天花事#   每每想起大西北之行，令我回味无穷，记忆犹新',
            '#2019春天花事# 「西北风」|发生在烈日炎炎的夏日啊',
            '#2019春天花事# 【冬行漫记】神秘又神奇的阿三国，专治各种不服（瓦拉纳西+北印金三角5日画圈圈）（完结）'

        ]
    }
    // componentDidMount() {
    //     // simulate img loading
    //     setTimeout(() => {
    //         this.setState({
    //             data: [pic_1, pic_2, pic_3,pic_4,pic_5],
    //         });
    //     }, 100);
    // }
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        style={{ background: '#232323', color: 'orange' }}
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={
                            '我的'
                        }
                    ><img src={pic} style={{ width: '59px', height: '23px' }} /></NavBar>
                </div>
                {/* 走马灯 */}
                <div>
                    <Carousel
                        autoplay={true}
                        infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map((item, val) => {
                            return (
                                <div style={{ position: "relative" }} key={val}>
                                    <a
                                        key={val}
                                        href="http://www.alipay.com"
                                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                    >
                                        <img
                                            src={item}
                                            alt="#"
                                            style={{ width: '100%', verticalAlign: 'top' }}
                                            onLoad={() => {
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                    </a>
                                    <h3 style={{
                                        position: "absolute", top: "50%", left: '0px',
                                        zIndex: '2', color: '#fff', padding: '0 20px', overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        webkitLineClamp: '2',
                                        webkitBoxOrient: 'vertical',
                                        lineHeight: '30px'
                                    }}>{this.state.word[val]}</h3>
                                </div>


                            )

                        })}
                    </Carousel>
                </div>
               {/* 标题 */}
                    <div className="mobile_ggw">
                        <a href="javascript:;">
                            <img src="https://gallery.youxiake.com/Public/Data/upload/201903/13/80031552462090.png"/>
                        </a>
                    </div>

            </div>

        )
    }
}
// 编程式导航
export default withRouter(Tlheader)