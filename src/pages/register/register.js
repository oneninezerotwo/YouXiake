import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './register.css';
import img1 from '../../img/wechat.png';
import img2 from '../../img/qq.png';

class Login extends Component {
    render() {
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
                                <input type="text" placeholder="手机号/邮箱" /></div>
                            <div className="mLogin__inputbox"><input maxLength="20" minLength="6" placeholder="请输入密码" type="password" /></div>

                            <div className="mLogin__content__from__forget"><span>忘记密码？</span></div>
                            <div className="mLogin__button mLogin__content__from__login mLoginYellow"><button>登录</button></div>
                            <div className="mLogin__button mLogin__content__from__register"><button>手机快速注册</button></div>
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
                <div className="mLogin__xcx"><p>体验"游侠客"微信小程序</p></div>

            </div >
        )
    }
}
export default Login;

