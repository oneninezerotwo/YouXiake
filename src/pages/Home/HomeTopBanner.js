import React, {Component} from "react";
import {Carousel,WingBlank} from 'antd-mobile';

import "./home.css"
class HomeTopBanner extends Component {
    constructor() {
        super();

    }
    state = {
        lb: [{
                title: "云南",
                imgurl: require('../../assets/homeimg/homelb1.jpeg')
            },
            {
                title: "贵州",
                imgurl: require('../../assets/homeimg/homelb2.jpeg')
            },
            {
                title: "无人区",
                imgurl: require('../../assets/homeimg/homelb3.jpg')
            },
            {
                title: "西北",
                imgurl: require('../../assets/homeimg/homelb4.jpg')
            },
            {
                title: "海外清凉避暑",
                imgurl: require('../../assets/homeimg/homelb5.jpg')
            },
            {
                title: "坝上草原",
                imgurl: require('../../assets/homeimg/homelb6.jpg')
            },
            {
                title: "新疆花海",
                imgurl: require('../../assets/homeimg/homelb7.jpg')
            },
            {
                title: "野性俄罗斯",
                imgurl: require('../../assets/homeimg/homelb8.jpg')
            }


        ]
    }
    render() {
        // console.log(this)
        return (
            <div>
                <div className="vux-slider mSwiperBanner">
                    <div className="vux-swiper" style={{ "height": "4.2rem" }}>
                        <div>
                        <Carousel autoplay={true} infinite dots={true} dotStyle={{
                            // float: 'left',
                            // marginLeft:'6px',
                            // display:'inline-block',
                            // verticalAlign: 'middle',
                            // width: '6px',
                            // height: '6px',
                            // borderRadius:'3px',
                            // backgroundColor: '#d0cdd1'
                            }}>
                            {this.state.lb.map(item =>
                                <div key={item.title} className="vux-swiper-item" >
                                    <a className="mSwiperBanner__pic" href="#"><img alt={item.title} src={item.imgurl} className="lbt"/></a>
                                </div>)}
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeTopBanner;