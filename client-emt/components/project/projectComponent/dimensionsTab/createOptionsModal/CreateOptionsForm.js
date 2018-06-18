import { Form, Input, Modal } from 'antd';
import _ from 'lodash';
import { Query } from 'react-apollo';

const FormItem = Form.Item;
let uuid = 0;
const CreateOptionForm = Form.create()(class extends React.Component {
    remove = k => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      // We need at least one option
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
      uuid += 1;
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
      const { getFieldDecorator } = form;
      getFieldDecorator('keys', { initialValue: [] });
      const keys = getFieldValue('keys');
      const formItems = keys.map((k, index) => (
        <FormItem label={index === 0 ? 'Options' : ''} required={false} key={k}>
          {getFieldDecorator(`options[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Please input option's name or delete this field.",
              },
            ],
          })(<Input placeholder="option name" style={{ width: '95%', marginRight: 8 }} />)}
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
          <Query
            query={GET_SPECIFICS_FOR_DOCTOR_CREATION_QUERY}
            variables={{
              hospitalId,
            }}
            onCompleted={data => {}}
            onError={error => {
              // If you want to send error to external service?
            }}
          >
            {({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) return `Error! ${error.message}`;
              return (
                <Form layout="vertical" onSubmit={onCreate}>
                  <FormItem label="name">
                    {getFieldDecorator('name', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input the name of option!',
                        },
                      ],
                    })(<Input />)}
                  </FormItem>
                  <FormItem label="description">
                    {getFieldDecorator('description', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input the description of option!',
                        },
                      ],
                    })(<TextArea rows={4} />)}
                  </FormItem>
                </Form>
              );
            }}
          </Query>
        </Modal>
      );
    }
});

export default CreateOptionForm;
