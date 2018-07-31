import React from 'react';
import { Query } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import { getClientCurrentUser as GET_CURRENT_USER_QUERY } from '../graphql/queries.gql';
import { Routes, UTM_SERVICE, OMS_SERVICE } from '../constants';
import { routeByCompanyId } from '../utils/routes-utils';
import CompanyName from './companyMenu/companyName';

const { SubMenu } = Menu;
const CompanyMenu = ({ match, location: { pathname } }) => {
  const { companyId } = match.params;
  const currentKey = pathname.includes('project') ? 'projects' : pathname.replace('/', '');
  const subMenuKey = pathname.includes(UTM_SERVICE) ? UTM_SERVICE : OMS_SERVICE;

  return (
    <Query query={GET_CURRENT_USER_QUERY}>
      {({ data: { currentUser } }) => (
        <React.Fragment>
          <CompanyName companyId={parseInt(companyId)} />

          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={[currentKey]}
            defaultOpenKeys={[subMenuKey]}
          >
            <Menu.Item key="members">
              <Icon type="usergroup-add" />
              <span>Members</span>
            </Menu.Item>
            <SubMenu
              key="utm"
              title={
                <span>
                  <Icon type="link" />
                  <span>UTM</span>
                </span>
              }
            >
              <Menu.Item key="projects" style={{ marginTop: 0 }}>
                <Link to={routeByCompanyId(Routes.company.utm.projects, companyId)}>
                  <Icon type="folder-open" />
                  <span>Projects</span>
                </Link>
              </Menu.Item>
              {currentUser.role === 'root_admin' && (
                <Menu.Item key="users">
                  <Link to="/users">
                    <Icon type="team" />
                    <span>Users</span>
                  </Link>
                </Menu.Item>
              )}
            </SubMenu>
            <SubMenu
              key="oms"
              title={
                <span>
                  <Icon type="table" />
                  <span>OMS</span>
                </span>
              }
            >
              <Menu.Item key="integrations" style={{ marginTop: 0 }}>
                <Icon type="folder-open" />
                <span>Integrations</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </React.Fragment>
      )}
    </Query>
  );
};

export default withRouter(CompanyMenu);
