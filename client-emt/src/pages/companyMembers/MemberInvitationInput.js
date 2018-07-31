import React from 'react';

import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class MemberInvitationInput extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input valid email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Invite
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedMemberInvitationInput = Form.create()(MemberInvitationInput);

// ReactDOM.render(<WrappedMemberInvitationInput />, mountNode);

export default WrappedMemberInvitationInput;
