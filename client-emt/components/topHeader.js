import { Layout, Menu, Icon, Dropdown, Avatar } from "antd";
import { withApollo, Query } from "react-apollo";
import Link from "next/link";
import cookie from "cookie";
import redirect from "../lib/redirect";
import stylesheet from "styles/topHeader.less";
import { getCurrentUser as GET_CURRENT_USER_QUERY } from "../graphql/queries.gql";
const { Header } = Layout;

class TopHeader extends React.Component {
  signout = () => {
    document.cookie = cookie.serialize("token", "", {
      maxAge: -1 // Expire the cookie immediately
    });

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    this.props.client.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      window.location.replace("/login");
    });
  };

  render() {
    const menu = (
      <Menu className="menu-dropdown">
        <Menu.Item key="profile">
          <a>
            <Icon type="profile" /> Profile
          </a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={this.signout}>
            <Icon type="logout" /> Sign out
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Query query={GET_CURRENT_USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          const currentUserSync = data.currentUser;
          return (
            <Header
              style={{
                backgroundColor: "white",
                padding: 0
              }}
              className="topHeader"
            >
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <Dropdown overlay={menu}>
                <div className="ant-dropdown-link user-dropdown" href="#">
                  <Avatar src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100" />
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
