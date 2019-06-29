import React, {Component} from 'react'


//引入组件
import Hcheader from '../../components/Hcheader/Hcheader'
import Hcsearch from '../../components/Hcsearch/Hcsearch'
import Hclist from  '../../components/Hclist/Hclist'
import Hloading from  '../../components/Hloading/Hloading'


class Housecar extends Component{
    render() {
        return(
            <div>
            <Hcheader/>
            <Hcsearch/>
            <Hclist/>
            <Hloading/>
        </div>
        )
    }
}

export default Housecar