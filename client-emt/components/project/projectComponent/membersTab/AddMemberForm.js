import React from 'react';
import { Form, Input, Select, Button, Spin, Icon, message } from 'antd';
import { withApollo, Mutation } from 'react-apollo';
import $ from 'jquery';
import Highlighter from 'react-highlight-words';
import { Image } from 'cloudinary-react';
import _ from 'lodash';
import { CLOUD_NAME } from '../../../../constants';
import {
  usersSuggestion as USERS_SUGGESTION_QUERY,
  getMembersByProjectId as GET_MEMBERS_BY_PROJECTS_ID_QUERY,
} from '../../../../graphql/queries.gql';
import { addMemberToProject as ADD_MEMBER_TO_PROJECT_MUTATION } from '../../../../graphql/mutations.gql';

const FormItem = Form.Item;
const { Option } = Select;

const AddMemberForm = Form.create()(
  class extends React.Component {
    state = {
      usersSuggestion: [],
      value: '',
      fetching: false,
    };

    onAdd = async (e, addMemberToProject) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          addMemberToProject({
            variables: {
              input: {
                projectId: parseInt(this.props.projectId),
                ...values,
              },
            },
            refetchQueries: [
              {
                query: GET_MEMBERS_BY_PROJECTS_ID_QUERY,
                variables: {
                  projectId: parseInt(this.props.projectId),
                },
              },
            ],
          });
        }
      });
    };

    onSelectUser = () => {
      $('.ant-select-selection__rendered').click();
    };

    fetchUserSuggestion = async value => {
      this.setState({ fetching: true });
      this.setState({ value });
      const { data } = await this.props.client.query({
        query: USERS_SUGGESTION_QUERY,
        variables: {
          query: value,
        },
      });
      const { usersSuggestion } = data;

      this.setState({ usersSuggestion, fetching: false });
    };

    render() {
      const { fetching, usersSuggestion, value } = this.state;
      const { getFieldDecorator } = this.props.form;

      return (
        <Mutation
          mutation={ADD_MEMBER_TO_PROJECT_MUTATION}
          onCompleted={data => {
            const { form } = this.props;

            message.success('Member Added');
            form.resetFields();
          }}
          onError={error => {
            this.props.form.resetFields();

            error.graphQLErrors.map(({ message }, i) => {
              message.error(message, 3);
            });
          }}
        >
          {(addMemberToProject, { loading }) => (
            <Form layout="inline" onSubmit={e => this.onAdd(e, addMemberToProject)}>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input the username/email of user!',
                    },
                  ],
                  initialValue: '',
                })(
                  <Select
                    mode="combobox"
                    placeholder="Username or email address"
                    notFoundContent={
                      fetching ? <Icon type="loading" style={{ fontSize: 24 }} spin /> : null
                    }
                    filterOption={false}
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    onSearch={this.fetchUserSuggestion}
                    onSelect={this.onSelectUser}
                    style={{ width: '350px' }}
                  >
                    {usersSuggestion.map(user => (
                      <Option key={user.username}>
                        <Image
                          cloudName={CLOUD_NAME}
                          publicId={user.avatar}
                          width="25"
                          height="25"
                          crop="scale"
                          style={{
                            borderRadius: '50%',
                            border: '1px solid #00b5d0',
                            marginRight: 10,
                          }}
                        />
                        <Highlighter
                          highlightClassName="highlight-keyword-username"
                          searchWords={[this.state.value]}
                          autoEscape
                          textToHighlight={user.username}
                        />{' '}
                        |
                        <Highlighter
                          className="small-email-text"
                          highlightClassName="highlight-keyword-email"
                          searchWords={[this.state.value]}
                          autoEscape
                          textToHighlight={user.email}
                          style={{ marginLeft: 40 }}
                        />
                      </Option>
                    ))}
                  </Select>
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('role', {
                  initialValue: 'member',
                })(
                  <Select placeholder="Please select member's role" onSelect={this.onSelectRole}>
                    <Option key="member">member</Option>
                    <Option key="project_admin">admin</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Add
                </Button>
              </FormItem>
            </Form>
          )}
        </Mutation>
      );
    }
  }
);

export default withApollo(AddMemberForm);
