import React from 'react';
import { withRouter } from "react-router-dom";

// import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { Toast} from 'antd-mobile';
// function loadingToast() {
//     Toast.loading('Loading...', 1, () => {
//       console.log('Load complete !!!');
//     });
//   }

class Hloading extends React.Component {
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
          console.log('Load complete !!!');
        });
    
        setTimeout(() => {
          Toast.hide();
        }, 1000);
      }


    render() {
        return (
            <div>
                 {/* <Button onClick={loadingToast}>loading</Button> */}
            </div>

        )
    }
}
// 编程式导航
export default withRouter(Hloading)