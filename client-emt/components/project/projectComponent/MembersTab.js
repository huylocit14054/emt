import { withRouter } from 'next/router';
import { Table, Icon, Divider, Radio, message, Tag } from 'antd';
import { Query, Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { Image } from 'cloudinary-react';
import { CLOUD_NAME } from '../../../constants';
import { getMembersByProjectId as GET_MEMBERS_BY_PROJECTS_ID } from '../../../graphql/queries.gql';
import { updateMemberRoleInProject as UPDATE_MEMBER_ROLE_IN_PROJECT } from '../../../graphql/mutations.gql';
import If from '../../../utils/If';
import AddMemberForm from './membersTab/AddMemberForm';

const humanizeString = require('humanize-string');

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Column } = Table;

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
    const projectId = this.props.router.query.id;
    return (
      <Query query={GET_MEMBERS_BY_PROJECTS_ID} variables={{ projectId }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <ApolloConsumer>
              {client => {
                const project = client.readFragment({
                  id: `Project:${projectId}`,
                  fragment: gql`
                    fragment currentProject on Project {
                      isManagedByCurrentUser
                    }
                  `,
                });
                const { isManagedByCurrentUser } = project;

                return (
                  <React.Fragment>
                    <If
                      condition={isManagedByCurrentUser}
                      then={<AddMemberForm projectId={projectId} />}
                      else={null}
                    />
                    <br />
                    <Table
                      pagination={{ pageSize: 7 }}
                      loading={loading}
                      dataSource={data.projectMembers}
                      rowKey="id"
                    >
                      <Column
                        title="Username"
                        key="username"
                        render={member => (
                          <a href="javascript:;">
                            {' '}
                            <Image
                              cloudName={CLOUD_NAME}
                              publicId={member.user.avatar}
                              width="40"
                              crop="scale"
                              style={{ borderRadius: '50%', marginRight: 20 }}
                            />
                            {member.user.username}
                          </a>
                        )}
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
                            return <Tag color="#faad14">Root admin</Tag>;
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
                                      <Tag color="#13c2c2">{humanizeString(member.role)}</Tag>
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
