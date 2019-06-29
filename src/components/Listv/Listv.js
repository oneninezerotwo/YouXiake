import React, {Component} from 'react'
import ReactDOM  from 'react-dom';
import { withRouter } from "react-router-dom";

import { PullToRefresh, ListView, Button } from 'antd-mobile';

const data = [
    // {
    //   img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    //   title: 'Meet hotel',
    //   des: '不是所有的兼职汪都需要风吹日晒',
    // },
    // {
    //   img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    //   title: 'McDonald\'s invites you',
    //   des: '不是所有的兼职汪都需要风吹日晒',
    // },
    // {
    //   img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    //   title: 'Eat the week',
    //   des: '不是所有的兼职汪都需要风吹日晒',
    // },
    {
        "title": "#2019\u6625\u5929\u82b1\u4e8b# \u4e00\u82b1\u4e00\u4e16\u754c\uff0c\u4e00\u751f\u4e00\u8349\u539f\u2014\u2014\u7f8e\u4e3d\u7684\u4fc4\u6728\u5858\uff0c\u4eba\u95f4\u7684\u5929\u5802",
        "views": 1567,
        "replies": 66,
        "platform": 1,
        "createTime": 1561453891,
        "tid": 1019532,
        "mddId": 6283,
        "mddName": "\u4fc4\u6728\u5858",
        "summary": "\u4fc4\u6728\u5858\u8bb0\n\u5c71\u5916\u6709\u5c71\u5929\u5916\u5929\uff0c\u82b1\u6d77\u6d69\u701a\u671b\u65e0\u8fb9\u3002\n\u6b64\u53bb\u5f81\u9014\u8def\u6f2b\u6f2b\uff0c\u6602\u9996\u4fe1\u6b65\u5fc3\u5883\u5bbd\u3002\n\u8eab\u5728\u82b1\u4e1b\u6d51\u6b32\u9189\uff0c\u767e\u5a9a\u5343\u5a07\u9001\u67d4\u60c5\u3002\n\u5185\u5fc3\u6709\u82b1\u5904\u5904\u666f\uff0c\u4f55\u60e7\u6628\u591c\u98ce\u96e8\u9aa4\u3002\n\u5148\u9001\u4e0a\u4e00\u9996\u81ea\u521b\u8bd7\uff0c\u5927\u5bb6\u4f1a\u5bf9\u4fc4\u6728\u5858\u7684\u98ce\u666f\u6709\u4e2a\u5927\u6982\u7684\u60f3\u8c61\u3002\u90fd\u8bf4\u4eba\u7684\u4e00\u751f\u4e00\u5b9a\u4e0d\u80fd",
        "cover": "https:\/\/img3.youxiake.com\/o_1de6hu8li18mb1kq01tv0heio7h5l.jpg?imageMogr2\/auto-orient\/thumbnail\/!258x145r\/strip\/gravity\/Center\/crop\/!258x145\/quality\/90",
        "link": "https:\/\/bbs.youxiake.com\/y\/1019532.html",
        "isDigest": 0,
        "authorAvatar": "https:\/\/img2.youxiake.com\/avatar1281747_KG4wx73L47L3.jpg?imageMogr2\/thumbnail\/!60x60r\/gravity\/Center\/crop\/!60x60\/quality\/90",
        "author": "\u5f20\u5c0f\u5f8b",
        "authorGroupName": "LV.16 \u8d64\u57ce\u5c71",
        "authorGroupUrl": "https:\/\/bbs.youxiake.com\/user\/lv.html",
        "authorHomeUrl": "https:\/\/bbs.youxiake.com\/u\/1281747.html",
        "extGroupIds": [],
        "authorLevel": "LV.16",
        "authorIntro": ""
      }, {
        "title": "#2019\u6625\u5929\u82b1\u4e8b# #\u653b\u7565\u6295\u7a3f# #\u5e26\u4f60\u4f53\u9a8c\u4e0d\u4e00\u6837\u7684\u79e6\u7687\u5c9b\uff0c\u6e38\u7956\u5c71\uff0c\u5165\u6d77\u5bfb\u4ed9(\u4e0b)",
        "views": 314,
        "replies": 38,
        "platform": 1,
        "createTime": 1561451836,
        "tid": 1019524,
        "mddId": 8422,
        "mddName": "\u79e6\u7687\u5c9b",
        "summary": "\u6512\u8db3\u529b\u6c14\u4ee5\u540e\u6211\u4eec\u5f00\u59cb\u722c\u5c71\uff0c\u6700\u540e\u7684\u51b2\u523a\uff0c\u4ece\u5c71\u811a\u5230\u5c71\u9876\u4e00\u5171\u4e09\u4e2a\u4ead\u5b50\uff0c\u5206\u522b\u662f\u671b\u4ed9\u4ead\u3001\u4f5b\u5149\u4ead\u548c\u5929\u5973\u4ead\u3002\u8fd9\u4e00\u6bb5\u8def\uff0c\u5171\u4e00\u5343\u591a\u7ea7\u53f0\u9636\uff0c\u53f0\u9636\u4f9d\u9644\u7740\u5c71\u4f53\u9ad8\u8038\u5165\u4e91\uff0c\u4eff\u4f5b\u901a\u5f80\u5929\u5bab\u7684\u5929\u68af\u3002\u9996\u5148\u62b5\u8fbe\u7684\u662f\u671b\u4ed9\u4ead\uff0c\u8fd9\u91cc\u662f\u89c2\u8d4f\u5bf9\u9762\u5c71\u5cf0\u516b\u4ed9\u53f0\u7684\u6700\u4f73\u4f4d\u7f6e\u3002...",
        "cover": "https:\/\/img3.youxiake.com\/o_1de6rtn8b1q0nshr1ibi1m1l8nm16.jpg?imageMogr2\/auto-orient\/thumbnail\/!258x145r\/strip\/gravity\/Center\/crop\/!258x145\/quality\/90",
        "link": "https:\/\/bbs.youxiake.com\/y\/1019524.html",
        "isDigest": 0,
        "authorAvatar": "https:\/\/img2.youxiake.com\/avatar10790447_353a1pJ9r9iV.jpg?imageMogr2\/thumbnail\/!60x60r\/gravity\/Center\/crop\/!60x60\/quality\/90",
        "author": "\u534e\u68a6\u9713\u88f3",
        "authorGroupName": "LV.1 \u666e\u9640\u5c71",
        "authorGroupUrl": "https:\/\/bbs.youxiake.com\/user\/lv.html",
        "authorHomeUrl": "https:\/\/bbs.youxiake.com\/u\/10790447.html",
        "extGroupIds": [],
        "authorLevel": "LV.1",
        "authorIntro": ""
      }, {
        "title": "#2019\u6625\u5929\u82b1\u4e8b# \u3010\u51ac\u884c\u6f2b\u8bb0\u3011\u6d88\u5931\u5728\u54c8\u74e6\u90a3\u7684\u65e7\u65f6\u5149\u91cc\uff08\u54c8\u74e6\u90a32\u65e5+\u6bd4\u5c3c\u4e9a\u83b1\u65af\u5c71\u8c371\u65e5\uff09\uff08\u5b8c\u7ed3\uff09",
        "views": 1903,
        "replies": 63,
        "platform": 1,
        "createTime": 1560743329,
        "tid": 1019139,
        "mddId": 2490,
        "mddName": "\u53e4\u5df4",
        "summary": "\u65f6\u969410\u4e2a\u6708\uff0c\u624d\u7ec8\u4e8e\u6709\u65f6\u95f4\u628a\u53e4\u5df4\u7684\u7167\u7247\u62ff\u51fa\u6765\u6574\u7406\u7f16\u8f91\n\u672c\u4ee5\u4e3a\u65f6\u95f4\u6d41\u901d\uff0c\u90a3\u4e9b\u57cb\u85cf\u5728\u8001\u54c8\u74e6\u90a3\u7684\u8bb0\u5fc6\u65e9\u5df2\u6210\u4e3a\u96f6\u661f\u7684\u788e\u7247\u8ba9\u6211\u62fe\u90fd\u62fe\u4e0d\u8d77\u6765\n\u5374\u672a\u66fe\u60f3\uff0c\u4e00\u5207\u90fd\u5728\u6d4f\u89c8\u7167\u7247\u4e4b\u65f6\uff0c\u6c47\u96c6\u6210\u8bd7\u6253\u5676\u7334\uff0c\u6211\u662fTOKYO,\u4e00\u4e2a\u8bf4\u6587\u827a\u4e5f\u6587\u827a\uff0c\u8bf4\u5f97\u745f\u4e5f",
        "cover": "https:\/\/img3.youxiake.com\/o_1ddhgtekadlr1st3135b1kej1buceh.jpg?imageMogr2\/auto-orient\/thumbnail\/!258x145r\/strip\/gravity\/Center\/crop\/!258x145\/quality\/90",
        "link": "https:\/\/bbs.youxiake.com\/y\/1019139.html",
        "isDigest": true,
        "authorAvatar": "https:\/\/img2.youxiake.com\/avatar10846979_fM8x2OMmxf1k.jpg?imageMogr2\/thumbnail\/!60x60r\/gravity\/Center\/crop\/!60x60\/quality\/90",
        "author": "\u695a\u695a\u51ac\u4eba",
        "authorGroupName": "LV.4 \u4e91\u53f0\u5c71",
        "authorGroupUrl": "https:\/\/bbs.youxiake.com\/user\/lv.html",
        "authorHomeUrl": "https:\/\/bbs.youxiake.com\/u\/10846979.html",
        "extGroupIds": ["53", ""],
        "authorLevel": "LV.4",
        "authorIntro": ""
      }
  ];
  const NUM_ROWS = 20;//20条数据
  let pageIndex = 0; //第0页

  function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
  }

  class Listv extends React.Component {
    constructor(props) {
      super(props);
      const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
      //通过dataSource去获取数据
      this.state = {
        dataSource,
        refreshing: true,
        isLoading: true,
        height: document.documentElement.clientHeight,
        useBodyScroll: false,
      };
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    //     });
    //   }
    // }

    componentDidUpdate() {
      if (this.state.useBodyScroll) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }

    componentDidMount() {
      const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

      setTimeout(() => {
        this.rData = genData();
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(genData()),
          height: hei,
          refreshing: false,
          isLoading: false,
        });
      }, 1500);
    }

    onRefresh = () => {
      this.setState({ refreshing: true, isLoading: true });
      // simulate initial Ajax
      setTimeout(() => {
        this.rData = genData();
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          refreshing: false,
          isLoading: false,
        });
      }, 600);
    };

    onEndReached = (event) => {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      if (this.state.isLoading && !this.state.hasMore) {
        return;
      }
      console.log('reach end', event);
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.rData = [...this.rData, ...genData(++pageIndex)];
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          //想要更新datasource中的数据，必须每次通过cloneWithRows这个来重新挂载datasource的值。
          isLoading: false,
        });
      }, 1000);
    };

    render() {
      const separator = (sectionID, rowID) => (
        <div
          key={`${sectionID}-${rowID}`}
          style={{
            backgroundColor: '#F5F5F9',
            height: 8,
            borderTop: '1px solid #ECECED',
            borderBottom: '1px solid #ECECED',
          }}
        />
      );
      let index = data.length - 1;
      const row = (rowData, sectionID, rowID) => {
        if (index < 0) {
          index = data.length - 1;
        }
        const obj = data[index--];
        return (
        //   <div key={rowID}
        //     style={{
        //       padding: '0 15px',
        //       backgroundColor: 'white',
        //     }}
        //   >
        //     <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
        //       {obj.title}
        //     </div>
        //     <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
        //       <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
        //       <div style={{ display: 'inline-block' }}>
        //         <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}-{rowData}</div>
        //         <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
        //       </div>
        //     </div>
        //   </div>

            <div className="mobile_article_item" key={rowID}>
            <div className="f_pic">
                <div className="f_pic_t"><img src={obj.cover} alt="" /></div>
                <div className="f_pic_b">
                    <img src={obj.authorAvatar} alt="" />
                    <span>{obj.author}</span>
                </div>
            </div>
            <div className="f_right">
                <div className="f_right_t">{obj.title}</div>
                <div className="f_right_b"><span>3万</span><span>48</span></div>
            </div>
            </div>








        );
      };
      return (<div>
        <Button
          style={{ margin: '30px 15px' }}
          inline
          onClick={() => this.setState({ useBodyScroll: !this.state.useBodyScroll })}
        >
          {this.state.useBodyScroll ? 'useBodyScroll' : 'partial scroll'}
        </Button>
        <ListView
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderHeader={() => <span>Pull to refresh</span>}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={this.state.useBodyScroll ? {} : {
            height: this.state.height,
            border: '1px solid #ddd',
            margin: '5px 0',
          }}
          pullToRefresh={<PullToRefresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />}
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </div>);
    }
  }
