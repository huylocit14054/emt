import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Radio, Tag, notification, Button, Popconfirm, message } from 'antd';
import { Query, Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { Image } from 'cloudinary-react';
import { CLOUD_NAME } from '../../../constants';
import {
  getMembersByProjectId as GET_MEMBERS_BY_PROJECTS_ID,
  getCurrentUser as GET_CURRENT_USER_QUERY,
} from '../../../graphql/queries.gql';
import {
  updateMemberRoleInProject as UPDATE_MEMBER_ROLE_IN_PROJECT,
  changeMemberAccessRight as CHANGE_MEMBER_ACCESS_RIGHT_MUTATION,
} from '../../../graphql/mutations.gql';
import If from '../../../utils/If';
import AddMemberForm from './membersTab/AddMemberForm';

const humanizeString = require('humanize-string');

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Column } = Table;
const openNotification = (username, newRole) => {
  notification.open({
    message: <b>Role Updated</b>,
    description: (
      <div>
        <b>{username}</b>'s role is set to <b>{newRole}</b>
      </div>
    ),
  });
};

function onChange(updateMemberRoleInProject, e, memberId, username) {
  const role = e.target.value;
  updateMemberRoleInProject({
    variables: {
      input: {
        projectMemberId: memberId,
        role,
      },
    },
    update: client => {
      // update dimension options
      client.writeFragment({
        id: `ProjectMember:${memberId}`,
        fragment: gql`
          fragment projectMember on ProjectMember {
            role
          }
        `,
        data: {
          role,
          __typename: 'ProjectMember',
        },
      });
      openNotification(username, humanizeString(e.target.value));
    },
  });
}

class MembersTab extends React.Component {
  render() {
    const { projectId } = this.props.match.params;
    return (
      <Query query={GET_MEMBERS_BY_PROJECTS_ID} variables={{ projectId: parseInt(projectId) }}>
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
                const { currentUser } = client.readQuery({
                  query: GET_CURRENT_USER_QUERY,
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
                      bordered
                      pagination={{ pageSize: 7 }}
                      loading={loading}
                      dataSource={data.projectMembers}
                      rowClassName={member => {
                        if (member.status === 'restricted') return 'restricted-member';
                      }}
                      rowKey="id"
                    >
                      <Column
                        title="Username"
                        key="username"
                        render={member => (
                          <a>
                            {' '}
                            <Image
                              cloudName={CLOUD_NAME}
                              publicId={member.user.avatar}
                              width="40"
                              height="40"
                              crop="scale"
                              style={{
                                borderRadius: '50%',
                                border: '1px solid #00b5d0',
                                marginRight: 20,
                              }}
                            />
                            {member.user.username}
                          </a>
                        )}
                      />
                      <Column
                        title="Email"
                        key="email"
                        render={member => <a>{member.user.email}</a>}
                      />
                      <Column
                        title="Role"
                        key="role"
                        align="center"
                        render={member => {
                          if (member.user.role === 'root_admin') {
                            return <Tag color="#faad14">Root admin</Tag>;
                          }
                          return (
                            <Mutation
                              mutation={UPDATE_MEMBER_ROLE_IN_PROJECT}
                              onError={error => {
                                // If you want to send error to external service?
                                error.graphQLErrors.map(error => {
                                  message.error(error.message, 3);
                                });
                              }}
                            >
                              {updateMemberRoleInProject => (
                                <If
                                  condition={
                                    isManagedByCurrentUser && member.user.id !== currentUser.id
                                  }
                                  then={
                                    <RadioGroup
                                      onChange={e =>
                                        onChange(
                                          updateMemberRoleInProject,
                                          e,
                                          member.id,
                                          member.user.username
                                        )
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
                      {isManagedByCurrentUser && (
                        <Column
                          title="Action"
                          key="action"
                          align="center"
                          render={member => {
                            if (member.user.role === 'root_admin') {
                              return null;
                            }
                            if (
                              (member.role === 'project_admin' &&
                                currentUser.role === 'root_admin') ||
                              member.role === 'member'
                            ) {
                              return member.status === 'restricted' ? (
                                <Mutation
                                  mutation={CHANGE_MEMBER_ACCESS_RIGHT_MUTATION}
                                  onError={error => {
                                    // If you want to send error to external service?
                                    error.graphQLErrors.map(error => {
                                      message.error(error.message, 3);
                                    });
                                  }}
                                  variables={{
                                    input: {
                                      attributes: JSON.stringify({
                                        id: member.id,
                                        status: 'active',
                                      }),
                                    },
                                  }}
                                >
                                  {changeMemberAccessRight => (
                                    <Popconfirm
                                      placement="top"
                                      title={`Are you sure unban ${member.user.username}`}
                                      onConfirm={changeMemberAccessRight}
                                      okText="Yes"
                                      cancelText="No"
                                    >
                                      <Button type="primary" icon="user-add">
                                        Unban member
                                      </Button>
                                    </Popconfirm>
                                  )}
                                </Mutation>
                              ) : (
                                <Mutation
                                  mutation={CHANGE_MEMBER_ACCESS_RIGHT_MUTATION}
                                  onError={error => {
                                    // If you want to send error to external service?
                                    error.graphQLErrors.map(error => {
                                      message.error(error.message, 3);
                                    });
                                  }}
                                  variables={{
                                    input: {
                                      attributes: JSON.stringify({
                                        id: member.id,
                                        status: 'restricted',
                                      }),
                                    },
                                  }}
                                >
                                  {changeMemberAccessRight => (
                                    <Popconfirm
                                      placement="top"
                                      title={`Are you sure ban ${member.user.username}`}
                                      onConfirm={changeMemberAccessRight}
                                      okText="Yes"
                                      cancelText="No"
                                    >
                                      <Button type="danger" icon="user-delete">
                                        Ban member
                                      </Button>
                                    </Popconfirm>
                                  )}
                                </Mutation>
                              );
                            }
                            return null;
                          }}
                        />
                      )}
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
