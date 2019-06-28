import React, { Component } from 'react';
import './Order.css'
import Footer from '../../components/Footer/Footer'

class Order extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div className="mHead__container border_bottom">
                    <div class="mHead__container__back"></div>
                    <div className="mHead__container__title">活动订单</div>
                </div>
                <div className="mActivityOrder__nav"><ul className="nav__tab"><li className="tab__item tab__active">全部</li><li className="tab__item">待付款</li><li className="tab__item">报名成功</li><li className="tab__item">替补</li><li className="tab__item">待评价</li></ul>
                </div>
                <div className='tablist'>
                    <div className='tabbox'></div>
                    <div className='tabbox'></div>
                    <div className='tabbox'></div>
                    <div className='tabbox'></div>
                </div>
                <div className="no__data__tips"><div className="mVisaOrderLists__null"></div> <div className="mVisaOrderLists__nullMsg">暂时没有订单</div></div>
                <Footer />
            </div>
        )
    }
}
export default Order;