// 编程式导航
export default withRouter(Listv)


// 因为它用react-dom做操作了，所以把react-dom也导进来
// - rowID是每次的ID，rowData是每次的数据
// - renderSseprator就是个分隔符
// - this.state.dataSource就是数据源 
// - 外围的那个const的dataSource是一种数据结构，它有一个方法叫cloneWithRows
// - Button没用，删就完了
// - renderFooter是为了做上拉刷新时的Loading效果
// - 第一步是通过dataSource去拿数据，第二步是通过render(row)去渲染那个模板
// - rowData是每一页的数据，就是每次装载进来的数据，rowID是它帮你封装好的，直接在key={rowID}用就行，
// 在DidMount整完数据以后在这边的rouData就是你的state.dataSource里面的数据(第一页)
// - renderSeparator 就是刚开始他们行和行之间的分隔符
// - pageSize是刷新的时候一次显示几条数据
// cloneWithRows ：想要更新datasource中的数据，必须每次通过cloneWithRows这个来重新挂载datasource的值。
//  rowHasChange :对于你下面创建的const row，就是构造listview中的每一行的数据的刷新有关，如想要刷新你的
// 数据，必须通过这个函数。
// onEndReached :当下拉到距离底部多少的时候触发这个函数，距离多少由 onEndReachedThreshold 的值来控制。


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; //下拉刷新组件依赖react-dom，所以需要将其引进来
// import { withRouter } from "react-router-dom";
// import './Listv.css'

