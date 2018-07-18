import { Layout, Menu, Icon } from 'antd';
import { Query } from 'react-apollo';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { getClientCurrentUser as GET_CURRENT_USER_QUERY } from '../graphql/queries.gql';
import TopHeader from './TopHeader';

const { Sider, Content } = Layout;

class NavigationLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { hidden, location, children } = this.props;
    let currentPage = location.pathname;
    currentPage =
      currentPage.includes('project') || currentPage === '/'
        ? 'projects'
        : currentPage.replace('/', '');
    if (hidden) {
      return <div>{children}</div>;
    }
    return (
      <Layout id="navigation-layout">
        <Query query={GET_CURRENT_USER_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            const currentUserSync = data.currentUser;
            return (
              <Sider collapsed style={{ paddingTop: 0, height: '100vh', position: 'fixed' }}>
                <Menu mode="inline" theme="dark" selectedKeys={[currentPage]}>
                  <Menu.Item key="projects" style={{ marginTop: 0 }}>
                    <Link to="/">
                      <Icon type="folder-open" />
                      <span>Projects</span>
                    </Link>
                  </Menu.Item>
                  {currentUserSync.role === 'root_admin' && (
                    <Menu.Item key="users">
                      <Link to="/users">
                        <Icon type="team" />
                        <span>Users</span>
                      </Link>
                    </Menu.Item>
                  )}
                </Menu>
              </Sider>
            );
          }}
        </Query>
        <Layout style={{ marginLeft: this.state.collapsed ? 0 : 82 }}>
          <TopHeader />

          <Content
            style={{
              margin: '15px 16px 16px 15px',
              padding: 24,
              background: '#fff',
              minHeight: '100vh',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(NavigationLayout);
