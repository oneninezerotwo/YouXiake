import React, { Component } from 'react';

import { Tabs } from 'antd';
import './tab.css';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
class Tab extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="手机号注册" key="1">
                        <div className="mLogin__inputbox">
                            <input type="text" placeholder="请输入手机号" onChange={this.props.changeNum} style={{
                                fontSize: '.34rem', paddingLeft: '.2rem',
                            }} /></div>
                    </TabPane>
                    <TabPane tab="手机号注册" key="2">
                        <div className="mLogin__inputbox">
                            <input type="text" placeholder="请输入邮箱" /></div>
                    </TabPane>

                </Tabs>
            </div>
        )
    }

}
export default Tab;