// import { PullToRefresh, ListView } from 'antd-mobile';

// class Listv extends Component {
//     constructor(props) {
//         super(props);
//         const dataSource = new ListView.DataSource({  //这个dataSource有cloneWithRows方法
//             rowHasChanged: (row1, row2) => row1 !== row2,
//         });

//         this.pageNo = 0 //定义分页信息
//         this.state = {
//             dataSource,
//             refreshing: true,
//             isLoading: true,
//             height: document.documentElement.clientHeight,
//             useBodyScroll: false,
//             hasMore: true
//         };
//     }

//     componentDidUpdate() {
//         if (this.state.useBodyScroll) {
//             document.body.style.overflow = 'auto';
//         } else {
//             document.body.style.overflow = 'hidden';
//         }
//     }

//     async componentDidMount() {
//         const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

//         this.rData = (await this.genData()).sceneryinfo;
//         console.log(this.rData)
//         this.setState({
//             dataSource: this.state.dataSource.cloneWithRows(this.rData),
//             height: hei,
//             refreshing: false,
//             isLoading: false,
//         });
//     }
//     genData() {  //请求数据的方法
//         this.pageNo++     //每次下拉的时候pageNo++                                                                                 
//         return fetch('/scenery/json/scenerynearycitylist.html?CountryId=0&ProvinceId=3&CityId=53&LbTypes=&sorttype=0&page=' + this.pageNo + '&gradeid=0&themeid=0&pricerange=0&issearchbytimenow=0&paytype=0&range=0&keyword=0&IsGlobal=0&IsYiYuan=0&cityArea=0&lat=0&lon=0',
//             {
//                 method: 'GET',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//             })
//             .then(response => response.json())
//             .then(function (result) {
//                 if (result) {
//                     return result
//                 } else {
//                     this.setState({
//                         hasMore: false
//                     })
//                 }
//             })
//     }

