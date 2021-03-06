import { Form, Input, Modal, Select } from 'antd';
import React from 'react';

const FormItem = Form.Item;
const { Option } = Select;
const CreateDimensionForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, confirmLoading } = this.props;

      const { getFieldDecorator } = form;

      return (
        <Modal
          maskClosable={false}
          confirmLoading={confirmLoading}
          visible={visible}
          okText="create"
          onCancel={onCancel}
          cancelText="cancel"
          onOk={onCreate}
        >
          <Form layout="vertical" onSubmit={onCreate}>
            <FormItem label="name">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the name of dimension!',
                  },
                ],
              })(<Input placeholder="Dimension's name" />)}
            </FormItem>
            <FormItem label="category">
              {getFieldDecorator('category', {
                rules: [
                  {
                    required: true,
                    message: "Please select dimension's category",
                  },
                ],
              })(
                <Select placeholder="Select dimension's category">
                  <Option key="selection">selection</Option>
                  <Option key="input">input</Option>
                </Select>
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default CreateDimensionForm;
