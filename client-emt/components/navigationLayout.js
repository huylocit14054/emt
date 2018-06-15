import { Layout, Menu, Icon, Dropdown, message } from "antd";
import { withRouter } from "next/router";
import { Query } from "react-apollo";
import Link from "next/link";
const { Sider, Content } = Layout;
import { getCurrentUser as GET_CURRENT_USER_QUERY } from "../graphql/queries.gql";
import TopHeader from "./topHeader";

class NavigationLayout extends React.Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    let currentPage = this.props.router.pathname;
    currentPage =
      currentPage.includes("project") || currentPage === "/"
        ? "projects"
        : currentPage.replace("/", "");
    return (
      <Layout id="navigation-layout">
        <Query query={GET_CURRENT_USER_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const currentUserSync = data.currentUser;
            return (
              <Sider
                collapsed={true}
                onCollapse={this.onCollapse}
                style={{ paddingTop: 0, height: "100vh", position: "fixed" }}
              >
                <Menu mode="inline" theme="dark" selectedKeys={[currentPage]}>
                  <Menu.Item key="projects" style={{ marginTop: 0 }}>
                    <Link prefetch href="/">
                      <a>
                        <Icon type="folder-open" />
                        <span>Projects</span>
                      </a>
                    </Link>
                  </Menu.Item>
                  {currentUserSync.role === "root_admin" && (
                    <Menu.Item key="users">
                      <Link prefetch href="/users">
                        <a>
                          <Icon type="team" />
                          <span>Users</span>
                        </a>
                      </Link>
                    </Menu.Item>
                  )}
                </Menu>
              </Sider>
            );
          }}
        </Query>
        <Layout style={{ marginLeft: this.state.collapsed ? 0 : 120 }}>
          <TopHeader />

          <Content
            style={{
              margin: "15px 16px 16px 100px",
              padding: 24,
              background: "#fff",
              height: "100%"
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(NavigationLayout);
