import { Form, Input, Modal, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select

const UpdateDimensionForm = Form.create()(class extends React.Component {
  render() {
    const {
      visible, onCancel, onUpdate, form, confirmLoading, dimension,
    } = this.props;

    const { getFieldDecorator } = form;

    return (
      <Modal
        confirmLoading={confirmLoading}
        visible={visible}
        okText="update"
        onCancel={onCancel}
        cancelText="cancel"
        onOk={onUpdate}
      >
        <Form layout="vertical" onSubmit={onUpdate}>
          <FormItem label="name">
            {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the name of dimension!',
                  },
                ],
                initialValue: dimension.name,
              })(<Input />)}
          </FormItem>
          <FormItem label="category">
          {getFieldDecorator('category', {
              rules: [
                {
                  required: true,
                  message: "Please select dimension's category",
                },
              ],
              initialValue: dimension.category
            })(<Select placeholder="Select dimension's category">
              <Option key="selection">selection</Option>
              <Option key="input">input</Option>
            </Select>)}
           </FormItem>
        </Form>
      </Modal>
    );
  }
});

export default UpdateDimensionForm;
