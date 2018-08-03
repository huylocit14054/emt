import { Drawer, Form, Button, Col, Row, Input, Radio } from 'antd';
import React from 'react';
import {
  getAllPlansOfApplication as GET_ALL_PLANS_OF_APPLICATION,
  getAllCompaniesOfApplication as GET_ALL_COMPANIES_QUERY,
  getCompany as GET_COMPANY_QUERY,
} from '../../../../graphql/queries.gql';
import MyQuery from '../../../../components/MyQuery';
import MyMutation from '../../../../components/MyMutation';

import { updateCompany as UPDATE_COMPANY_MUTATION } from '../../../../graphql/mutations.gql';

class DrawerForm extends React.Component {
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

  handleUpdate = updateCompany => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      updateCompany({
        variables: {
          input: {
            ...values,
          },
        },
      });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Edit
        </Button>
        <Drawer
          title="Update Company"
          width="50%"
          placement="right"
          onClose={this.onClose}
          maskClosable={false}
          visible={this.state.visible}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: "Please enter company's name" }],
                  })(<Input placeholder="e.g Enhance" autoFocus />)}
                </Form.Item>
              </Col>
              <Col span={24}>
                <MyQuery query={GET_ALL_PLANS_OF_APPLICATION}>
                  {({ allPlans }) => (
                    <Form.Item label="Choose Plan">
                      {getFieldDecorator('planId', {
                        initialValue: allPlans[0].id,
                      })(
                        <Radio.Group buttonStyle="solid">
                          {allPlans.map(plan => (
                            <Radio.Button value={plan.id} key={plan.id}>
                              {plan.name}
                            </Radio.Button>
                          ))}
                        </Radio.Group>
                      )}
                    </Form.Item>
                  )}
                </MyQuery>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
            <MyMutation
              mutation={UPDATE_COMPANY_MUTATION}
              update={(
                store,
                {
                  data: {
                    updateCompany: { updatedCompany },
                  },
                }
              ) => {
                // reset form and close drawer
                this.props.form.resetFields();
                this.onClose();
              }}
            >
              {(updateCompany, { loading }) => (
                <Button
                  onClick={() => this.handleUpdate(updateCompany)}
                  type="primary"
                  loading={loading}
                >
                  Save
                </Button>
              )}
            </MyMutation>
          </div>
        </Drawer>
      </div>
    );
  }
}
const UpdateCompanyDrawer = Form.update()(DrawerForm);

export default UpdateCompanyDrawer;
