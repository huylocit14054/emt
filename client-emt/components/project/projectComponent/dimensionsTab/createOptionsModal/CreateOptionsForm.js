import { Form, Input, Modal, Icon, Button } from 'antd';

import { Query } from 'react-apollo';

const FormItem = Form.Item;
let uuid = 0;
const CreateOptionForm = Form.create()(class extends React.Component {
    remove = k => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    };

    add = () => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      const nextKeys = keys.concat(uuid);
      uuid++;
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
      });
    };

    render() {
      const {
        visible, onCancel, onCreate, form, confirmLoading,
      } = this.props;
      const { getFieldDecorator, getFieldValue } = form;
      getFieldDecorator('keys', { initialValue: [] });
      const keys = getFieldValue('keys');
      const formItems = keys.map((k, index) => (
        <FormItem label={index === 0 ? 'Passengers' : ''} required={false} key={k}>
          {getFieldDecorator(`names[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Please input passenger's name or delete this field.",
              },
            ],
          })(<Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />)}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      ));
      return (
        <Modal
          confirmLoading={confirmLoading}
          visible={visible}
          okText="create"
          onCancel={onCancel}
          cancelText="cancel"
          onOk={onCreate}
        >
          <Form onSubmit={onCreate}>
            {formItems}
            <FormItem>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </FormItem>
          </Form>
        </Modal>
      );
    }
});

export default CreateOptionForm;
