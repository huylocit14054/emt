import React from 'react';
import { Drawer, Divider } from 'antd';
import EditServiceForm from './serviceAction/EditServiceForm';

class ServiceAction extends React.Component {
  state = { visible: false };

  onClose = () => {
    this.setState({ visible: false });
  };

  showDrawer = () => {
    this.setState({ visible: true });
  };

  render() {
    const { name, description, id } = this.props;
    return (
      <React.Fragment>
        <span>
          <a onClick={this.showDrawer}>Edit</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
        <Drawer
          title={name}
          width="50%"
          placement="right"
          onClose={this.onClose}
          visible={this.state.visible}
          destroyOnClose
        >
          <EditServiceForm id={id} name={name} description={description} onCancel={this.onClose} />
        </Drawer>
      </React.Fragment>
    );
  }
}

export default ServiceAction;
