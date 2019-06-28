import React, {Component} from 'react';
import {Carousel,WingBlank} from 'antd-mobile';

class HomeRaiders extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="mIndex__raiders">
        <div className="mIndexRaiders">
          <div className="cover-left"></div>
          <a href="http://www.youxiake.com/gonglue" className="cover"></a>
          <Carousel className="swiper-container swiper-container-vertical swiper-container-ios"
                    vertical
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay
                    infinite
                    >
                    <div className="v-item swiper-slide">
                        <div className="raiders">打卡苏州市内热门景点，交通美食攻略一篇全含</div>
                        <div className="raiders">徒步挑战香港麦理浩径100KM，麦理浩径精华段徒步攻略</div>
                    </div>
                    <div className="v-item swiper-slide">
                        <div className="raiders">大嵛山岛玩法最全攻略|睡在山海间，梦在银河里</div>
                        <div className="raiders">四川最美的10个小众秘境，摄影师都为之疯狂，第一个你绝对想不到</div>
                    </div>
                    <div className="v-item swiper-slide">
                        <div className="raiders">打卡苏州市内热门景点，交通美食攻略一篇全含</div>
                        <div className="raiders">徒步挑战香港麦理浩径100KM，麦理浩径精华段徒步攻略</div>
                    </div>
                    <div className="v-item swiper-slide">
                        <div className="raiders">大嵛山岛玩法最全攻略|睡在山海间，梦在银河里</div>
                        <div className="raiders">四川最美的10个小众秘境，摄影师都为之疯狂，第一个你绝对想不到</div>
                    </div>
            </Carousel>
        </div>
      </div>
    )
  }
}

export default HomeRaiders;
