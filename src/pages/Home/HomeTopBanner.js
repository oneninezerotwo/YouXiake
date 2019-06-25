import React, { Component } from "react";
import {Carousel} from 'antd-mobile';

import "./home.css"
class HomeTopBanner extends Component {
    constructor() {
        super();
    }
    state={
        lb:[
            // title:
        ]
    }
    render() {
        return (
            <div className="vux-slider mSwiperBanner">
                <div className="vux-swiper" style={{ "height": "4.2rem" }}>
                     <Carousel autoplay={true}>

                      {this.state.lb.map(item =>
                        <div key={item.title} className="vux-swiper-item" >

                          <a className="mSwiperBanner__pic"><img alt={item.title} src={item.thumb} className="lbt" /></a>
                        </div>)}
                    </Carousel>
                </div>
               
                
            </div>
        )
    }
}

export default HomeTopBanner;