import { Form, Icon, Input, Button, Spin } from 'antd';
import React from 'react';
import { Mutation, withApollo } from 'react-apollo';
import cookie from 'cookie';
import Link from 'next/link';
import redirect from '../../lib/redirect';
import { loginUser as LOGIN_USER_QUERY } from '../../graphql/mutations.gql';

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class NormalLoginForm extends React.Component {
  render() {
    const { client } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Mutation
        mutation={LOGIN_USER_QUERY}
        onCompleted={data => {
          console.log(data);
          // Store the token in cookie
          document.cookie = cookie.serialize('token', data.loginUser.token, {
            maxAge: 30 * 24 * 60 * 60, // 30 days
          });
          // Force a reload of all the current queries now that the user is
          // logged in
          client.cache.reset().then(() => {
            redirect({}, '/');
          });
        }}
        onError={error => {
          // If you want to send error to external service?
          error.graphQLErrors.map(message => {
            message.error(message.error, 3);
          });
        }}
      >
        {(loginUser, { loading }) => (
          <div className="form-layout">
            <div className="form-border">
              <Spin indicator={antIcon} spinning={loading} tip="Signing in...">
                <Link prefetch href="/">
                  <a>
                    <img
                      src="http://sv1.upsieutoc.com/2018/06/25/enhance-logo.png"
                      className="logo"
                      alt="logo"
                    />
                  </a>
                </Link>

                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    this.props.form.validateFields((err, values) => {
                      if (!err) {
                        console.log('Received values of form: ', values);
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
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default withApollo(WrappedNormalLoginForm);
