import React from 'react';
import Router, { withRouter } from 'next/router';
import { Tabs } from 'antd';
import { Query } from 'react-apollo';
import _ from 'lodash';
import MembersTab from './projectComponent/MembersTab';
import DimensionsTab from './projectComponent/DimensionsTab';
import UTMBuildersTab from './projectComponent/UTMBuilderTab';
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
    Router.prefetch(`/projectBuilders?id=${projectId}`);
  }

  callback = key => {
    const projectId = this.props.router.query.id;
    const site = key === 'utm_builder' ? 'UTMBuilder' : _.capitalize(key);
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
          if (error) return `Error! ${error.message}`;
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
                  <UTMBuildersTab />
                </TabPane>
                <TabPane tab="Members" key="members">
                  <MembersTab />
                </TabPane>

                {project.isManagedByCurrentUser && (
                  <TabPane tab="Dimensions" key="dimensions">
                    <DimensionsTab />
                  </TabPane>
                )}
                {project.isManagedByCurrentUser && (
                  <TabPane tab="Assignments" key="assignments">
                    <AssignmentsTab />
                  </TabPane>
                )}
                {project.isManagedByCurrentUser && (
                  <TabPane tab="Rules" key="rules">
                    <RulesTab />
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
