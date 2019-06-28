import React,{Component} from 'react';
import {Badge ,Button} from 'antd-mobile';
import Footcom from '../../components/footer/Footcom.js';
import './Mine.css';
import {getData} from '../../api';

class Mine extends Component{
    constructor(){
        super();
        this.state={
            // login:false,
            login:true,
            userName:'亲爱的用户',
            focus:0,
            youji:0,
            photo:0,
            daijinquan:7,
            coins:0,
            jifen:58,
            data:[]
        }
    }
    async componentWillMount(){
        let log = localStorage.getItem("token")
        let userName = localStorage.getItem("name")
        if(log){
            this.setState({
                login:true,
                userName
            })
        }else{
            this.setState({
                login:false,
            })
        }
        let {data:{status,data}} = await getData('/details',{params:{userTel:log}});
        if(status===303){
            this.setState({
                data
            })
        }
    }
    tuichu=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        this.setState({
            login:false,
            data:[]
        })
    }
    render(){
        return(
            <div className="Mine">
                <header 
                    style={{
                        height:'2.63rem',
                        background:'url("mineBack.png")no-repeat 50%/cover',
                        padding:'0.63rem 0 0 0.3rem'}}>
                    {/* 头部上半部分 */}
                    <div 
                        style={{
                            display:'flex',
                            verticalAlign:'center'}}>
                        {/* 左侧头像 */}
                        <div className='mine' 
                            style={{
                                background:'url("mine.png")no-repeat 50%/cover',
                                width:'1.45rem',
                                height:'1.2rem',
                                marginRight:'0.25rem'}}/>
                        {/* 右侧称呼 */}
                        {this.state.login
                            ?<div className='user'>
                                {this.state.userName + ',您好'}
                            </div>
                            :<div className='logReg'>
                                <p onTouchEnd={()=>{this.props.history.push('/login')}}>去登录/注册</p>
                                <span>新用户注册送388元大礼包</span>
                            </div>}
                    </div>
                </header>
                <main>
                    <div className='actOrder'>
                        <div style={{overflow:'hidden',marginBottom:'0.3rem'}}>
                            <span style={{float:'left',fontSize:'0.32rem',fontWeight:'bold'}}>活动订单</span>
                            <span style={{float:'right',fontSize:'0.28rem'}}>全部&gt;</span>
                        </div>
                        <div className='sort' style={{display:'flex'}}>
                            <div>
                                <span style={{background:'url("mine1.png")no-repeat 50%/cover'}}></span>
                                <span>待付款</span>   
                            </div>
                            <div style={{position:'relative'}}>
                                <span style={{background:'url("mine2.png")no-repeat 50%/cover'}}></span>
                                <span>报名成功</span>
                                <Badge text={this.state.data.length} overflowCount={10}/>
                            </div>
                            <div>
                                <span style={{background:'url("mine3.png")no-repeat 50%/cover'}}></span>
                                <span>替补</span>
                            </div>
                            <div>
                                <span style={{background:'url("mine4.png") no-repeat 50%/cover'}}></span>
                                <span>待评价</span>
                            </div>
                            <div>
                                <span style={{background:'url("mine5.png")no-repeat 50%/cover'}}></span>
                                <span>退款/取消</span>
                            </div>
                        </div>
                    </div>
                    <div style={{marginBottom:'0.2rem'}}>
                        {this.state.login
                            ?<div style={{background:'#fff',padding:'0 0.2rem 0 0.3rem'}}>
                                <div className='logWallet' style={{height:'0.88rem',fontSize:'0.32rem',fontWeight:'700',lineHeight:'0.88rem',marginBottom:'0.1rem'}}>我的钱包</div>
                                <div style={{display:'flex',paddingBottom:'0.4rem'}}>
                                    <div className='daijinquan' style={{display:'flex',flex:'1',flexDirection:'column',textAlign:'center'}}>
                                        <span style={{marginBottom:'0.15rem'}}>
                                            <span style={{fontWeight:"700"}}>{this.state.daijinquan}</span>张
                                        </span>
                                        <span >
                                            <i style={{background:'url("mine2-1.png")no-repeat 50%/cover',width:'0.28rem',height:'0.28rem',display:'inline-block',marginRight:'0.05rem'}}/>
                                            代金券</span>
                                    </div>
                                    <div className='金币' style={{display:'flex',flex:'1',flexDirection:'column',textAlign:'center'}}>
                                        <span style={{marginBottom:'0.15rem'}}>
                                            <span style={{fontWeight:"700"}}>{this.state.coins}</span>个
                                        </span>
                                        <span>
                                            <i style={{background:'url("mine2-2.png")no-repeat 50%/cover',width:'0.28rem',height:'0.28rem',display:'inline-block',marginRight:'0.05rem'}}/>
                                            金币</span>
                                    </div>
                                    <div className='daijinquan' style={{display:'flex',flex:'1',flexDirection:'column',textAlign:'center'}}>
                                        <span style={{marginBottom:'0.15rem'}}>
                                            <span style={{fontWeight:"700"}}>{this.state.jifen}</span>个
                                        </span>
                                        <span>
                                            <i style={{background:'url("mine2-3.png")no-repeat 50%/cover',width:'0.28rem',height:'0.28rem',display:'inline-block',marginRight:'0.05rem'}}/>
                                            积分</span>
                                    </div>
                                </div>
                             </div>
                            :<div style={{background:'#fff',height:'0.88rem',fontSize:'0.32rem',fontWeight:'700',lineHeight:'0.88rem',marginBottom:'0.1rem',padding:'0 0.2rem 0 0.3rem',overflow:'hidden'}}>
                                <span style={{float:'left'}}>我的钱包</span>
                                <span style={{float:'right'}}>&gt;</span>
                             </div>
                        }
                    </div>
                    <div style={{background:'#fff',padding:'0.4rem 0.2rem 0 0.3rem'}}>
                        <div style={{fontSize:'0.32rem',fontWeight:'700',marginBottom:'0.5rem'}}>
                            我的服务
                        </div>
                        <div className='myServe'>
                            <div>
                                <span style={{background:'url("mine3-1.png")no-repeat 50%/cover',backgroundSize:'0.38rem 0.42rem'}}/>
                                <span>签证订单</span>
                            </div>
                            <div>
                                <span style={{background:'url("mine3-2.png")no-repeat 50%/cover',backgroundSize:'0.38rem 0.42rem'}}/>
                                <span>集市订单</span>
                            </div>
                            <div>
                                <span style={{background:'url("mine3-3.png")no-repeat 50%/cover',backgroundSize:'0.38rem 0.42rem'}}/>
                                <span>集市购物车</span>
                            </div>
                            <div>
                                <span style={{background:'url("mine3-4.png")no-repeat 50%/cover',backgroundSize:'0.38rem 0.42rem'}}/>
                                <span>常用收货地址</span>
                            </div>
                            <div>
                                <span style={{background:'url("mine3-5.png")no-repeat 50%/cover',backgroundSize:'0.38rem 0.42rem'}}/>
                                <span>常用出行人</span>
                            </div>
                            <div>
                                <span style={{background:'url("mine3-6.png")no-repeat 50%/cover',backgroundSize:'0.38rem 0.42rem'}}/>
                                <span>修改密码</span>
                            </div>
                            <div>
                                <span style={{background:'url("mine3-7.png")no-repeat 50%/cover',backgroundSize:'0.38rem 0.42rem'}}/>
                                <span>在线客服</span>
                            </div>
                            <div >
                                <span style={{background:'url("mine3-8.png")no-repeat 50%/cover',backgroundSize:'0.38rem 0.42rem'}}/>
                                <span>游侠分享</span>
                            </div>
                        </div>
                    </div>
                    <div className="tuichu">
                        <Button type="warning" onClick={this.tuichu.bind(this)}>退出</Button>
                    </div>
                </main>
                <Footcom/>
            </div>
        )
    }
}
export default Mine;
