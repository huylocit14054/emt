import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { getClientCurrentUser as GET_CURRENT_USER_QUERY } from '../graphql/queries.gql';

const AdminMenu = ({ location: { pathname } }) => {
  const currentKey = pathname.replace('/', '');

  return (
    <Query query={GET_CURRENT_USER_QUERY}>
      {() => (
        <Menu mode="inline" theme="dark" selectedKeys={[currentKey]}>
          <Menu.Item key="services">
            <Icon type="dropbox" />
            <span>Services</span>
          </Menu.Item>
          <Menu.Item key="plans">
            <Icon type="profile" />
            <span>Plans</span>
          </Menu.Item>
          <Menu.Item key="companies">
            <Icon type="home" />
            <span>Companies</span>
          </Menu.Item>
        </Menu>
      )}
    </Query>
  );
};

export default withRouter(AdminMenu);
