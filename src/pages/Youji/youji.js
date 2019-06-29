import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { getData } from '../../api';
import './Youji.css';

import { Carousel, WingBlank } from 'antd-mobile';


class youji extends Component {
    state = {
        yj1: [],
        ischeck: 1
    }

    async componentDidMount() {
        let { data: { data } } = await getData('/youji?yj_type=1&limit=5&skip=0');
        let yj1 = data;

        console.log(yj1)

        this.setState({
            yj1
        })
    }
    goto=async (evl)=>{
        this.setState({
            ischeck:evl
        })
        let { data: { data:yj1 } } = await getData(`/youji?yj_type=${evl}&limit=5&skip=0`);
        this.setState({
            yj1,
            ischeck:evl
        })
    }

    render() {
        console.log(this.state.yj1)
        let {ischeck} = this.state;
        let {history} = this.props;
        return (
            <div className="mobile_home">
            <div className="QzDetails-header">
                    <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.goBack()}
                    rightContent={[
                        <Icon key="0" type="ellipsis" />,
                    ]}
                    style={{background:'#000',color:'#fff'}}
                    ><span  style={{color:'#fff'}}>游侠客</span></NavBar>
                </div>
                <div className="mobile_banner" style={{ "height": "211px" }}>
                    <div className="mint-swipe">
                        <div className="mint-swipe-items-wrap">
                            {
                                <Carousel autoplay={true}
                                    infinite
                                  >


                                    <div className="q1" >
                                        <img src={require('../../img/ylb1.jpeg')} />

                                    </div>
                                    <div className="q1" >
                                        <img src={require('../../img/ylb2.jpeg')} />
                                    </div>
                                    <div className="q1" >
                                        <img src={require('../../img/ylb3.jpeg')} />
                                    </div>
                                    <div className="q1" >
                                        <img src={require('../../img/ylb4.jpeg')} />
                                    </div>
                                    <div className="q1" >
                                        <img src={require('../../img/ylb5.jpeg')} />
                                    </div>
                                </Carousel>}
                        </div>
                    </div>
                </div>
                <div className="mobile_ggw">
                    <a>

                        <img src={require('../../img/yq1.png')} />

                    </a>
                </div>
                <div className="mobile_notes">
                    <div className="article_nav">
                        <ul className="nav_big">
                            <li className={ischeck===1?'nav_li active': 'nav_li'}  onClick={this.goto.bind(this,1)}>热门游记</li>
                            <li className={ischeck===2?'nav_li active': 'nav_li'} onClick={this.goto.bind(this,2)}>精华游记</li>
                            <li className={ischeck===3?'nav_li active': 'nav_li'} onClick={this.goto.bind(this,3)}>最新游记</li>
                        </ul>
                    </div>

                
                <div className="home_article_list">
                    {this.state.yj1.map(item =>
                   
                        <div className="mobile_article_item" key={item.cover}>
                            <div className="f_pic">
                                <a className="link">
                                    <img src={item.cover} lazy="loaded"/>
                                </a>
                                <a className="auth">
                                <img  src={item.authorAvatar} className="auth_tx"/>
                                {item.author}
                                </a>

                            </div>
                            <div className="f_right">
                            <h3><a>
                                {item.title}
                                </a>
                            </h3>
                            <div className="article_item_info">
                            <span className="tz_look">
                            <i></i>
                            {item.views}
                            </span>
                            <span className="tz_reply">
                            <i></i>
                            {item.replies}
                            </span>
                            </div>
                            </div>

                        </div>
                    )}
                </div>
                </div>
            </div>


        )

    }
} export default youji;
