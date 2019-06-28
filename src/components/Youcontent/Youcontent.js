import React, { Component } from 'react'
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import './Youcontent.css'
import axios from 'axios';
import views from '../../img/views.png';
import replies from '../../img/replies.png';


const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
        )}
    </Sticky>
);

export default class Youcontent extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            good: [],
            new: []
        }

    }
    render() {
        return (
            <div className="youtab">
                <StickyContainer>
                    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                        <TabPane tab="热门游记" key="1">
                            {
                                this.state.data.map((item, index) => {
                                    return (<div className="list" key={index}>
                                        <div className="listleft">
                                            <img src={item.cover} />
                                            <p>
                                                <img src={item.authorAvatar} />
                                                <span>{item.author}</span>
                                            </p>
                                        </div>
                                        <div className="listright">
                                            <p>
                                                <span>{item.title}</span>
                                            </p>
                                            <span>
                                                <img src={views} />
                                                {item.views}</span>
                                            <span>
                                                <img src={replies} />
                                                {item.replies}</span>
                                        </div>
                                    </div>)
                                })
                            }

                        </TabPane>
                        <TabPane tab="精华游记" key="2" onClick={this.onTabClick.bind(this)} >
                            {
                                this.state.good.map((item, index) => {
                                    return (<div className="list" key={index}>
                                        <div className="listleft">
                                            <img src={item.cover} />
                                            <p>
                                                <img src={item.authorAvatar} />
                                                <span>{item.author}</span>
                                            </p>
                                        </div>
                                        <div className="listright">
                                            <p>
                                                <span>{item.title}</span>
                                            </p>
                                            <span>
                                                <img src={views} />
                                                {item.views}</span>
                                            <span>
                                                <img src={replies} />
                                                {item.replies}</span>
                                        </div>
                                    </div>)
                                })
                            }
                        </TabPane>
                        <TabPane tab="最新游记" key="3" 
                        >
                            {
                                this.state.good.map((item, index) => {
                                    return (<div className="list">
                                        <div className="listleft">
                                            <img src={item.cover} />
                                            <p>
                                                <img src={item.authorAvatar} />
                                                <span>{item.author}</span>
                                            </p>
                                        </div>
                                        <div className="listright">
                                            <p>
                                                <span>{item.title}</span>
                                            </p>
                                            <span>
                                                <img src={views} />
                                                {item.views}</span>
                                            <span>
                                                <img src={replies} />
                                                {item.replies}</span>
                                        </div>
                                    </div>)
                                })
                            }
                        </TabPane>
                    </Tabs>
                </StickyContainer>
            </div>
        )
    }
    componentDidMount() {
        axios.get('https://bbs.youxiake.com/api/home/articleList').then(res => {
            let data = res.data.data.articles;
            // console.log(data)
            this.setState({
                data
            })
        })
    }
    onTabClick() {
        console.log(1111)

    }
}
