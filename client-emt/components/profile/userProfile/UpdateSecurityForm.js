import { Mutation, withApollo } from 'react-apollo';
import { Form, Input, Spin, Icon, message, Button } from 'antd';
import { updatePassword as UPDATE_PASSWORD_MUTATION } from '../../../graphql/mutations.gql';

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const UpdatePasswordForm = Form.create({})(class extends React.Component {
    handleUpdate = (e, updateRecord) => {
      e.preventDefault();
      const { form } = this.props;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }

        updateRecord({
          variables: {
            input: {
              oldPassword: values.oldPassword,
              newPassword: values.newPassword,
            },
          },
        });
      });
    };

    render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 2 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 8,
            offset: 2,
          },
        },
      };
      return (
        <Mutation
          mutation={UPDATE_PASSWORD_MUTATION}
          onCompleted={({ updatePassword: { passwordIsUpdated } }) => {
            if (passwordIsUpdated) {
              message.success('Your Password is updated!', 3);
            }
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(({ message }, i) => {
              message.error(message, 3);
            });
          }}
        >
          {(updateRecord, { loading, data, error }) => (
            <Spin indicator={antIcon} spinning={loading} tip="Updating Password...">
              <br />
              <br />
              <Form onSubmit={e => this.handleUpdate(e, updateRecord)}>
                <FormItem {...formItemLayout} label="Old Password">
                  {getFieldDecorator('oldPassword', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your old password!',
                      },
                    ],
                  })(<Input type="password" />)}
                </FormItem>

                <FormItem {...formItemLayout} label="New Password">
                  {getFieldDecorator('newPassword', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your new password!',
                      },
                    ],
                  })(<Input type="password" />)}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Save
                  </Button>
                </FormItem>
              </Form>
            </Spin>
          )}
        </Mutation>
      );
    }
});

export default withApollo(UpdatePasswordForm);
