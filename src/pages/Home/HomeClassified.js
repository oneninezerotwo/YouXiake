import React, {Component} from 'react';

class HomeClassified extends Component {
  constructor() {
    super();

  }

  render() {
    return (
        this.props.data?<div className = "mIndexClassified" > <div className="mIndexClassified__container">
        <div className="mTitle">
          <div className="title__left">
            <span>{this.props.data.content}</span>
          </div>
          <a href="#">
            <div className="title__right">
              <span>更多</span>
            </div>
          </a>
        </div>
        <div className="mIndexClassified__content">
          <a href="#">
            <div className="content__banner" style={{backgroundImage:`url(${this.props.data.banner[0].thumb})`}}>
              <div className="banner__info">
                <div className="banner__title">{this.props.data.banner[0].title}</div>
                <div className="banner__price">
                  <span>￥</span>
                  <span>{this.props.data.banner[0].price_label}</span>
                  <span>起</span>
                </div>
              </div>
            </div>
          </a>
          <div className="content__route">
              {
                  this.props.data.data.map(item => 
                        <a href='#'>
                            <div className="route">
                            <div className="route__img"
                                style={{backgroundImage:`url(${item.thumb})`}}
                                >
                                <div className="route__city">
                                <span>{item.place_label}</span>
                                </div>
                            </div>
                            <div className="route__desc">
                                <div className="desc__title">
                                <span>{item.title}</span>
                                </div>
                                <div className="desc__price">
                                <span className="price__fh">￥</span>
                                <span className="price__jg">{item.price_label}</span>
                                <span className="price__dw">起</span>
                                </div>
                            </div>
                            </div>
                        </a>
                  )
              }
            
          </div>
        </div>
      </div>
    </div>:''
    
    )
  }
}

export default HomeClassified;