import React, { Component } from 'react';

import { Checkbox } from 'antd';
import { Link, Redirect } from "react-router-dom";
import Mask from '../../components/Mask/Mask';
import xiao from "../../img/arrowleft.png"
import './Register.scss'
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
            phoneNum: '',
            isMask: 0,
            message: '',
            isLogin: false,
            loginFlag: false
        }
    }
    render() {
        if (this.state.loginFlag) {
            return <Redirect to={{ pathname: "/timer" }} />;
        }
        return (
            <div className="phone">
                <div className="notice">
                    <img src="../../img/notice.png" />
                    <span>助力每个旅行梦想，注册即送388元大礼包</span>
                </div>
                <div className="phone_container">
                    <div className="has_account">
                        <img src={xiao} />
                        <span>
                            <Link to="/login" style={{ color: '#333' }}>
                                已有账号
                </Link>
                        </span>
                    </div>
                    <div className="container__logo">
                    </div>
                    <Tab changeNum={this.changeNum.bind(this)} getValue={this.state.phoneNum} />
                    <div className="container__submit container__submit--gray" style={this.state.isChecked ? this.state.style : {
                        color: ' #999',
                        background: '#e5e5e5', position: 'relative'
                    }} onClick={this.sendVerify.bind(this)}  >发送验证码
                     {
                            this.state.isLogin ? (<span style={{ display: "block" }} className="show">{this.state.message}</span>) : ''
                        }
                    </div>

                    <div className="agree">
                        <Checkbox onClick={this.chageColor.bind(this)}></Checkbox>
                        已阅读并同意<span>《注册服务协议》</span><span>和</span><span>《隐私政策》</span></div>
                    <div className="mLogin__xcx" onClick={this.isMaskshow.bind(this)}><p>体验"游侠客"微信小程序</p></div>
                </div>
                {
                    this.state.isMask ? <Mask isMaskhide={this.isMaskhide.bind(this)} /> : null
                }

            </div >
        )
    }
    chageColor(e) {
        e.preventDefault();
        if (e.target.checked) {
            this.setState({
                isChecked: !this.state.isChecked
            })
        }
    }
    sendVerify() {
        let phoneNum = this.state.phoneNum;
        console.log(phoneNum)
        console.log(this.state.isChecked)
        if (phoneNum) {
            if (this.state.isChecked) {
                if ((/^1[3-9]\d{9}$/).test(phoneNum)) {
                    sessionStorage.setItem('username', phoneNum);
                    this.setState({
                        loginFlag: true
                    })
                } else {
                    this.setState({
                        message: '请输入手机号正确格式',
                        isLogin: true
                    })
                    setTimeout(() => {
                        this.setState({
                            isLogin: false
                        });
                    }, 1000);
                }
            } else {
                this.setState({
                    message: '请同意使用协议',
                    isLogin: true
                })
                setTimeout(() => {
                    this.setState({
                        isLogin: false
                    });
                }, 1000);
            }

        } else {
            this.setState({
                message: '手机号不能为空',
                isLogin: true
            })
            setTimeout(() => {
                this.setState({
                    isLogin: false
                });
            }, 1000);
        }
    }

    changeNum(e) {
        this.setState({
            phoneNum: e.target.value
        })
    }
    isMaskshow() {
        this.setState({
            isMask: 1
        })
    }
    isMaskhide() {
        this.setState({
            isMask: 0
        })
    }
}
export default Phone;

