import { Modal, Radio } from 'antd';
import React from 'react';
import MyQuery from '../../../../components/MyQuery';
import { getAllPlansOfApplication as GET_ALL_PLANS_OF_APPLICATION } from '../../../../graphql/queries.gql';
import { changePlan as CHANGE_PLAN_MUTATION } from '../../../../graphql/mutations.gql';
import MyMutation from '../../../../components/MyMutation';

export default class ChangePlanModal extends React.Component {
  state = { visible: false, chosenPlan: this.props.currentPlan };

  onChange = e => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      chosenPlan: e.target.value,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = changePlan => {
    changePlan();
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { currentPlan, companyId } = this.props;
    const { chosenPlan } = this.state;
    console.log(currentPlan);
    return (
      <React.Fragment>
        <a onClick={this.showModal}>Change plan</a>
        <MyMutation
          mutation={CHANGE_PLAN_MUTATION}
          variables={{
            input: {
              attributes: JSON.stringify({
                id: companyId,
                plan_id: this.state.chosenPlan,
              }),
            },
          }}
          onCompleted={data => {
            console.log(data);
            this.setState({
              visible: false,
            });
          }}
        >
          {(changePlan, { loading }) => (
            <Modal
              title="Change plan"
              visible={this.state.visible}
              confirmLoading={loading}
              onOk={() => this.handleOk(changePlan)}
              onCancel={this.handleCancel}
              style={{ textAlign: 'center' }}
            >
              <MyQuery query={GET_ALL_PLANS_OF_APPLICATION}>
                {({ allPlans }) => (
                  <Radio.Group buttonStyle="solid" onChange={this.onChange} value={chosenPlan}>
                    {allPlans.map(plan => (
                      <Radio.Button value={plan.id} key={plan.id}>
                        {plan.name}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                )}
              </MyQuery>
            </Modal>
          )}
        </MyMutation>
      </React.Fragment>
    );
  }
}
