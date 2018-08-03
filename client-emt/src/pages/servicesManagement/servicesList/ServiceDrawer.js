import React from 'react';
import { Drawer, Button } from 'antd';
import CreateServiceForm from './serviceDrawer/CreateServiceForm';

class CreateServiceDrawer extends React.Component {
  state = { visible: false };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Create Service
        </Button>
        <Drawer
          title="New Service"
          width="50%"
          placement="right"
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
          <CreateServiceForm onCancel={this.onClose} />
        </Drawer>
      </div>
    );
  }
}

export default CreateServiceDrawer;
