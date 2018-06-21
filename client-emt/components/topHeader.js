import { Layout, Menu, Icon, Dropdown, Avatar, List } from 'antd';
import { withApollo, Query } from 'react-apollo';
import Link from 'next/link';
import { Image } from 'cloudinary-react';
import cookie from 'cookie';
import redirect from '../lib/redirect';
import stylesheet from 'styles/topHeader.less';
import ChangeAvatarModal from './topHeader/ChangeAvatarModal';
import { CLOUD_NAME } from '../constants';
import { getCurrentUser as GET_CURRENT_USER_QUERY } from '../graphql/queries.gql';

const { Header } = Layout;

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
class TopHeader extends React.Component {
  signout = () => {
    do {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } while (getCookie("token") !== "");
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
                      width="40" height="40"
                      crop="scale"
                      style={{ borderRadius: '50%', border: "1px solid #00b5d0" , border: "1px solid #00b5d0" }}
                    />
                  }
                  title={<a>{currentUserSync.username}</a>}
                  description={<ChangeAvatarModal currentUserId={currentUserSync.id} />}
                />
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="profile">
                <Link prefetch as="/me/profile" href="/profile">
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
                    width="40" height="40"
                    crop="scale"
                    style={{ borderRadius: '50%', border: "1px solid #00b5d0"  }}
                  />
                </div>
              </Dropdown>
              <div>
                <Link prefetch href="/">
                  <a>
                    <img
                      src="http://sv1.upsieutoc.com/2018/06/14/company_logo.jpg"
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
