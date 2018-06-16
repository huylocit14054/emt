import { Mutation, Query, withApollo } from 'react-apollo';
import { Form, Input, Spin, Icon, message, Button } from 'antd';
import { updateUserInfo as UPDATE_USER_INFO } from '../../../graphql/mutations.gql';
import { getCurrentUserProfile as GET_CURRENT_USER_PROFILE_QUERY } from '../../../graphql/queries.gql';

const FormItem = Form.Item;

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const UpdateUserForm = Form.create({})(class extends React.Component {
    handleUpdate = (e, updateUserInfo) => {
      e.preventDefault();
      const { form } = this.props;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        updateUserInfo({
          variables: {
            input: {
              attributes: JSON.stringify(values),
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
          mutation={UPDATE_USER_INFO}
          onCompleted={() => {
            message.success('Your Profile is updated!', 3);
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(({ message }, i) => {
              message.error(message, 3);
            });
          }}
        >
          {(updateUserInfo, { loading, data, error }) => (
            <Spin indicator={antIcon} spinning={loading} tip="Updating Profile...">
              <br />
              <Query
                query={GET_CURRENT_USER_PROFILE_QUERY}
                onCompleted={data => {}}
                onError={error => {
                  // If you want to send error to external service?
                }}
              >
                {({ loading, error, data }) => {
                  const { profile } = data;
                  if (loading) return <p>loading...</p>;

                  return (
                    <Form onSubmit={e => this.handleUpdate(e, updateUserInfo)}>
                      <FormItem {...formItemLayout} label="id" style={{ display: 'none' }}>
                        {getFieldDecorator('id', {
                          initialValue: profile.id,
                        })(<Input />)}
                      </FormItem>
                      <FormItem {...formItemLayout} label="Username">
                        {getFieldDecorator('username', {
                          rules: [
                            {
                              required: true,
                              message: 'Please input your username!',
                            },
                          ],
                          initialValue: profile.username,
                        })(<Input />)}
                      </FormItem>
                      <FormItem {...formItemLayout} label="Email">
                        {getFieldDecorator('email', {
                          rules: [
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ],
                          initialValue: profile.email,
                        })(<Input />)}
                      </FormItem>

                      <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" loading={loading}>
                          Save
                        </Button>
                      </FormItem>
                    </Form>
                  );
                }}
              </Query>
            </Spin>
          )}
        </Mutation>
      );
    }
});

export default withApollo(UpdateUserForm);
