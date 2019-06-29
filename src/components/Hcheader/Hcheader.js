import React from 'react';
import { withRouter } from "react-router-dom";

import { SearchBar} from 'antd-mobile';
import { Icon, Grid } from 'antd-mobile';

//引入css样式
// import './all.css' 
const style ={
    position: 'fixed',
    top: '0px',
    left: '0px',
    // background: '#fff'
    zIndex: '200'
}

class Hcheader extends React.Component {
    state = {
        value: '美食',
    };
    //   componentDidMount() {
    //     this.autoFocusInst.focus()
    //   }
    onChange = (value) => {
        this.setState({ value });
    }
    clear = () => {
        this.setState({ value: '' });
    }
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        return (
            <div style={style}>
                <div style={{width: '375px'}}>
                    <div style={{display: 'inline-block', width: '43px',height: '44px',verticalAlign: 'top',
                    lineHeight: '42px',textAlign: 'center',paddingTop: '5px',boxSizing: "border-box",background: "#efeff4"}}>
                        <Icon type="left" style={{display: 'bolck',}}/></div>
                    <div style={{display: 'inline-block', width: '288px',height: '45px'}}>
                        <SearchBar
                            value={this.state.value}
                            placeholder="美食"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onClear={value => console.log(value, 'onClear')}
                            onFocus={() => console.log('onFocus')}
                            onBlur={() => console.log('onBlur')}
                            onCancel={() => console.log('onCancel')}
                            showCancelButton
                            onChange={this.onChange}
                        />
                    </div>
                    <div style={{display: 'inline-block', width: '44px',height: '44px', lineHeight: '42px',
                    textAlign: 'center',paddingTop: '5px',boxSizing: "border-box",verticalAlign: 'top',background: "#efeff4"}}>
                        <Icon type="ellipsis"  /></div>
                </div>


            </div>

        )
    }
}
// 编程式导航
export default withRouter(Hcheader)