//     onRefresh = () => {
//         // this.setState({ refreshing: true, isLoading: true });
//         // // simulate initial Ajax
//         // setTimeout(() => {
//         //   this.rData = genData();
//         //   this.setState({
//         //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
//         //     refreshing: false,
//         //     isLoading: false,
//         //   });
//         // }, 600);
//     };

//     onEndReached = async (event) => {
//         // load new data
//         // hasMore: from backend data, indicates whether it is the last page, here is false
//         if (this.state.isLoading && !this.state.hasMore) {
//             return;
//         }   //如果this.state.hasMore为false，说明没数据了，直接返回
//         console.log('reach end', event);
//         this.setState({ isLoading: true });
//         this.rData = [...this.rData, ...((await this.genData()).sceneryinfo)];  //每次下拉之后将新数据装填过来
//         this.setState({
//             dataSource: this.state.dataSource.cloneWithRows(this.rData),
//             isLoading: false,
//         });
//     };

//     render() {
//         //这里就是个渲染数据，rowData就是每次过来的那一批数据，已经自动给你遍历好了，rouID可以作为key值使用，直接渲染数据即可
//         const row = (rowData, sectionID, rowID) => {
//             return (
//                 // <div key={rowID} style={{ "height": "100px" }}>{rowData.name}</div>

