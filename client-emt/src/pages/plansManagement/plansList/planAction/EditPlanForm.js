import React from 'react';
import { Form, Button, Col, Row, Input, message, Select } from 'antd';
import { withApollo } from 'react-apollo';
import { updatePlan as UPDATE_PLAN } from '../../graphql/mutations.gql';
import { getAllServices as GET_ALL_SERVICES } from '../../graphql/queries.gql';
import MyQuery from '../../../../components/MyQuery';
import MyMutation from '../../../../components/MyMutation';

const FormItem = Form.Item;
const { Option } = Select;

class EditPlanForm extends React.Component {
  handleSubmit = (e, updatePlan) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        updatePlan({
          variables: {
            input: {
              planId: this.props.id,
              ...values,
            },
          },
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <MyMutation
        mutation={UPDATE_PLAN}
        onCompleted={() => {
          message.success('Plan save');
          this.props.onCancel();
          this.props.form.resetFields();
        }}
        onError={error => {
          error.graphQLErrors.map(e => message.error(e.message, 3));
        }}
      >
        {updatePlan => (
          <Form layout="vertical" onSubmit={e => this.handleSubmit(e, updatePlan)}>
            <Row gutter={16}>
              <Col span={24}>
                <FormItem label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'please enter plan name' }],
                    initialValue: this.props.name,
                  })(<Input placeholder="please enter plan name" />)}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <FormItem label="Description">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter plan description',
                      },
                    ],
                    initialValue: this.props.description,
                  })(<Input.TextArea rows={4} placeholder="please enter plan description" />)}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <MyQuery query={GET_ALL_SERVICES}>
                  {({ services }) => {
                    const service_default = [];
                    this.props.services.map(service => service_default.push(service.id.toString()));
                    return (
                      <FormItem label="Plans">
                        {getFieldDecorator('serviceIds', {
                          rules: [
                            {
                              required: true,
                              message: 'please select your services',
                            },
                          ],
                          initialValue: service_default,
                        })(
                          <Select mode="multiple" placeholder="Please select favourite colors">
                            {services.map(service => (
                              <Option key={service.id} value={service.id}>
                                {service.name}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </FormItem>
                    );
                  }}
                </MyQuery>
              </Col>
            </Row>
            <FormItem
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
                onClick={() => {
                  this.props.onCancel();
                  this.props.form.resetFields();
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </FormItem>
          </Form>
        )}
      </MyMutation>
    );
  }
}

export default withApollo(Form.create()(EditPlanForm));
