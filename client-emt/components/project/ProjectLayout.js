import { withRouter } from 'next/router';
import { Tabs, Input } from 'antd';
import { Query } from 'react-apollo';
import MembersTab from './projectComponent/MembersTab';
import { getProjectById as GET_PROJECT_BY_ID } from '../../graphql/queries.gql';

const { TabPane } = Tabs;
class ProjectLayout extends React.Component {
  state = {
    editProjectName: false,
    editProjectDescription: false,
  };

  toggleEditName = () => {
    this.setState(prevState => ({ editProjectName: !prevState.editProjectName }));
  };
  render() {
    const { editProjectDescription, editProjectName } = this.state;
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
                <div>
                  <Input
                    type="text"
                    value={project.name}
                    style={{
                      display: editProjectName ? 'block' : 'none',
                      width: 300,
                      fontSize: 24,
                      fontWeight: 'bold',
                      marginBottom: 4,
                    }}
                  />
                  <div
                    style={{
                      display: editProjectName ? 'none' : 'block',
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                    onClick={this.toggleEditName}
                  >
                    {project.name}
                  </div>
                </div>

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