//                 <div className="mobile_article_item" key={rowID}>
//                     <div className="f_pic">
//                         <div className="f_pic_t"><img src={item.cover} alt="" /></div>
//                         <div className="f_pic_b">
//                             <img src={item.authorAvatar} alt="" />
//                             <span>{item.author}</span>
//                         </div>
//                     </div>
//                     <div className="f_right">
//                         <div className="f_right_t">{item.title}</div>
//                         <div className="f_right_b"><span>3万</span><span>48</span></div>
//                     </div>
//                 </div>










//       );
//         };
//         return (
//             <div>
//                 <ListView
//                     key={this.state.useBodyScroll ? '0' : '1'}
//                     ref={el => this.lv = el}
//                     dataSource={this.state.dataSource}
//                     renderFooter={    //renderFooter就是下拉时候的loading效果，这里的内容可以自己随需求更改
//                         () => (
//                             <div style={{ padding: 30, textAlign: 'center' }}>
//                                 {this.state.isLoading ? 'Loading...' : 'Loaded'}
//                             </div>
//                         )
//                     }
//                     renderRow={row}   //渲染你上边写好的那个row
//                     useBodyScroll={this.state.useBodyScroll}
//                     style={this.state.useBodyScroll ? {} : {
//                         height: this.state.height,
//                         border: '1px solid #ddd',
//                         margin: '5px 0',
//                     }}
//                     pullToRefresh={<PullToRefresh
//                         refreshing={this.state.refreshing}
//                         onRefresh={this.onRefresh}
//                     />}
//                     onEndReached={this.onEndReached}
//                     pageSize={8}    //每次下拉之后显示的数据条数
//                 />
//             </div>
//         );
//     }
// }

// export default withRouter(Listv)