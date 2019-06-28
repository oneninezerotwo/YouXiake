import React,{Component} from 'react';


class HomeLocal extends Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div className="mIndexLocal">
          <div className="mIndexLocal__blank"></div>
          <a className="mIndexLocal__img">
            <div className="mIndexLocal__img__pic"></div>
            <div className="mIndexLocal__img__bg" ></div>
            <div className="mIndexLocal__text1">{this.props.local_ad.name}</div>
            <div className="mIndexLocal__text2">{this.props.local_ad.title}</div>
          </a>
          <div className="mIndexLocal__top">
            <a className="top__left" style={{backgroundImage:`url(${this.props.local_banner[0]?this.props.local_banner[0].thumb:''})`}}>
              <i className="bf"></i>
              <div className="m1">
                <span>
                  {
                    this.props.local_banner[0]?this.props.local_banner[0].title:''
                  }
                </span>
              </div>

            </a>
            <div className="top__right">
              <a className="m2" style={{backgroundImage:`url(${this.props.local_banner[0]?this.props.local_banner[1].thumb:''})`}}>
              <div><span>{this.props.local_banner[0]?this.props.local_banner[1].title:''}</span></div>
              </a>

              <a className="m3" style={{backgroundImage:`url(${this.props.local_banner[0]?this.props.local_banner[2].thumb:''})`}}>
              <div><span>{this.props.local_banner[0]?this.props.local_banner[2].title:''}</span></div>
              </a>
            </div>
          </div>
          <div className="mIndexLocal__bottom">
            {this.props.local.map((item,idx) =>
              <a className="bottom__box" key={idx}>
                <div className="box__location">
                  <span>{item.place_label}</span>
                </div>
                <div className="box__pic" style={{ backgroundImage: `url(${item.thumb})` }}></div>
                <div className="box__title">{item.product_name}</div>
                <div className="box__price">
                  <span>￥</span>
                  <b>{item.price_number}</b>
                  <span>起</span>
                </div>
              </a>
            )}


          </div>
        </div>
        )
    }
}

export default HomeLocal;