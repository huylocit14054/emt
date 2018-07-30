import React from 'react';
import { Query } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { getClientCurrentUser as GET_CURRENT_USER_QUERY } from '../graphql/queries.gql';
import { Routes } from '../constants';

const AdminMenu = ({ location: { pathname } }) => {
  // If user unintentionally enter / at the end of the pathname --> remove it
  if (pathname.charAt(pathname.length - 1) === '/') {
    pathname = pathname.replace(/.$/, '');
  }
  return (
    // Get current user for further authorization
    <Query query={GET_CURRENT_USER_QUERY}>
      {() => (
        <Menu mode="inline" theme="dark" selectedKeys={[pathname]}>
          <Menu.Item key={Routes.admin.serviceManagement}>
            <Link to={Routes.admin.serviceManagement}>
              <Icon type="dropbox" />
              <span>Services</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={Routes.admin.planManagement}>
            <Link to={Routes.admin.planManagement}>
              <Icon type="profile" />
              <span>Plans</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={Routes.admin.companyMangement}>
            <Link to={Routes.admin.companyMangement}>
              <Icon type="home" />
              <span>Companies</span>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </Query>
  );
};

export default withRouter(AdminMenu);
