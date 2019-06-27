import React, {Component} from "react";
import {Carousel,WingBlank} from 'antd-mobile';
class HomeRecommend extends Component {
  constructor() {
    super();
  }

  state={

  }

  render() {
    return (
      <div className="mIndex__recommend">
        <div className="mIndexRecommend">
          <div>
              <div className='vux-slider mSwiperBanner'>
                <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >

                {this.props.data.map((item, idx) => <div key={idx} className="vux-swiper-item">
                    <a className="mSwiperBanner__pic"><img alt={item.title} src={item.thumb} style={{height:' 2.4rem'}} /></a>
                    </div>)}
                </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default HomeRecommend;