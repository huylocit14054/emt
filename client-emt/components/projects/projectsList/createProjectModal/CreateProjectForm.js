import { Form, Input, Modal, Rate } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;

const CreateProjectForm = Form.create()(
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
            <FormItem label="name">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the name of project!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="description">
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: true,
                    message: "Please input the description of project!"
                  }
                ]
              })(<TextArea rows={4} />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default CreateProjectForm;
