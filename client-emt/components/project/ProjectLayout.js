import { withRouter } from 'next/router';
import { Tabs } from 'antd';
import { Query } from 'react-apollo';
import MembersTab from './projectComponent/MembersTab';
import { getProjectById as GET_PROJECT_BY_ID } from '../../graphql/queries.gql';

const { TabPane } = Tabs;

const ProjectLayout = ({ activeKey, router }) => (
  <Query query={GET_PROJECT_BY_ID} variables={{ id: router.query.id }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      const { project } = data;

      return project && (
        <div style={{ marginBottom: '1%' }}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>

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
        </div>
      );
    }}
  </Query>
);

export default withRouter(ProjectLayout);
