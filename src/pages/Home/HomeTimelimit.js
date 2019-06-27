import React, {Component} from "react";
import {Carousel, WingBlank} from 'antd-mobile';

class HomeTimelimit extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="mIndex__timelimit">

        <Carousel infinite className='vux-slider mIndex__timelimit__swiper'>
          {this.props.data.map(item => <div className="vux-swiper-item">
              <a href="#">
                <div className="mIndex__box__head">
                  <i></i>
                  <div className="mIndex__timelimit__timer">
                    <span className="mIndex__timelimit__blank">距离结束</span>
                    <span className="mIndex__timelimit__day">1天</span>
                    <span className="mIndex__timelimit__hour">00</span>
                    <span className="mIndex__timelimit__colon">:</span>
                    <span className="mIndex__timelimit__minute">06</span>
                    <span className="mIndex__timelimit__colon">:</span>
                    <span className="mIndex__timelimit__second">55</span>
                  </div>
                </div>
                <div className="mIndex__timelimit__box">
                  <div
                    className="mIndex__timelimit__pic"
                    style={{backgroundImage:`url(${item.img})`}}></div>
                  <div className="mIndex__timelimit__right">
                    <div className="mIndex__timelimit__title">{item.pname}</div>
                    <div className="mIndex__timelimit__prices">
                      <div className="prices__left">
                        <div className="mIndex__timelimit__price">￥<span>{item.price}</span>
                        </div>
                        <div className="mIndex__timelimit__originPrice">￥{item.orig_price}</div>
                      </div>
                      <div className="mIndex__timelimit__lave">
                        仅限{item.stock}个
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>)}
        </Carousel>

      </div>

    )
  }
}

export default HomeTimelimit;