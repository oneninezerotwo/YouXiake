import React, {Component} from 'react';

class HomeMainNav extends Component {
    constructor() {
        super();

    }

  render() {
    return (
      <div className="mIndexMainNav">
          {this.props.data.map(item=>
            <a className="mIndexMainNav__box" href="#">
                <div
                style={{backgroundImage: `url(${item.thumb})`,backgroundColor:'rgb(255, 255, 255)'}}>
            </div>{item.title}
            </a>
            )}
        {/* <a className="mIndexMainNav__box" href="https://m.youxiake.com/cn">
          <div
            style={{backgroundImage: 'url(https://qimg4.youxiake.com/upload/201906/18/12341560855344.png)',backgroundColor: 'rgb(255, 255, 255)'}}>
        </div>国内游
        </a> */}
        
      </div>
    )
  }
}

export default HomeMainNav;
