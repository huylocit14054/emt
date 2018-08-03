import React from 'react';
import { Form, Button, Col, Row, Input, Select, message } from 'antd';
import { withApollo } from 'react-apollo';
import {
  getAllServices as GET_ALL_SERVICES,
  allPlans as ALL_PLAN,
} from '../../graphql/queries.gql';
import { createPlan as CREATE_PLAN } from '../../graphql/mutations.gql';
import MyQuery from '../../../../components/MyQuery';
import MyMutation from '../../../../components/MyMutation';

const FormItem = Form.Item;
const { Option } = Select;

class CreatePlanForm extends React.Component {
  handleSubmit = (e, createPlan) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        createPlan({
          variables: {
            input: {
              name: values.name,
              description: values.description,
              serviceIds: values.serviceIds,
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
              query: ALL_PLAN,
            });
            data.allPlans.splice(0, 0, createdPlan);
            store.writeQuery({
              query: ALL_PLAN,
              data,
            });
          },
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <MyMutation
        mutation={CREATE_PLAN}
        onCompleted={() => {
          message.success('Plan save');
          this.props.onCancel();
          this.props.form.resetFields();
        }}
        onError={error => {
          error.graphQLErrors.map(e => message.error(e.message, 3));
        }}
      >
        {createPlan => (
          <Form layout="vertical" onSubmit={e => this.handleSubmit(e, createPlan)}>
            <Row gutter={16}>
              <Col span={24}>
                <FormItem label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'please enter plan name' }],
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
                  })(<Input.TextArea rows={4} placeholder="please enter plan description" />)}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <MyQuery query={GET_ALL_SERVICES}>
                  {({ services }) => (
                    <FormItem label="Plans">
                      {getFieldDecorator('serviceIds', {
                        rules: [
                          {
                            required: true,
                            message: 'please select your services',
                          },
                        ],
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
                  )}
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

export default withApollo(Form.create()(CreatePlanForm));
