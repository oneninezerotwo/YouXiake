import React, { Component } from 'react';
import { Link } from "react-router-dom";

import 'antd/dist/antd.css';
import './login.css';
import Dialog from '../../components/Dialog/Dialog';
import img from '../../img/nav.png';
import img1 from '../../img/nav1.png';
import img2 from '../../img/nav2.png';
import img3 from '../../img/nav3.png';
import img4 from '../../img/nav4.png';

import img5 from '../../img/1.png';
import img6 from '../../img/2.png';
import img7 from '../../img/3.png';
import img8 from '../../img/4.png';
import img9 from '../../img/5.png';
import img10 from '../../img/6.png';
import img11 from '../../img/7.png';
import img12 from '../../img/8.png';


// import Footer from '../../components/footer/footer';

class Register extends Component {
    constructor() {
        super()

        this.state = {
            list: [{
                imgUrl: img,
                name: '待付款'
            }, {
                imgUrl: img1,
                name: '报名成功'
            }, {
                imgUrl: img2,
                name: '替补'
            }, {
                imgUrl: img3,
                name: '待评价'
            }, {
                imgUrl: img4,
                name: '退款/取消'
            }],
            service: [{
                imgUrl: img5,
                name: '签证订单'
            }, {
                imgUrl: img6,
                name: '集市签证'
            }, {
                imgUrl: img7,
                name: '集市购物'
            }, {
                imgUrl: img8,
                name: '常用收货地址'
            }, {
                imgUrl: img9,
                name: '常用出行人'
            }, {
                imgUrl: img10,
                name: '修改密码'
            },
            {
                imgUrl: img11,
                name: '在线客服'
            },
            {
                imgUrl: img12,
                name: '游侠客APP'
            }],
            flag: true
        }

    }
    render() {
        return (
            <div className="main">
                {/* 头部 */}
                <div className="mUserCenterHeader">
                    <div className="header__box">
                        <div className="header__avatar"></div>
                        {sessionStorage.getItem('username') ?
                            (<div className="header__user">
                                <div className="user__name">
                                    <div>{sessionStorage.getItem('username')}</div>
                                    <i><span>完善资料送100元代金券</span></i></div> <div className="user_level">
                                    <span>1 普陀山</span><i style={{ backgroundImage: `url(&quot;&quot;` }}>普通会员</i></div></div>)
                            : (
                                <div className="header__login">去登录/注册<span>新用户注册送388元大礼包</span>
                                </div>)
                        }
                    </div>
                </div>
                {/* 活动订单 */}

                <div className="mUserCenterOrders">
                    <div className="mUserCenterOrders__head">
                        <b>活动订单</b><span>
                            <Link to="/register" style={
                                { color: '#333' }
                            }>全部</Link></span>
                    </div>
                    <div className="mUser__container">
                        {
                            this.state.list.map((item, index) => {
                                return <div className='Orders__container' key={index}>
                                    <img src={item.imgUrl} alt="" />
                                    <span>{item.name}</span>
                                </div>
                            })
                        }
                    </div>
                </div>
                {/*  */}
                <div className="mUserCenterWallet"><div className="mUserCenterWallet__head">我的钱包<i></i></div> </div>
                {/*  */}
                <div className="mUserCenterService"><div className="mUserCenterService__head">我的服务</div>
                    <div className="mUserCenterService">
                        <div className="mUserCenterService__container">
                            <div className="mUserCenterService_row">
                                {
                                    this.state.service.map((item, index) => {
                                        return <a href="/visas/order-list" className="mUserCenterService__box mUserCenterService__box--visa" key={index}>
                                            <img src={item.imgUrl} />
                                            <span>{item.name}</span></a>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

                {/* {sessionStorage.getItem('username') ?
                    <div class="mUserCenter__logout" onClick={this.quit.bind(this)}>退出登录</div> : null} */}
                {
                    sessionStorage.getItem('username') ?
                        (<Dialog />) : null
                }
            </div>
        )
    }
    clickReload() {
        this.setState({
            flag: true
        })
    }

}
export default Register;

