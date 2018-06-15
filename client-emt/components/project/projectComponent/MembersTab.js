import { withRouter } from "next/router";
import { Table, Icon, Divider, Radio, message } from "antd";
import { Query, Mutation } from "react-apollo";
import { getMembersByProjectId as GET_MEMBERS_BY_PROJECTS_ID } from "../../../graphql/queries.gql";
import { updateMemberRoleInProject as UPDATE_MEMBER_ROLE_IN_PROJECT } from "../../../graphql/mutations.gql";
import AddMemberForm from "./MembersTap/AddMemberForm";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(updateMemberRoleInProject, e, memberId) {
  updateMemberRoleInProject({
    variables: {
      input: {
        projectMemberId: memberId,
        role: e.target.value
      }
    }
  });
  console.log(`radio checked:${e.target.value}`);
}

const columns = [
  {
    title: "Username",
    render: member => <a href="javascript:;">{member.user.username}</a>
  },
  {
    title: "Email",
    render: member => <a href="javascript:;">{member.user.email}</a>
  },
  {
    title: "Role",
    render: member => {
      if (member.user.role === "root_admin") {
        return <p>Root Admin</p>;
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
            <RadioGroup
              onChange={e => onChange(updateMemberRoleInProject, e, member.id)}
              defaultValue={member.role}
            >
              <RadioButton value="member">Member</RadioButton>
              <RadioButton value="project_admin">Project Admin</RadioButton>
            </RadioGroup>
          )}
        </Mutation>
      );
    }
  }
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
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
              <Table
                columns={columns}
                dataSource={data.projectMembers}
                rowKey="id"
              />
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default withRouter(MembersTab);
