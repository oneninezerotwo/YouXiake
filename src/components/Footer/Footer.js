import React, { Component } from 'react'
import footer1 from '../../img/footer1.png'
import footer2 from '../../img/footer2.png'
import footer3 from '../../img/footer3.png'
import footer11 from '../../img/footer11.png'
import footer22 from '../../img/footer22.png'
import footer33 from '../../img/footer33.png'
import './Footer.css'
import { withRouter } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footerNav: [{
                title: '首页',
                name: '/home',
                url1: footer1,
                url2: footer11

            }, {
                title: '订单',
                name: '/order',
                url1: footer2,
                url2: footer22

            }, {
                title: '个人中心',
                name: '/mine',
                url1: footer3,
                url2: footer33
            }
            ],
            currentIdx: 0,
            visitor: ''
        }

    }
    render() {

        return (
            <div className="footernav">{
                this.state.footerNav.map((item, index) => {
                    return (
                        <div className='footerlist' key={index} onClick={this.toggle.bind(this, index)}>
                            <img src={this.state.visitor == item.name ? item.url2 : item.url1} />
                            <span>{item.title}</span>
                        </div>
                    )
                })
            }
            </div>
        )
    }
    toggle(idx) {
        this.setState({
            currentIdx: idx
        })
        var path = `${this.state.footerNav[idx].name}`
        this.setState({ visitor: path });
        this.props.history.push(path)

    }
    componentWillMount() {
        let visitor = this.props.location.pathname;
        // console.log(visitor)
        this.setState({ visitor: visitor });
    }

}
export default withRouter(Footer)