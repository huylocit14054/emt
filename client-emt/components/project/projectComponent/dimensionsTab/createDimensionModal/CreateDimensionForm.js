import { Form, Input, Modal, Rate, Select } from 'antd';

const { TextArea } = Input;
const FormItem = Form.Item;
const { Option } = Select;
const CreateDimensionForm = Form.create()(class extends React.Component {
  render() {
    const {
      visible, onCancel, onCreate, form, confirmLoading,
    } = this.props;

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
          <FormItem label="name">
            {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the name of dimension!',
                  },
                ],
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
                initialValue: 'selection',
              })(<Select>
                <Option key="selection">selection</Option>
                <Option key="input">input</Option>
              </Select>)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
});

export default CreateDimensionForm;
