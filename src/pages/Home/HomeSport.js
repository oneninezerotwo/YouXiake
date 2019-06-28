import React, {Component} from "react";

class HomeSport extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="mIndexSport">
        <div className="mTitle">
          <div className="title__left">
            <span>活动赛事</span>
          </div>
          <a href="#">
            <div className="title__right">
              <span>更多</span>
            </div>
          </a>
        </div>
        <div className="mScroller__image">
          <div className="mScrollX">
            <div className="image__container">
              {
                  this.props.data?this.props.data.map(item=>
                    <a
                    className="image__list"
                    href="#"
                    >
                    <div
                    className="list__image__container"
                    style={{backgroundImage:`url(${item.thumb})`}}></div>
                    <div className="list__desc__container">{item.title}</div>
                    </a>
                    ):''
              }
              
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeSport;