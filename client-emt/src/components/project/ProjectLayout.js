import React from 'react';
import { withRouter } from 'react-router-dom';
import { Tabs, Alert } from 'antd';
import { Query } from 'react-apollo';
import MembersTab from './projectComponent/MembersTab';
import DimensionsTab from './projectComponent/DimensionsTab';
import UTMBuilderTab from './projectComponent/UTMBuilderTab';
import UTMHistoryTab from './projectComponent/UTMHistoryTab';
import UTMAnalysisTab from './projectComponent/UTMAnalysisTab';
import { getProjectById as GET_PROJECT_BY_ID } from '../../graphql/queries.gql';
import UpdateProjectModal from './projectComponent/UpdateProjectModal';
import AssignmentsTab from './projectComponent/AssignmentsTab';
import RulesTab from './projectComponent/RulesTab';

const { TabPane } = Tabs;
class ProjectLayout extends React.Component {
  callback = key => {
    const { projectId } = this.props.match.params;
    this.props.history.push(`/project/${projectId}/${key}`);
  };

  render() {
    const { activeKey, match } = this.props;
    const { projectId } = match.params;
    if (!projectId) {
      return <div>Loading...</div>;
    }
    return (
      <Query query={GET_PROJECT_BY_ID} variables={{ id: parseInt(projectId) }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error)
            return (
              <Alert
                message="Warning"
                description={error.graphQLErrors.map((error, index) => (
                  <div key={index}>{error.message}</div>
                ))}
                type="warning"
                showIcon
              />
            );
          const { project } = data;
          return (
            <React.Fragment>
              <div style={{ marginBottom: '1%' }}>
                <h2>
                  {project.name}
                  {project.isManagedByCurrentUser && <UpdateProjectModal projectId={projectId} />}
                </h2>
                <p>{project.description}</p>
              </div>
              <Tabs activeKey={activeKey} onChange={this.callback} animated={false}>
                <TabPane tab="UTM Builder" key="utm-builder">
                  <UTMBuilderTab />
                </TabPane>
                <TabPane tab="UTM History" key="utm-history">
                  <UTMHistoryTab />
                </TabPane>
                {project.isManagedByCurrentUser && (
                  <TabPane tab="UTM Analysis" key="utm-analysis">
                    <UTMAnalysisTab />
                  </TabPane>
                )}

                {project.isManagedByCurrentUser && (
                  <TabPane tab="Dimensions" key="dimensions">
                    <DimensionsTab />
                  </TabPane>
                )}
                {project.isManagedByCurrentUser && (
                  <TabPane tab="Rules" key="rules">
                    <RulesTab />
                  </TabPane>
                )}
                <TabPane tab="Members" key="members">
                  <MembersTab />
                </TabPane>

                {project.isManagedByCurrentUser && (
                  <TabPane tab="Assignments" key="assignments">
                    <AssignmentsTab />
                  </TabPane>
                )}
              </Tabs>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(ProjectLayout);
