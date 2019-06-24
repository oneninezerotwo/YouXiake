import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { Link } from "react-router-dom";

import './phone.scss'
import Tab from '../../components/tab/tab'
class Phone extends Component {
    constructor() {
        super()
        this.state = {
            isChecked: 0,
            style: {
                'color': '#333',
                'background': '#fed101'
            },
            phoneNum: ''
        }
    }
    render() {
        return (
            <div className="phone">
                <div className="notice">
                    <img src="../../img/notice.png" />
                    <span>助力每个旅行梦想，注册即送388元大礼包</span>
                </div>
                <div className="phone_container">
                    <div className="has_account">
                        <img src="../../img/arrowleft.png" />
                        <span>
                            <Link to="/register" style={{color:'#333'}}>
                                已有账号
                </Link>
                        </span>
                    </div>
                    <div className="container__logo">
                    </div>
                    <Tab phoneNum={this.state.phoneNum} onChange={this.changeNum.bind(this)} />

                    <div className="container__submit container__submit--gray" style={this.state.isChecked ? this.state.style : {
                        color: ' #999',
                        background: '#e5e5e5'
                    }}
                    >发送验证码</div>
                    <div className="agree">
                        <Checkbox onClick={this.chageColor.bind(this)}></Checkbox>
                        已阅读并同意<span>《注册服务协议》</span><span>和</span><span>《隐私政策》</span></div>
                    <div className="mLogin__xcx"><p>体验"游侠客"微信小程序</p></div>
                </div>
            </div >
        )
    }
    chageColor(e) {
        if (e.target.checked) {
            this.setState({
                isChecked: 1
            })
        } else {
            this.setState({
                isChecked: 0
            })
        }

    }
    changeNum(e) {
        this.setState({
            phoneNum: e.target.value
        })

    }
}
export default Phone;

