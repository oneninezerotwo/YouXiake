import React, {Component} from "react";

export default class HomeTheme extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      this.props.data?
      <div class="mIndexTheme">
        <div class="mTitle">
          <div class="title__left">
            <span>多彩主题游</span>
          </div>
          <a href="#">
            <div class="title__right">
              <span>更多</span>
            </div>
          </a>
        </div>
        <div class="mBanner__image">
          <div class="mBanner__left">
            <a href="#">
              <div
                class="left__image"
                style={{backgroundImage:`url(${this.props.data[0].thumb})`}}></div>
            </a>
        
          </div>
          <div class="mBanner__right">
            <div class="right__up">
              <a href="#">
                <div
                  class="up__image"
                  style={{backgroundImage:`url(${this.props.data[1].thumb})`}}></div>
              </a>
            
            </div>
            <div class="right__down">
              <a href="#">
                <div
                  class="down__image"
                  style={{backgroundImage:`url(${this.props.data[2].thumb})`}}></div>
              </a>
              <a href="#">
                <div
                  class="down__image"
                  style={{backgroundImage:`url(${this.props.data[3].thumb})`}}></div>
              </a>
            </div>
          </div>
        </div>
      </div>:''
    )
  }
}