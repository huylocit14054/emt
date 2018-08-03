import React from 'react';
import { Drawer, Modal } from 'antd';
import { withApollo } from 'react-apollo';
import _ from 'lodash';
import EditPlanForm from './planAction/EditPlanForm';

class PlanAction extends React.Component {
  state = { visible: false };

  onClose = () => {
    this.setState({ visible: false });
  };

  showDrawer = () => {
    this.setState({ visible: true });
  };

  render() {
    const { name, description, id, services } = this.props;
    return (
      <React.Fragment>
        <span>
          <a onClick={this.showDrawer}>Edit</a>
        </span>
        <Drawer
          title={name}
          width="50%"
          placement="right"
          onClose={this.onClose}
          visible={this.state.visible}
          destroyOnClose
        >
          <EditPlanForm
            id={id}
            name={name}
            description={description}
            services={services}
            onCancel={this.onClose}
          />
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withApollo(PlanAction);
