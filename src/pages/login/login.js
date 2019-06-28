import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import img1 from '../../img/wechat.png';
import img2 from '../../img/qq.png';
import { Link, Redirect } from "react-router-dom";
import Mask from '../../components/Mask/Mask';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
            isLogin: false,
            isMask: 0,
            loginFlag: false
        }
    }
    render() {
        if (this.state.loginFlag) {
            return <Redirect to={{ pathname: "/mine" }} />;
        }
        return (
            <div className="register">
                <div className="mLogin">
                    {/*  */}
                    <div className="mLogin__top">
                        <div className="mLogin__top__logo">
                        </div>
                    </div>
                    {/*  */}
                    <div className="mLogin__content">
                        <div className="mLogin__content__tabs"><span className="cur">账号登录</span><span className="">短信快捷登录</span></div>
                    </div>
                    <div className="mLogin__content__from">
                        <div className="user">
                            <div className="mLogin__inputbox">
                                <input type="text" placeholder="手机号/邮箱" onChange={
                                    this.changeEmail.bind(this)
                                } /></div>
                            <div className="mLogin__inputbox"><input maxLength="12" minLength="6" placeholder="请输入密码" type="password" onChange={
                                this.changePsw.bind(this)
                            } /></div>
                            <div className="mLogin__content__from__forget"><span>忘记密码？</span></div>
                            <div className="mLogin__button mLogin__content__from__login mLoginYellow">
                                <button onClick={this.login.bind(this)}>登录</button>
                                {
                                    this.state.isLogin ? (<span style={{ display: "block" }}>{this.state.message}</span>) : ''
                                }
                            </div>
                            <div className="mLogin__button mLogin__content__from__register">
                                <Link to="/register">手机快速注册</Link>
                            </div>
                            <div className="mLogin__content__from__third"><div className="third__title"><span>第三方登录/注册</span> <div className="third__title__line">
                            </div></div>
                                <div className="third__item">
                                    <div className="third__item__wechat">
                                        <img src={img1} />
                                    </div> <div className="third__item__qq">
                                        <img src={img2} />
                                    </div></div></div>
                            <div className="mLogin__bottom"><p>
                                登录即代表您已经同意我们的
    <span>《注册服务协议》</span></p></div>
                        </div>
                    </div>
                </div >
                <div className="mLogin__xcx" onClick={this.isMaskshow.bind(this)}><p>体验"游侠客"微信小程序</p></div>
                {
                    this.state.isMask ? <Mask isMaskhide={this.isMaskhide.bind(this)} /> : null

                }
            </div>
        )
    }
    changeEmail(e) {
        let value = e.target.value;
        this.setState({
            email: value
        })
        sessionStorage.setItem('username', value)
    }
    changePsw(e) {
        let psw = e.target.value;
        this.setState({
            password: psw
        })
        sessionStorage.setItem('password', psw)
    }
    login() {
        clearTimeout()
        if (!this.state.email) {
            this.setState({
                message: '请输入手机号或邮箱',
                isLogin: true
            })
            setTimeout(() => {
                this.setState({
                    isLogin: false
                });
            }, 1000);

        } else if (!this.state.password) {
            this.setState({
                message: '请输入密码',
                isLogin: true
            })
            setTimeout(() => {
                this.setState({
                    isLogin: false
                });
            }, 1000);

        } else if (this.state.email && this.state.password) {
            this.setState({
                loginFlag: true
            })
            sessionStorage.setItem('username', this.state.email);
        }

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
export default Login;

