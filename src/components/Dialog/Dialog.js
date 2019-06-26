import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './Dialog.css';

class showModal extends Component {
    state = {
        visible: false,
        centered: true
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
        sessionStorage.removeItem(
            'username'
        )
        window.location.reload()
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.showModal} className="quit" >
                    退出登录
        </Button>
                <Modal
                    okText='确定' cancelText='取消'
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>确定要退出登录吗</p>
                </Modal>
            </div>
        );
    }
}

export default showModal;