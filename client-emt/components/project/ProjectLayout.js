import { withRouter } from 'next/router';
import { Tabs, Input } from 'antd';
import { Query } from 'react-apollo';
import Link from 'next/link';
import Router from 'next/router';
import _ from 'lodash';
import MembersTab from './projectComponent/MembersTab';
import DimensionsTab from './projectComponent/DimensionsTab';
import { getProjectById as GET_PROJECT_BY_ID } from '../../graphql/queries.gql';
import UpdateProjectModal from './projectComponent/UpdateProjectModal';

const { TabPane } = Tabs;
class ProjectLayout extends React.Component {
  callback = key => {
    const projectId = this.props.router.query.id;
    const site = _.capitalize(key);
    Router.push(`/project${site}?id=${projectId}`, `/project/${projectId}/${key}`);
  };

  render() {
    const { activeKey } = this.props;
    return (
      <React.Fragment>
        <Query query={GET_PROJECT_BY_ID} variables={{ id: this.props.router.query.id }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            const { project } = data;
            return (
              <div style={{ marginBottom: '1%' }}>
                <h2>
                  {project.name}
                  {project.isManagedByCurrentUser && (
                    <UpdateProjectModal projectId={this.props.router.query.id} />
                  )}
                </h2>
                <p>{project.description}</p>
              </div>
            );
          }}
        </Query>

        <Tabs activeKey={activeKey} onChange={this.callback}>
          <TabPane tab="Members" key="members">
            <MembersTab />
          </TabPane>
          <TabPane tab="Dimensions" key="dimensions">
            <DimensionsTab />
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
