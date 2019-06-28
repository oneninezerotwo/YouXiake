import React, {Component} from "react";

export default class HomeHero extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      this.props.data?
      <div className="mIndexHero">
        <div className="mTitle">
          <div className="title__left">
            <span>侠魁日历</span>
          </div>
          <a href="#">
            <div className="title__right">
              <span>更多</span>
            </div>
          </a>
        </div>
        <div className="mIndexHero__content">
          <a href="#">
            <div className="content__banner">
              <div
                className="banner__image"
                style={{backgroundImage:`url(${this.props.data.thumb})`}}></div>
              <div className="banner__desc">{this.props.data.title}</div>
            </div>
            <div className="content__heroInfo">
              <div
                className="hero__image"
                style={{backgroundImage:`url(${this.props.data.author_avatar})`}}></div>
              <div className="hero__nick">{this.props.data.author_name}</div>
              <div className="hero__pos">{this.props.data.location}</div>
            </div>
          </a>
        </div>
      </div>:''
      )
  }
}
