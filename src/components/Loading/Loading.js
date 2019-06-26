import React from 'react';
import 'weui';
class Loading extends React.Component {

    state = {
        bool: 1,
        style: {
            'opacity': 0,
            'display': "none"
        }
    }
    render() {
        return (
            <div>
                {
                    <div id="loadingToast" style={
                        //     this.state.bool ? {
                        //     'opacity': 1,
                        //     'display': "display"
                        // } :
                        //     {
                        //         'opacity': 0,
                        //         'display': "none"
                        //     }
                        this.state.style

                    }>
                        <div className="weui-mask_transparent"></div>
                        <div className="weui-toast">
                            <i className="weui-loading weui-icon_toast"></i>
                            <p className="weui-toast__content">数据加载中</p>
                        </div>
                    </div>
                }

            </div >
            // mountNode,
        )
    }
    componentWillReceiveProps(props) {
        // console.log(props)
        this.setState({
            // bool: props.status === 'show' ? 1 : 0
            style: props.status === 'show' ? {
                'opacity': 1,
                'display': "block"
            } : {
                    'opacity': 0,
                    'display': "none"
                }
        })
    }

}

export default Loading

