import React from 'react';
import { Form, Button, Col, Row, Input, message } from 'antd';
import { Mutation, withApollo } from 'react-apollo';
import { updatePlan as UPDATE_PLAN } from '../../graphql/mutations.gql';

const FormItem = Form.Item;

class EditPlanForm extends React.Component {
  handleSubmit = (e, updatePlan) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        updatePlan({
          variables: {
            input: {
              attributes: JSON.stringify({
                id: this.props.id,
                ...values,
              }),
            },
          },
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Mutation
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
      </Mutation>
    );
  }
}

export default withApollo(Form.create()(EditPlanForm));
