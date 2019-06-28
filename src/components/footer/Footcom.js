import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';

import { TabBar, Flex } from 'antd-mobile';

import './Footcom.css';
import './antd-mobile.css';

 
const requireContext = require.context('../../assets/footcom',true);
const projectImg = requireContext.keys().map(requireContext);


class Footcom extends Component{
    constructor(){
        super();
        this.state={
            pages: [
                {
                  name: 'Home',
                  text: '首页',
                  path: '/home',
                  url:projectImg[1],
                  acturl:projectImg[0]
                }, {
                  name: 'Hot',
                  text: '热门',
                  path: '/hot',
                  url:projectImg[5],
                  acturl:projectImg[4]
                },{
                  name: 'Shequ',
                  text: '社区',
                  path: '/shequ',
                  url:projectImg[5],
                  acturl:projectImg[4]
                },{
                  name: 'Quanzi',
                  text: '圈子',
                  path: '/quanzi',
                  url:projectImg[5],
                  acturl:projectImg[4]
                },{
                  name: 'Mine',
                  text: '我的',
                  path: '/mine',
                  url:projectImg[5],
                  acturl:projectImg[4]
                }
              ],
        }
        this.goto = this.goto.bind(this);
    }
    goto(item) {
      let { history } = this.props;
      history.push(item.path);
    
    }
    render(){

        return (
        <div className="Footcom">
            <Flex>
                <Flex.Item>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                        noRenderContent={true}
                        >
                        {
                            this.state.pages.map(item => <TabBar.Item
                            title={item.text}
                            key={item.name}
                            icon={<img src={item.url} style={{ width: '22px',height:'22px' }} alt="" />}
                            selectedIcon={<img src={item.acturl} style={{ width: '25px',height:'25px' }} alt="" />}
                            selected={this.props.match.url === item.path}
                            onPress={this.goto.bind(this, item)}
                            >

                            </TabBar.Item>)
                        }
                    </TabBar>
                </Flex.Item>
            </Flex>
        </div>
        );
    }
}


export default withRouter(Footcom);