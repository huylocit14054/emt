import { List, Card, Avatar, Divider, Icon, Button } from 'antd';
import { Query } from 'react-apollo';
import Link from 'next/link';
import { getProjectOfCurrentUser as GET_PROJECTS_OF_CURRENT_USER } from '../../graphql/queries.gql';
import ListItem from './projectsList/ListItem';
import CreateProjectModal from './projectsList/CreateProjectModal';

const truncate = require('truncate');

class ProjectsList extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="projects-list">
        {currentUser.role === 'root_admin' && <CreateProjectModal />}
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

                    <List
                      grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                      }}
                      dataSource={projectsAsAdminOfCurrentUser}
                      renderItem={project => (
                        <List.Item>
                          <Link
                            prefetch
                            as={`/project/${project.id}/members`}
                            href={`/projectMembers?id=${project.id}`}
                          >
                            <a>
                              <Card>
                                <h4>
                                  <b>{project.name}</b>
                                </h4>
                                <p>{truncate(project.description, 30)}</p>
                                <div>
                                  <Avatar icon="user" />
                                  <Avatar>U</Avatar>
                                  <Avatar>USER</Avatar>
                                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                  <Avatar
                                    style={{
                                      color: '#f56a00',
                                      backgroundColor: '#fde3cf',
                                    }}
                                  >
                                    U
                                  </Avatar>
                                  <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                </div>
                              </Card>
                            </a>
                          </Link>
                        </List.Item>
                      )}
                    />

                    {projectsAsMemberOfCurrentUser.length > 0 && (
                      <React.Fragment>
                        <Divider orientation="left">
                          <Icon type="user" style={{ marginRight: 8 }} />
                          As Member
                        </Divider>
                        <List
                          grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 6,
                            xxl: 3,
                          }}
                          dataSource={projectsAsMemberOfCurrentUser}
                          renderItem={project => (
                            <List.Item>
                              <Link
                                prefetch
                                as={`/project/${project.id}/members`}
                                href={`/projectMembers?id=${project.id}`}
                              >
                                <a>
                                  <Card>
                                    <h2>
                                      <b>{project.name}</b>
                                    </h2>
                                    <p>{truncate(project.description, 70)}</p>
                                    <div>
                                      <Avatar icon="user" />
                                      <Avatar>U</Avatar>
                                      <Avatar>USER</Avatar>
                                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                      <Avatar
                                        style={{
                                          color: '#f56a00',
                                          backgroundColor: '#fde3cf',
                                        }}
                                      >
                                        U
                                      </Avatar>
                                      <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                    </div>
                                  </Card>
                                </a>
                              </Link>
                            </List.Item>
                          )}
                        />
                      </React.Fragment>
                    )}
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
