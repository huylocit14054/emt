import { Form, Input, Modal } from 'antd';
import React from 'react';

const FormItem = Form.Item;

const UpdateCompanyForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, confirmLoading } = this.props;

      const { getFieldDecorator } = form;

      return (
        <Modal
          confirmLoading={confirmLoading}
          visible={visible}
          okText="create"
          onCancel={onCancel}
          cancelText="cancel"
          onOk={onCreate}
        >
          <Form layout="vertical" onSubmit={onCreate}>
            <FormItem label="email">
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the email of company!',
                  },
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="companyname">
              {getFieldDecorator('companyname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the companyname of company!',
                  },
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the password of company!',
                  },
                ],
              })(<Input type="password" />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default UpdateCompanyForm;
