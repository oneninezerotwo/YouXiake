import React, {Component} from 'react'
import { withRouter } from "react-router-dom";

//引入css文件
import './Tllist.css';

//引入axios
import axios from 'axios';

//引入组件
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';


const tabs = [
    { title: <Badge >热门游记</Badge> },
    { title: <Badge >精华游记</Badge> },
    { title: <Badge >最新游记</Badge> },
];
const inactivecolor = "#888";
const activecolor = "#444";


class Tllist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ['https://www.easy-mock.com/mock/5d15c290301d4e0c16c3d3cb/hotTravel',
                'https://www.easy-mock.com/mock/5d15c290301d4e0c16c3d3cb/famousTravek',
                'https://www.easy-mock.com/mock/5d15c290301d4e0c16c3d3cb/newTravel',
            ],
            travellist: [],
        }
    }
    componentDidMount() {
        this.getList('https://www.easy-mock.com/mock/5d15c290301d4e0c16c3d3cb/hotTravel')
    }

    async getList(url) {
        const data = await axios.get(url);
        const finalData = data.data.data.articles;
        this.setState({ travellist: finalData })
        console.log(this.state.travellist)
    }
    render() {
        return (
            <div className="mobile_notes">
                <div>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        tabBarInactiveTextColor={inactivecolor}
                        tabBarActiveTextColor={activecolor}
                        tabBarUnderlineStyle={{ border: '2px solid #ffd800' }}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { this.getList(this.state.url[index]) }  }
                    >
                        {/* display: 'flex', alignItems: 'center', justifyContent: 'center',  */}
                        <div style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
                            {this.state.travellist.map((item, index) => {
                                return (
                                    <div className="mobile_article_item" key={index}>
                                        <div className="f_pic">
                                            <div className="f_pic_t"><img src={item.cover} alt="" /></div>
                                            <div className="f_pic_b">
                                                <img src={item.authorAvatar} alt="" />
                                                <span>{item.author}</span>
                                            </div>
                                        </div>
                                        <div className="f_right">
                                            <div className="f_right_t">{item.title}</div>
                                            <div className="f_right_b"><span>3万</span><span>48</span></div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
                            {this.state.travellist.map((item, index) => {
                                return (
                                    <div className="mobile_article_item" key={index}>
                                        <div className="f_pic">
                                            <div className="f_pic_t"><img src={item.cover} alt="" /></div>
                                            <div className="f_pic_b">
                                                <img src={item.authorAvatar} alt="" />
                                                <span>{item.author}</span>
                                            </div>
                                        </div>
                                        <div className="f_right">
                                            <div className="f_right_t">{item.title}</div>
                                            <div className="f_right_b"><span>3万</span><span>48</span></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
                            {this.state.travellist.map((item, index) => {
                                return (
                                    <div className="mobile_article_item" key={index}>
                                        <div className="f_pic">
                                            <div className="f_pic_t"><img src={item.cover} alt="" /></div>
                                            <div className="f_pic_b">
                                                <img src={item.authorAvatar} alt="" />
                                                <span>{item.author}</span>
                                            </div>
                                        </div>
                                        <div className="f_right">
                                            <div className="f_right_t">{item.title}</div>
                                            <div className="f_right_b"><span>3万</span><span>48</span></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Tabs>

                </div>

            </div>

        )
    }
}
// 编程式导航
export default withRouter(Tllist)