import React, {Component} from 'react'


//引入组件
import Tlheader from  '../../components/Tlheader/Tlheader'
import Tllist from  '../../components/Tllist/Tllist'

class Travel extends Component{
    render() {
        return(
            <div style={{ background: '#fff',width: '100%',height: '100%'}}>
                <Tlheader/>
                <Tllist/>
            </div>
        )
    }
}

export default Travel