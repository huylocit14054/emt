import React from 'react';

import { Form, Icon, Input, Button, Select, message } from 'antd';
import humanizeString from 'humanize-string';
import MyQuery from '../../components/MyQuery';
import { addMemberToCompany as ADD_MEMBER_TO_COMPANY } from './mutations.gql';
import {
  companyMembers as GET_COMPANY_MEMBERS,
  getCompany as GET_COMPANY_BY_ID,
} from '../../graphql/queries.gql';
import MyMutation from '../../components/MyMutation';
import { UTM_SERVICE, OMS_SERVICE, OMS_SERVICE_ROLES, UTM_SERVICE_ROLES } from '../../constants';

const FormItem = Form.Item;
const { Option, OptGroup } = Select;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class MemberInvitationInput extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e, addMutation) => {
    e.preventDefault();
    const { companyId } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        addMutation({
          variables: {
            input: {
              ...values,
              companyId,
            },
          },
        });
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const rolesError = isFieldTouched('roles') && getFieldError('roles');
    return (
      <MyMutation
        mutation={ADD_MEMBER_TO_COMPANY}
        onCompleted={() => {
          message.success('Email Sent !');
        }}
        update={(
          cache,
          {
            data: {
              addMemberToCompany: { addedMember },
            },
          }
        ) => {
          const data = cache.readQuery({
            query: GET_COMPANY_MEMBERS,
            variables: { companyId: parseInt(this.props.companyId) },
          });

          data.companyMembers.splice(0, 0, addedMember);

          cache.writeQuery({
            query: GET_COMPANY_MEMBERS,
            variables: { companyId: parseInt(this.props.companyId) },
            data,
          });
        }}
      >
        {(addMutation, { loading }) => (
          <Form layout="inline" onSubmit={e => this.handleSubmit(e, addMutation)}>
            <FormItem validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: "Email can't be blank!" },
                  { type: 'email', message: 'Must be a valid email' },
                ],
              })(
                <Input
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email"
                />
              )}
            </FormItem>
            <MyQuery
              query={GET_COMPANY_BY_ID}
              variables={{ companyId: parseInt(this.props.companyId) }}
            >
              {({ company }) => (
                <FormItem validateStatus={rolesError ? 'error' : ''} help={rolesError || ''}>
                  {getFieldDecorator('roles', {
                    rules: [{ required: false, type: 'array' }],
                    initialValue: [],
                  })(
                    <Select
                      mode="multiple"
                      placeholder="Please select roles"
                      style={{ width: '370px' }}
                    >
                      {company.services.map((service, index) => {
                        if (service.name.toLowerCase().includes(UTM_SERVICE))
                          return (
                            <OptGroup label={service.name.toUpperCase()} key={index}>
                              {UTM_SERVICE_ROLES.map((role, i) => (
                                <Option value={role} key={i}>
                                  {humanizeString(role)}
                                </Option>
                              ))}
                            </OptGroup>
                          );
                        if (service.name.toLowerCase().includes(OMS_SERVICE))
                          return (
                            <OptGroup label={service.name.toUpperCase()} key={index}>
                              {OMS_SERVICE_ROLES.map((role, i) => (
                                <Option value={role} key={i}>
                                  {humanizeString(role)}
                                </Option>
                              ))}
                            </OptGroup>
                          );
                      })}
                    </Select>
                  )}
                </FormItem>
              )}
            </MyQuery>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
                loading={loading}
              >
                Invite
              </Button>
            </FormItem>
          </Form>
        )}
      </MyMutation>
    );
  }
}

const WrappedMemberInvitationInput = Form.create()(MemberInvitationInput);

// ReactDOM.render(<WrappedMemberInvitationInput />, mountNode);

export default WrappedMemberInvitationInput;
