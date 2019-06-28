import React, { Component } from 'react';
import Youhead from '../../components/Youjihead/Youjihead'
import Youcarousel from '../../components/Youcarousel/Youcarousel'
import Youcontent from '../../components/Youcontent/Youcontent'
import Loading from '../../components/Loading/Loading'

import "./Youji.css"
class Youji extends Component {

    render() {
        return (
            <div>
                <Youhead />
                <Youcarousel />
                <div className="banner"></div>
                <Youcontent />
                <Loading />
            </div>

        )


    }

}
export default Youji
