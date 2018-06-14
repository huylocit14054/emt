import { Layout, Menu, Icon, Dropdown, message } from "antd";
import { Query } from "react-apollo";
import Link from "next/link";
const { Sider, Content } = Layout;
import { getCurrentUser as GET_CURRENT_USER_QUERY } from "../graphql/queries.gql";
import TopHeader from "./topHeader";

export default class NavigationLayout extends React.Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { currentPage } = this.props;
    return (
      <Layout id="navigation-layout">
        <TopHeader />

        <Layout>
          <Query query={GET_CURRENT_USER_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              const currentUserSync = data.currentUser;
              return (
                <Sider
                  collapsible
                  collapsed={this.state.collapsed}
                  onCollapse={this.onCollapse}
                  style={{ paddingTop: 0 }}
                >
                  <Menu
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={[currentPage]}
                  >
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
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              height: "100vh"
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
