import React,{Component} from 'react';
import { Tabs, WhiteSpace} from 'antd-mobile';

import Footcom from '../common/footer/Footcom';
import {getData} from '../../api';
import HotData from './HotData'
import './index.css'


class Hot extends Component{
    constructor(){
        super();
        this.state = {
            tabs:[],
            citys:[],
            tagid:0,
            classid:0,
            hotdata:'',
            isloading:false
        }
    }
    async componentWillMount(){
        let tabs = [];
        let citys = [];
        let {data:{data}} = await getData('/home');
        data[0].tags.forEach(ele => {
            let tabobj = {title:ele.name};
            tabs.push(tabobj);
            citys.push(ele.items);
        });
        this.setState({
            tabs,
            citys,
            tagid:citys[0][0].tag_id,
        })
        let hotdata = await getData(`/hotsort?tag_id=0&class_region_id=2`);
        this.setState({
            isloading:true,
            hotdata:hotdata.data.data
        })
    }
    changeTagId=async(id,classid)=>{
        // console.log(id,classid)
        if(id===999){
            this.props.history.push('home')
            return;
        }
        this.setState({
            tagid:id,
            classid,
            isloading:false
        })
        if(classid === 0){
            let {data:{data:hotdata}} = await getData(`/hotsort?tag_id=${id}&class_region_id=2`);
            this.setState({
                isloading:true,
                hotdata
            })
        }else if(classid === 1){
            let {data:{data:hotdata}} = await getData(`/hotsort?tag_id=${id}&class_region_id=3`);
            this.setState({
                isloading:true,
                hotdata
            })
        }else if(classid === 2){
            let {data:{data:hotdata}} = await getData(`/hotsort?tag_id=${id}&class_region_id=1`);
            this.setState({
                isloading:true,
                hotdata
            })
        }else if(classid === 3){
            let {data:{data:hotdata}} = await getData(`/hotsort?tag_id=${id}&class_region_id=8`);
            this.setState({
                isloading:true,
                hotdata
            })
        }
    }

    render(){
        let {tabs,citys,tagid,classid,hotdata,isloading} = this.state;
        // console.log(tabs)
        return(
            <div className="Hot">
                <div className="tabsbox">
                    <div className='tabs'>
                        <WhiteSpace/>
                            <Tabs  tabs={tabs} initialPage={0} animated={false} useOnPan={false} onChange={(tab, index)=>this.changeTagId(0,index)}>
                            {
                                tabs.map((item,idx)=>
                                    <div className='hotsort' key={idx}>
                                        {
                                            citys[idx].map((item,idx)=>
                                            <span 
                                            key={idx} 
                                            id={item.tag_id} 
                                            className={tagid === item.tag_id ? 'cityspan cityfoues' : 'cityspan'}
                                            onClick={this.changeTagId.bind(this,item.tag_id,classid)}
                                            >
                                                {item.name}
                                            </span>)
                                        }
                                    </div>
                                )
                            }
                            </Tabs>
                        <WhiteSpace />
                    </div>
                </div>
                {
                    isloading?<HotData hotdata={hotdata}></HotData>
                    :<div className="loading">
                        <img src={require('../../img/loading.gif')} alt="loading"/>
                    </div>
                }
                <Footcom/>
            </div>
        )
    }
}
export default Hot;