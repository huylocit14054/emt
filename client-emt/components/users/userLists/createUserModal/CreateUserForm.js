import { Form, Input, Modal, Rate } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;

const CreateUserForm = Form.create()(
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
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    message: "Please input the email of user!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="username">
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "Please input the username of user!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="password">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input the password of user!"
                  }
                ]
              })(<Input type="password" />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default CreateUserForm;
