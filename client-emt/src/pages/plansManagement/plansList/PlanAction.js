import React from 'react';
import { Drawer, Divider, Modal } from 'antd';
import { withApollo } from 'react-apollo';
import _ from 'lodash';
import EditPlanForm from './planAction/EditPlanForm';
import { detelePlan as DELETE_PLAN } from '../graphql/mutations.gql';
import { allPlans as ALL_PLANS } from '../graphql/queries.gql';

const { confirm } = Modal;

class PlanAction extends React.Component {
  state = { visible: false };

  onClose = () => {
    this.setState({ visible: false });
  };

  onConfirmDelete = () => {
    const { client } = this.props;
    client
      .mutate({
        mutation: DELETE_PLAN,
        variables: { input: { planId: this.props.id } },
      })
      .then(() => {
        const data = client.readQuery({
          query: ALL_PLANS,
        });
        console.log(data);
        console.log(this.props.id);
        _.remove(data.plans, plan => plan.id === this.props.id.toString());
        console.log(data);
        client.writeQuery({
          query: ALL_PLANS,
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
      content: `Are you sure you want to delete plan ${this.props.name}`,
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
          <EditPlanForm id={id} name={name} description={description} onCancel={this.onClose} />
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withApollo(PlanAction);
