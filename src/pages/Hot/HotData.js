import React,{Component} from 'react';
import { ListView } from 'antd-mobile';
import {withRouter} from 'react-router-dom';

const NUM_ROWS = 5;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  // console.log(dataBlob)
  return dataBlob;
}
class HotData extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    
    this.state = {
      dataSource,
      isLoading: true,
      data:[],
    };
  }
  componentDidMount() {
    setTimeout(async () => {
      let {hotdata} = this.props;
      // console.log(this.props)
      this.rData = genData();
      this.setState({
        data:hotdata,
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }
  async componentWillReceiveProps(nextProps){
    let {hotdata} = nextProps;
    // console.log(hotdata)
    this.setState({
      data:hotdata
    });
  }

  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    // console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }
  gotodetail = (id)=>{
    let {history} = this.props;
    // console.log(this.props)
    history.push({
      pathname:`details/${id}`
    })
  }
  
  render() {
    let {data} = this.state;
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
      const obj = data[index-rowID];
      if(obj){
        return (
          <div key={rowID} style={{ padding: '0 15px' }}  onClick={this.gotodetail.bind(this,obj.pid)}>
            <div className="hd_item" style={{background:`url(${obj.thumb})`,backgroundSize:'100%'}}>
              <span className="item_type">
                {obj.product_type}|{obj.place_label}
              </span>
              <div className="item_label">
                <p className="price">{obj.price_label}</p>
                <p className="days">{obj.days}</p>
              </div>
            </div>
            <p className="item_name">{obj.product_name}</p>
            <p className="item_sub"><span>{obj.product_cat}</span>{obj.sub_name}</p>
          </div>
        );
      }else{
        return ''
      }
    };
    return (
      <div className="HotData">
          <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {/* {this.state.isLoading ? 'Loading...' : 'Loaded'} */}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          className="am-list"
          pageSize={4}
          useBodyScroll
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </div>
    );
  }
}

export default withRouter(HotData);