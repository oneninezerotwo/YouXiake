import React, {Component} from "react";

export default class HomeTheme extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      this.props.data?
      <div className="mIndexTheme">
        <div className="mTitle">
          <div className="title__left">
            <span>多彩主题游</span>
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
              <div
                className="left__image"
                style={{backgroundImage:`url(${this.props.data[0].thumb})`}}></div>
            </a>
        
          </div>
          <div className="mBanner__right">
            <div className="right__up">
              <a href="#">
                <div
                  className="up__image"
                  style={{backgroundImage:`url(${this.props.data[1].thumb})`}}></div>
              </a>
            
            </div>
            <div className="right__down">
              <a href="#">
                <div
                  className="down__image"
                  style={{backgroundImage:`url(${this.props.data[2].thumb})`}}></div>
              </a>
              <a href="#">
                <div
                  className="down__image"
                  style={{backgroundImage:`url(${this.props.data[3].thumb})`}}></div>
              </a>
            </div>
          </div>
        </div>
      </div>:''
    )
  }
}