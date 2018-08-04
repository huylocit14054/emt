import React from 'react';
import { Mutation, Query, withApollo } from 'react-apollo';
import { Form, Input, Spin, Icon, message, Button, Col, Row } from 'antd';
import { updateUserInfo as UPDATE_COMPANY_INFO } from '../../../../graphql/mutations.gql';
import { getCurrentUserProfile as GET_CURRENT_COMPANY_PROFILE_QUERY } from '../../../../graphql/queries.gql';

const FormItem = Form.Item;

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const UpdateCompanyForm = Form.create({})(
  class extends React.Component {
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
          mutation={UPDATE_COMPANY_INFO}
          onCompleted={() => {
            message.success('Your Profile is updated!', 3);
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(updateUserInfo, { loading }) => (
            <Spin indicator={antIcon} spinning={loading} tip="Updating Profile...">
              <br />
              <br />
              <Query query={GET_CURRENT_COMPANY_PROFILE_QUERY}>
                {({ data, loading }) => {
                  const { profile } = data;
                  if (loading) return <p>loading...</p>;

                  return (
                    <Form layout="vertical">
                      <Row gutter={16}>
                        <Col span={24}>
                          <Form.Item label="Name">
                            {getFieldDecorator('name', {
                              rules: [{ required: true, message: "Please enter company's name" }],
                            })(<Input placeholder="e.g Enhance" autoFocus />)}
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item label="Company admin email">
                            {getFieldDecorator('companyAdminEmail', {
                              rules: [
                                { required: true, message: 'Please enter company admin email' },
                              ],
                            })(<Input placeholder="e.g abc@gmail.com" />)}
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <MyQuery query={GET_ALL_PLANS_OF_APPLICATION}>
                            {({ allPlans }) => (
                              <Form.Item label="Choose Plan">
                                {getFieldDecorator('planId', {
                                  initialValue: allPlans[0].id,
                                })(
                                  <Radio.Group buttonStyle="solid">
                                    {allPlans.map(plan => (
                                      <Radio.Button value={plan.id} key={plan.id}>
                                        {plan.name}
                                      </Radio.Button>
                                    ))}
                                  </Radio.Group>
                                )}
                              </Form.Item>
                            )}
                          </MyQuery>
                        </Col>
                      </Row>
                    </Form>
                  );
                }}
              </Query>
            </Spin>
          )}
        </Mutation>
      );
    }
  }
);

export default withApollo(UpdateCompanyForm);
