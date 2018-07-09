import React from 'react';
import Router, { withRouter } from 'next/router';
import { Tabs, Alert } from 'antd';
import { Query } from 'react-apollo';
import _ from 'lodash';
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
  componentDidMount() {
    const projectId = this.props.router.query.id;
    Router.prefetch(`/projectDimensions?id=${projectId}`);
    Router.prefetch(`/projectAssignments?id=${projectId}`);
    Router.prefetch(`/projectMembers?id=${projectId}`);
    Router.prefetch(`/projectRules?id=${projectId}`);
    Router.prefetch(`/projectUTMBuilder?id=${projectId}`);
    Router.prefetch(`/projectUTMHistory?id=${projectId}`);
    Router.prefetch(`/projectUTMAnalysis?id=${projectId}`);
  }

  callback = key => {
    const projectId = this.props.router.query.id;
    let site = '';
    switch (key) {
      case 'utm_builder':
        site = 'UTMBuilder';
        break;
      case 'utm_history':
        site = 'UTMHistory';
        break;
      case 'utm_analysis':
        site = 'UTMAnalysis';
        break;
      default:
        site = _.capitalize(key);
        break;
    }

    Router.push(`/project${site}?id=${projectId}`, `/project/${projectId}/${key}`);
  };

  render() {
    const { activeKey } = this.props;
    if (!this.props.router.query.id) {
      return <div>Loading...</div>;
    }
    return (
      <Query query={GET_PROJECT_BY_ID} variables={{ id: parseInt(this.props.router.query.id) }}>
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
                  {project.isManagedByCurrentUser && (
                    <UpdateProjectModal projectId={this.props.router.query.id} />
                  )}
                </h2>
                <p>{project.description}</p>
              </div>
              <Tabs activeKey={activeKey} onChange={this.callback} animated={false}>
                <TabPane tab="UTM Builder" key="utm_builder">
                  <UTMBuilderTab />
                </TabPane>
                <TabPane tab="UTM History" key="utm_history">
                  <UTMHistoryTab />
                </TabPane>
                {project.isManagedByCurrentUser && (
                  <TabPane tab="UTM Analysis" key="utm_analysis">
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
