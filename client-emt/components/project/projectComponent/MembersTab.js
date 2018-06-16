import { withRouter } from 'next/router';
import { Table, Icon, Divider, Radio, message, Tag } from 'antd';
import { Query, Mutation } from 'react-apollo';
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

const columns = [
  {
    title: 'Username',
    key: 'username',
    render: member => <a href="javascript:;">{member.user.username}</a>,
  },
  {
    title: 'Email',
    key: 'email',
    render: member => <a href="javascript:;">{member.user.email}</a>,
  },
  {
    title: 'Role',
    key: 'role',
    render: member => {
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
            <Query query={GET_CURRENT_USER_QUERY}>
              {({ loading, error, data }) =>
                (!loading ? (
                  <If
                    condition={data.currentUser.role === 'root_admin'}
                    then={
                      <RadioGroup
                        onChange={e => onChange(updateMemberRoleInProject, e, member.id)}
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
                ) : null)
              }
            </Query>
          )}
        </Mutation>
      );
    },
  },
];

class MembersTab extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AddMemberForm />
        <br />
        <Query
          query={GET_MEMBERS_BY_PROJECTS_ID}
          variables={{ projectId: this.props.router.query.id }}
        >
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return <Table columns={columns} dataSource={data.projectMembers} rowKey="id" />;
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default withRouter(MembersTab);
