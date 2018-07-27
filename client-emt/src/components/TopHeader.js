import { Layout, Menu, Icon, Dropdown, List } from 'antd';
import { withApollo, Query } from 'react-apollo';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Image } from 'cloudinary-react';
import ChangeAvatarModal from './topHeader/ChangeAvatarModal';
import '../styles/topHeader.less';
import { CLOUD_NAME, AUTH_TOKEN } from '../constants';
import { getClientCurrentUser as GET_CURRENT_USER_QUERY } from '../graphql/queries.gql';
import CloudImage from './CloudImage';
import UserProfileDrawer from './topHeader/UserProfileDrawer';

const { Header } = Layout;

const companies = [
  {
    name: 'Company A',
    logo: 'default-avatar_wbcfln',
  },
  {
    name: 'Company B',
    logo: 'default-avatar_wbcfln',
  },
  {
    name: 'Company C',
    logo: 'default-avatar_wbcfln',
  },
  {
    name: 'Company D',
    logo: 'default-avatar_wbcfln',
  },
];
class TopHeader extends React.Component {
  signout = () => {
    localStorage.removeItem(AUTH_TOKEN);

    this.props.client.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      this.props.history.replace(`/login`);
    });
  };

  showProfileDrawer = () => {
    this.profileDrawer.showDrawer();
  };

  render() {
    return (
      <Query query={GET_CURRENT_USER_QUERY}>
        {({ data }) => {
          const currentUserSync = data.currentUser;
          const menu = (
            <Menu className="menu-dropdown">
              <Menu.Item key="user">
                <List.Item.Meta
                  avatar={
                    <Image
                      cloudName={CLOUD_NAME}
                      publicId={currentUserSync.avatar}
                      width="40"
                      height="40"
                      crop="scale"
                      style={{
                        borderRadius: '50%',
                        border: '1px solid #00b5d0',
                      }}
                    />
                  }
                  title={<a>{currentUserSync.username}</a>}
                  description={<ChangeAvatarModal currentUserId={currentUserSync.id} />}
                />
              </Menu.Item>
              <Menu.Divider />

              <Menu.Item key="company-dashboard">
                <Link to="/me/profile">
                  <Icon type="dashboard" /> Root Admin Dashboard
                </Link>
              </Menu.Item>
              <Menu.Divider />
              <div style={{ marginLeft: 10, marginTop: 10, fontSize: 12, color: 'gray' }}>
                Your Companies
              </div>
              {companies.map(company => (
                <Menu.Item key={`company-${company.id}`}>
                  <Link to="/me/profile">
                    <CloudImage
                      publicId={company.logo}
                      width={18}
                      height={18}
                      style={{ marginRight: 7 }}
                    >
                      {company.name}
                    </CloudImage>
                  </Link>
                </Menu.Item>
              ))}

              <Menu.Divider />
              <UserProfileDrawer ref={ref => (this.profileDrawer = ref)} />
              <Menu.Item key="profile" onClick={this.showProfileDrawer}>
                <Icon type="profile" /> Profile
              </Menu.Item>

              <Menu.Item key="logout" onClick={this.signout}>
                <Icon type="logout" /> Sign out
              </Menu.Item>
            </Menu>
          );

          return (
            <Header
              style={{
                backgroundColor: 'white',
                padding: 0,
              }}
              className="topHeader"
            >
              <Dropdown overlay={menu} trigger={['click']}>
                <div className="ant-dropdown-link user-dropdown" href="#">
                  <Image
                    cloudName={CLOUD_NAME}
                    publicId={currentUserSync.avatar}
                    width="40"
                    height="40"
                    crop="scale"
                    style={{ borderRadius: '50%', border: '1px solid #00b5d0' }}
                  />
                </div>
              </Dropdown>
              {/* <div>
                <Link to="/">
                  <img
                    alt="logo"
                    src="http://sv1.upsieutoc.com/2018/06/25/enhance-logo.png"
                    className="company-logo"
                  />
                </Link>
              </div> */}
            </Header>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(withRouter(TopHeader));
