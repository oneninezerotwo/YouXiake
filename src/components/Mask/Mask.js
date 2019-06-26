
import React, { Component } from 'react';
import './Mask.css'
import tu from "../../img/xiaochen.png"
// import PropTypes from 'prop-types';
class Mask extends Component {
    // static propTypes = {
    //     isMaskhide: PropTypes.func.isRequired,
    // }
    render() {
        return (
            <div className="vux-actionsheet">
                <div className="weui-mask">
                    <div className="content1">
                        <span className="close" onClick={this.props.isMaskhide}></span>
                        <p>长按识别小程序码</p>
                        <p>体验游侠客微信小程序</p>
                        <img src={tu} />
                        <p>在微信搜索框中搜索“游侠客”</p>
                    </div>
                </div>
            </div>
        )
    }

}
export default Mask;