import React, {Component} from "react";

export default class HomeGlobal extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      this.props.data?
      <div className="mIndexGlobal">
        <div className="mTitle">
          <div className="title__left">
            <span>全球推荐目的地</span>
          </div>
          <a href="#">
            <div className="title__right">
              <span>更多</span>
            </div>
          </a>
        </div>
        <div className="mBanner__image">
          <div className="mBanner__left">
            <a href="#">
              <div className="left__image" style={{backgroundImage:`url(${this.props.banner[0].thumb})`}}></div>
            </a>
          </div>
          <div className="mBanner__right">
            <a href="#">
              <div
                className="right__image"
                style={{backgroundImage:`url(${this.props.banner[1].thumb})`}}>
                <div>{this.props.banner[1].title}</div>
              </div>
            </a>
            <a href="#">
              <div
                className="right__image"
                style={{backgroundImage:`url(${this.props.banner[2].thumb})`}}>
                <div>{this.props.banner[2].title}</div>
              </div>
            </a>
          </div>
        </div>
        <div className="mScroller__image">
          <div className="mScrollX">
            <div className="image__container">
              {this.props.data.map(item=>
                  <a className="image__list"
                    href="#"
                    style={{backgroundImage:`url(${item.thumb})`}}>
                    <div className="list__title">{item.title}</div>
                  </a>
                )}
              
            </div>
          </div>
        </div>
      </div>:''
    )
  }
}