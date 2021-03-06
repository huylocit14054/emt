import { Divider, Icon } from 'antd';
import { Query } from 'react-apollo';
import React from 'react';
import {
  getProjectOfCurrentUser as GET_PROJECTS_OF_CURRENT_USER,
  getClientCurrentUser as GET_CURRENT_USER_QUERY,
} from '../../graphql/queries.gql';
import ListOfProjects from './projectsList/ListOfProjects';
import CreateProjectModal from './projectsList/CreateProjectModal';

class ProjectsList extends React.Component {
  render() {
    return (
      <div className="projects-list">
        <Query query={GET_CURRENT_USER_QUERY}>
          {({ data: { currentUser } }) =>
            currentUser && currentUser.role === 'root_admin' && <CreateProjectModal />
          }
        </Query>

        <Query query={GET_PROJECTS_OF_CURRENT_USER}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            const { projectsAsAdminOfCurrentUser, projectsAsMemberOfCurrentUser } = data;

            return (
              <div>
                {projectsAsAdminOfCurrentUser.length > 0 && (
                  <React.Fragment>
                    <Divider orientation="left">
                      <Icon type="solution" style={{ marginRight: 8 }} />As Admin
                    </Divider>

                    <ListOfProjects projects={projectsAsAdminOfCurrentUser} />
                  </React.Fragment>
                )}
                {projectsAsMemberOfCurrentUser.length > 0 && (
                  <React.Fragment>
                    <Divider orientation="left">
                      <Icon type="user" style={{ marginRight: 8 }} />
                      As Member
                    </Divider>
                    <ListOfProjects projects={projectsAsMemberOfCurrentUser} />
                  </React.Fragment>
                )}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default ProjectsList;
