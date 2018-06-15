import { withRouter } from "next/router";
import { Tabs } from "antd";
import { Query } from "react-apollo";
import MembersTab from "./projectComponent/MembersTab";
import { getProjectById as GET_PROJECT_BY_ID } from "../../graphql/queries.gql";
const { TabPane } = Tabs;
class ProjectLayout extends React.Component {
  render() {
    const { activeKey } = this.props;
    return (
      <React.Fragment>
        <Query
          query={GET_PROJECT_BY_ID}
          variables={{ id: this.props.router.query.id }}
        >
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const { project } = data;
            return (
              <div style={{ marginBottom: "1%" }}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            );
          }}
        </Query>

        <Tabs activeKey={activeKey}>
          <TabPane tab="Members" key="members">
            <MembersTab />
          </TabPane>
          <TabPane tab="Dimensions" key="dimensions">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Assignments" key="assignments">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default withRouter(ProjectLayout);
