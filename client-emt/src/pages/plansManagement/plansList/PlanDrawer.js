import React from 'react';
import { Drawer, Button } from 'antd';
import CreatePlanForm from './planDrawer/CreatePlanForm';
import { allPlans as ALL_PLANS } from '../graphql/queries.gql';

class CreatePlanDrawer extends React.Component {
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

  handleSubmit = (e, createPlan) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        createPlan({
          variables: {
            input: {
              attributes: JSON.stringify(values),
            },
          },
          update: (
            store,
            {
              data: {
                createPlan: { createdPlan },
              },
            }
          ) => {
            const data = store.readQuery({
              query: ALL_PLANS,
            });
            data.plans.splice(0, 0, createdPlan);
            store.writeQuery({
              query: ALL_PLANS,
              data,
            });
          },
        });
      }
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Create Plan
        </Button>
        <Drawer
          title="New Plan"
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
          <CreatePlanForm onCancel={this.onClose} handleSubmit={this.handleSubmit} />
        </Drawer>
      </div>
    );
  }
}

export default CreatePlanDrawer;
