import { Drawer, Form, Button, Col, Row, Input, Radio } from 'antd';
import React from 'react';
import { getAllPlansOfApplication as GET_ALL_PLANS_OF_APPLICATION } from '../../graphql/queries.gql';
import MyQuery from '../../components/MyQuery';
import MyMutation from '../../components/MyMutation';
import { createCompany as CREATE_COMPANY_MUTATION } from './mutations.gql';

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

  handleCreate = createCompany => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      createCompany({
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
          Create Company
        </Button>
        <Drawer
          title="Create Company"
          width="80%"
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
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: "Please enter company's name" }],
                  })(<Input placeholder="e.g Enhance" />)}
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Company admin email">
                  {getFieldDecorator('companyAdminEmail', {
                    rules: [{ required: true, message: 'Please enter company admin email' }],
                  })(<Input placeholder="e.g abc@gmail.com" />)}
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
              mutation={CREATE_COMPANY_MUTATION}
              onCompleted={({ createCompany: { createdCompany } }) => {
                console.log(createdCompany);
              }}
            >
              {(createCompany, { loading }) => (
                <Button
                  onClick={() => this.handleCreate(createCompany)}
                  type="primary"
                  loading={loading}
                >
                  Submit
                </Button>
              )}
            </MyMutation>
          </div>
        </Drawer>
      </div>
    );
  }
}
const CreateCompanyDrawer = Form.create()(DrawerForm);

export default CreateCompanyDrawer;
