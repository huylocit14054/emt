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
  if (pathname.charAt(pathname.length - 1) === '/') {
    pathname = pathname.replace(/.$/, '');
  }
  // const currentKey = pathname.includes('project') ? 'projects' : pathname.replace('/', '');
  let subMenuKey = null;
  if (pathname.includes(UTM_SERVICE) || pathname.includes(OMS_SERVICE)) {
    subMenuKey = pathname.includes(UTM_SERVICE) ? UTM_SERVICE : OMS_SERVICE;
  }

  return (
    <Query query={GET_CURRENT_USER_QUERY}>
      {({ data: { currentUser } }) => (
        <React.Fragment>
          <CompanyName companyId={parseInt(companyId)} />

          <Menu mode="inline" theme="dark" selectedKeys={[pathname]} defaultOpenKeys={[subMenuKey]}>
            <Menu.Item key={routeByCompanyId(Routes.company.members, companyId)}>
              <Link to={routeByCompanyId(Routes.company.members, companyId)}>
                <Icon type="usergroup-add" />
                <span>Members</span>
              </Link>
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
              <Menu.Item
                key={routeByCompanyId(Routes.company.utm.projects, companyId)}
                style={{ marginTop: 0 }}
              >
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
