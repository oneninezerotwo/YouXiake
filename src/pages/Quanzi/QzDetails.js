import React,{Component} from 'react';
import { NavBar, Icon , Button , List } from 'antd-mobile';

import {getData,putData} from '../../api';
import './qzdetails.css'
const Item = List.Item;


class QzDetails extends Component{
    constructor(){
        super();
        this.state = {
            qzdata:[],
            mbsdata:[],
            members:[],
            isqz:false,
            id:'',
            isloading:false,
            isloading2:false
        }
    }
    async componentWillMount(){
        let mbsname = localStorage.getItem("name");
        let {match:{params:{id}}} = this.props;
        let {data:{data:mbsdata}} = await getData(`/qzmbs?qz_type=${id}`);
        console.log(mbsdata)
        let isqz = mbsdata[0].members.some(item=>item.author===mbsname);
        console.log(isqz)
        this.setState({
            isloading:true,
            id,
            mbsdata:mbsdata[0],
            members:mbsdata[0].members,
            isqz
        })
        let {data:{data}} = await getData(`/article?qz_type=${id}&limit=5&skip=0`);
        this.setState({
            qzdata:data,
            isloading2:true
        })
    }
    tuichuqz=async()=>{
        let mbsname = localStorage.getItem("name");
        let {members,id} = this.state;
        members = members.filter(item=>item.author!==mbsname);
        this.setState({
            members,
            isqz:false
        })
        let params = {
            qz_type:id,
            params:members,
            
          }
        putData(`/qzmbs`,params);
    }
    addqz= async ()=>{
        let {members,id} = this.state;
        let mbsobj = {};
        mbsobj.author = localStorage.getItem("name");
        mbsobj.authorAvatar = 'https://img3.youxiake.com/static/images/defaultAvatar.png?imageMogr2/thumbnail/!220x220r/gravity/Center/crop/!220x220/quality/90';
        members.unshift(mbsobj)
        this.setState({
            members,
            isqz:true
        })
        let params = {
            qz_type:id,
            params:members
          }
        await putData(`/qzmbs`,params);
    }
    render() {
        let {qzdata,mbsdata,members,isqz,isloading,isloading2} = this.state;
        let {history} = this.props;
        // console.log(isqz)
        return(
            isloading ?  
            <div className='QzDetails'> 
                <div className="QzDetails-header">
                    <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.goBack()}
                    rightContent={[
                        <Icon key="0" type="ellipsis" />,
                    ]}
                    style={{background:'#000',color:'#fff'}}
                    ><span  style={{color:'#fff'}}>游侠客</span></NavBar>
                </div>
                <div style={{position:"relative",height:"4.22rem"}}>
                    <img src={mbsdata.qzimg} style={{width:'100%',height:'4.22rem'}} alt={mbsdata.qzname}/>
                    <div className="QzDetails-dizhi">
                        <h3>{mbsdata.qzname}</h3>
                        <p>{mbsdata.qzjieshao}</p>
                    </div>
                </div>
                <div className='QzDetails-add'>
                    {
                        isqz?
                        <Button type="warning" style={{position: 'absolute'}}  onClick={this.tuichuqz.bind(this)}>退出圈子</Button>
                        :<Button type="primary" style={{position: 'absolute'}} onClick={this.addqz.bind(this)}>+加入圈子</Button>
                    }
                    
                </div>
                <div className='QzDetails-newjoin'>
                    <h3>最新加入</h3>
                    <ul>
                        {
                            members.map(item=><li key={item.author}>
                                <div>
                                    <img src={item.authorAvatar} alt={item.author}/>
                                    <p>{item.author}</p>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
                <div className='QzDetails-notes'>
                    <h3>本圈游记</h3>
                    <List className="my-list">
                    {
                        isloading2?
                        qzdata.map(item=><Item key={item._id} style={{padding: '.4rem 0 .3rem', borderBottom: '1px solid #e5e5e5',
                        overflow: 'hidden'}}>
                            <div className="my-list-left">
                                <img src={item.cover} alt='mylist'/>
                                <p>
                                    <img src={item.authorAvatar}  alt={item.author}/>
                                    <span>{item.author}</span>
                                </p>
                            </div>
                            <div className="my-list-right">
                                <p>{item.title}</p>
                                <div>
                                    <span><Icon type="check-circle-o" size={'xxs'} />{item.mddName}</span>
                                    <span><Icon type="check-circle-o" size={'xxs'} />{item.views}</span>
                                    <span><Icon type="check-circle-o" size={'xxs'} />{item.replies}</span>
                                </div>
                            </div>
                        </Item>)
                        :   <div className="loading">
                                加载中...
                            </div>
                    }
                    </List>
                </div>
            </div>
            :   <div className="loading">
                    <img src={require('../../img/loading.gif')} alt="loading"/>
                </div>
        )
    }
}
export default QzDetails;