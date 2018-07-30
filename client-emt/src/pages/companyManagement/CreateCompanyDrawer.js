import { Drawer, Form, Button, Col, Row, Input, Radio } from 'antd';
import React from 'react';
import { getAllPlansOfApplication as GET_ALL_PLANS_OF_APPLICATION } from '../../graphql/queries.gql';
import MyQuery from '../../components/MyQuery';

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

  handleCreate = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
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
                      {getFieldDecorator('plan', {
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
            <Button onClick={this.handleCreate} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}
const CreateCompanyDrawer = Form.create()(DrawerForm);

export default CreateCompanyDrawer;
