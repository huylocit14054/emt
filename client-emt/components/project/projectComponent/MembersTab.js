import { withRouter } from 'next/router';
import { Table, Icon, Divider, Radio, message, Tag } from 'antd';
import { Query, Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import {
  getCurrentUserOnClient as GET_CURRENT_USER_QUERY,
  getMembersByProjectId as GET_MEMBERS_BY_PROJECTS_ID,
} from '../../../graphql/queries.gql';
import { updateMemberRoleInProject as UPDATE_MEMBER_ROLE_IN_PROJECT } from '../../../graphql/mutations.gql';
import If from '../../../utils/If';
import AddMemberForm from './MembersTap/AddMemberForm';

const humanizeString = require('humanize-string');

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Column, ColumnGroup } = Table;

function onChange(updateMemberRoleInProject, e, memberId) {
  updateMemberRoleInProject({
    variables: {
      input: {
        projectMemberId: memberId,
        role: e.target.value,
      },
    },
  });
  console.log(`radio checked:${e.target.value}`);
}

class MembersTab extends React.Component {
  render() {
    return (
      <Query
        query={GET_MEMBERS_BY_PROJECTS_ID}
        variables={{ projectId: this.props.router.query.id }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <ApolloConsumer>
              {client => {
                const project = client.readFragment({
                  id: `Project:${this.props.router.query.id}`,
                  fragment: gql`
                    fragment currentProject on Project {
                      isManagedByCurrentUser
                    }
                  `,
                });
                const { isManagedByCurrentUser } = project;

                return (
                  <React.Fragment>
                    <If condition={isManagedByCurrentUser} then={<AddMemberForm />} else={null} />
                    <Table loading={loading} dataSource={data.projectMembers} rowKey="id">
                      <Column
                        title="Username"
                        key="username"
                        render={member => <a href="javascript:;">{member.user.username}</a>}
                      />
                      <Column
                        title="Email"
                        key="email"
                        render={member => <a href="javascript:;">{member.user.email}</a>}
                      />
                      <Column
                        title="Role"
                        key="role"
                        render={member => {
                          if (member.user.role === 'root_admin') {
                            return <Tag color="gold">Root admin</Tag>;
                          }
                          return (
                            <Mutation
                              mutation={UPDATE_MEMBER_ROLE_IN_PROJECT}
                              onCompleted={data => {
                                console.log(data);
                              }}
                              onError={error => {
                                // If you want to send error to external service?
                                error.graphQLErrors.map(({ message }, i) => {
                                  message.error(message, 3);
                                });
                              }}
                            >
                              {(updateMemberRoleInProject, { loading, data, error }) => (
                                <If
                                  condition={isManagedByCurrentUser}
                                  then={
                                    <RadioGroup
                                      onChange={e =>
                                        onChange(updateMemberRoleInProject, e, member.id)
                                      }
                                      defaultValue={member.role}
                                    >
                                      <RadioButton value="member">Member</RadioButton>
                                      <RadioButton value="project_admin">Project Admin</RadioButton>
                                    </RadioGroup>
                                  }
                                  else={
                                    member.role === 'project_admin' ? (
                                      <Tag color="cyan">{humanizeString(member.role)}</Tag>
                                    ) : (
                                      <p>{humanizeString(member.role)}</p>
                                    )
                                  }
                                />
                              )}
                            </Mutation>
                          );
                        }}
                      />
                    </Table>
                  </React.Fragment>
                );
              }}
            </ApolloConsumer>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(MembersTab);
