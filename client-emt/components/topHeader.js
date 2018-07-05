import { Layout, Menu, Icon, Dropdown, List } from 'antd';
import React from 'react';
import { withApollo, Query } from 'react-apollo';
import Link from 'next/link';
import { Image } from 'cloudinary-react';
import stylesheet from '../styles/topHeader.less';
import ChangeAvatarModal from './topHeader/ChangeAvatarModal';
import { CLOUD_NAME } from '../constants';
import { getCurrentUser as GET_CURRENT_USER_QUERY } from '../graphql/queries.gql';

const { Header } = Layout;

class TopHeader extends React.Component {
  signout = () => {
    console.log('begin remove');
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    console.log('remove done');
    window.location.replace('/login');
  };

  render() {
    return (
      <Query query={GET_CURRENT_USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
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
              <Menu.Item key="profile">
                <Link as="/me/profile" href="/profile">
                  <a>
                    <Icon type="profile" /> Profile
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="logout">
                <a onClick={this.signout}>
                  <Icon type="logout" /> Sign out
                </a>
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
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <Dropdown overlay={menu}>
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
              <div>
                <Link prefetch href="/">
                  <a>
                    <img
                      alt="logo"
                      src="http://sv1.upsieutoc.com/2018/06/25/enhance-logo.png"
                      className="company-logo"
                    />
                  </a>
                </Link>
              </div>
            </Header>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(TopHeader);
