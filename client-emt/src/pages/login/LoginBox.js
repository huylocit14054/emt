import { Form, Icon, Input, Button, Spin, message } from 'antd';
import { Mutation, withApollo } from 'react-apollo';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { loginUser as LOGIN_USER_MUTATION } from '../../graphql/mutations.gql';
import { getCurrentUser as GET_CURRENT_USER } from '../../graphql/queries.gql';
import { AUTH_TOKEN } from '../../constants';

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const LoginBox = ({ history, client, form: { getFieldDecorator }, form }) => {
  return (
    <Mutation
      mutation={LOGIN_USER_MUTATION}
      onCompleted={data => {
        // Store the token in localstorage
        localStorage.setItem(AUTH_TOKEN, data.loginUser.token);
        // Force a reload of all the current queries now that the user is
        // logged in
        client
          .resetStore()
          .then(() => {
            client.query({
              query: GET_CURRENT_USER,
            });
          })
          .then(() => history.replace('/'));
      }}
      onError={error => {
        // If you want to send error to external service?
        error.graphQLErrors.map(error => {
          message.error(error.message, 3);
        });
      }}
    >
      {(loginUser, { loading }) => (
        <div className="form-layout">
          <div className="form-border">
            <Spin indicator={antIcon} spinning={loading} tip="Signing in...">
              <Link to="/">
                <img
                  src="http://sv1.upsieutoc.com/2018/06/25/enhance-logo.png"
                  className="logo"
                  alt="logo"
                />
              </Link>

              <Form
                onSubmit={e => {
                  e.preventDefault();
                  form.validateFields((err, values) => {
                    if (!err) {
                      loginUser({
                        variables: {
                          input: {
                            username: values.username,
                            password: values.password,
                          },
                        },
                      });
                    }
                  });
                }}
                className="login-form"
              >
                <FormItem>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username or Email"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />
                  )}
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ marginTop: 40 }}
                  >
                    Log in
                  </Button>
                </FormItem>
              </Form>
            </Spin>
          </div>
        </div>
      )}
    </Mutation>
  );
};

const WrappedNormalLoginForm = Form.create()(LoginBox);
export default withApollo(withRouter(WrappedNormalLoginForm));
