import React from 'react';
import { Drawer, Divider, Modal } from 'antd';
import { withApollo } from 'react-apollo';
import _ from 'lodash';
import EditServiceForm from './serviceAction/EditServiceForm';
import { deteleService as DELETE_SERVICE } from '../graphql/mutations.gql';
import { getAllServices as GET_ALL_SERVICES } from '../graphql/queries.gql';

const { confirm } = Modal;

class ServiceAction extends React.Component {
  state = { visible: false };

  onClose = () => {
    this.setState({ visible: false });
  };

  onConfirmDelete = () => {
    const { client } = this.props;
    client
      .mutate({
        mutation: DELETE_SERVICE,
        variables: { input: { serviceId: this.props.id } },
      })
      .then(() => {
        const data = client.readQuery({
          query: GET_ALL_SERVICES,
        });
        console.log(data);
        console.log(this.props.id);
        _.remove(data.services, service => service.id === this.props.id.toString());
        console.log(data);
        client.writeQuery({
          query: GET_ALL_SERVICES,
          data,
        });
      });
  };

  showDrawer = () => {
    this.setState({ visible: true });
  };

  showConfirm = () => {
    confirm({
      title: `Delete ${this.props.name}`,
      content: `Are you sure you want to delete service ${this.props.name}`,
      onOk: () => {
        this.onConfirmDelete();
      },
      onCancel() {},
    });
  };

  render() {
    const { name, description, id } = this.props;
    return (
      <React.Fragment>
        <span>
          <a onClick={this.showDrawer}>Edit</a>
          <Divider type="vertical" />
          <a onClick={this.showConfirm}>Delete</a>
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

export default withApollo(ServiceAction);
