
import React, { Component } from 'react';
import {
  Button
} from 'antd';
import { Redirect } from "react-router-dom";

import './timer.css'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 30,
      liked: true,
      psw: '',
      isLogin: 0,
      message: '',
      loginFlag: false
    }
  }
  render() {
    if (this.state.loginFlag) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div className="timer">
        <div className="mLogin__inputbox"><input type="password" maxLength="12" placeholder="请输入6-12位密码" onChange={this.getValue.bind(this)} /></div>
        <div className="mt">
          <Button onClick={() => this.handleClick()} type="primary">

            {
              this.state.liked
                ? '获取验证码'
                : `${this.state.count} 秒后重发`
            }
          </Button>
          <Button onClick={this.register.bind(this)}>注册</Button>
          {
            this.state.isLogin ? (<span style={{ display: "block" }} className="show1">{this.state.message}</span>) : ''
          }
        </div>
      </div>
    )
  }
  getValue(e) {
    this.setState({
      psw: e.target.value
    })
  }
  countDown() {
    const { count } = this.state;
    if (count === 1) {
      this.setState({
        count: 60,
        liked: true,
      });
    } else {
      this.setState({
        count: count - 1,
        liked: false,
      });
      setTimeout(this.countDown.bind(this), 1000);
    }
  }
  handleClick = () => {
    const { sendMsg } = this.props;
    const { liked } = this.state;
    if (!liked) {
      return;
    }
    this.countDown()
  }
  register() {
    let value = this.state.psw;
    if (value) {
      if (value.length >= 6 && value.length <= 12) {
        this.setState({
          loginFlag: true
        })
        sessionStorage.setItem('password', value)

      } else {
        this.setState({
          isLogin: 1,
          message: '请输入6-12位密码'
        })
        setTimeout(() => {
          this.setState({
            isLogin: 0
          })
        }, 1000)
      }


    } else {
      this.setState({
        isLogin: 1,
        message: '密码不能为空'
      })
      setTimeout(() => {
        this.setState({
          isLogin: 0
        })
      }, 1000)
    }
  }
}
export default Timer;