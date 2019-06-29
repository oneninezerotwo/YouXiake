import React,{Component} from 'react';
import { Tabs, WhiteSpace,Icon} from 'antd-mobile';

import Footcom from '../common/footer/Footcom';
import {getData} from '../../api';
import './quanzi.css'


class Quanzi extends Component{
    constructor(){
        super();
        this.state = {
            tabs:[{
                title:'城市圈'
            },{
                title:'兴趣圈'
            }],
            qzData:[],
            isloading:false
        }
    }
    async componentWillMount(){
        let {data:{data:qzData}} = await getData('/quan?type=1');
        this.setState({
            qzData,
            isloading:true
        })
    }
    goto=(id)=>{
        let {history} = this.props;
        // console.log(id)
        history.push({
            pathname:`qzdetails/${id}`
        })
    }
    render(){
        let {tabs,qzData,isloading} = this.state;
        // console.log(qzData)
        return(
            <div className="Quanzi">
                <div>
                    <img src={require('../../img/qz_banner.png')} style={{width:'100%'}} alt="qz_bj"/>
                </div>
                <div style={{padding: '0.2rem 0px 1rem 0.2rem'}}>
                    <WhiteSpace />
                        <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} onChange={async(tab, index)=>{
                            this.setState({
                                isloading:false,
                            })
                            let {data:{data:qzData}} = await getData(`/quan?type=${index+1}`);
                            this.setState({
                                isloading:true,
                                qzData
                            })
                        }}>
                        {
                           
                            <ul>
                                {
                                    isloading?
                                    qzData.map((item,idx)=>
                                        <li className='qzsort' key={idx} className="qzs" onClick={this.goto.bind(this,item.id)}> 
                                            <div>
                                                <img src={item.cover} style={{width:'100%'}} alt={item.id}/>
                                                <span className='qzs-name'>{item.name}</span>
                                            </div>
                                            <div className='qzs-xijie'>
                                                <span><Icon type={'check-circle'} size={'xxs'}/>{item.hot_value}</span>
                                                <span><Icon type={'cross-circle-o'} size={'xxs'}/>{item.member_num}</span>
                                            </div>
                                        </li>
                                    )
                                    :   <div className="loading">
                                            加载中...
                                        </div>
                                }
                            </ul>
                           
                        }
                        </Tabs>
                    <WhiteSpace />
                </div>
                <Footcom/>
            </div>
        )
    }
}
export default Quanzi;