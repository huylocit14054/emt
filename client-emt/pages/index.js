import { Layout, Menu, Icon, Dropdown, message } from 'antd';
import Link from 'next/link';
const { Sider, Content } = Layout;

import TopHeader from '../components/topHeader'
import stylesheet from 'styles/projects.less';


export default class Projects extends React.Component {
  state = {
    collapsed: false
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  
  render() {
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Sider style={{backgroundColor: 'white'}} trigger={null} collapsible collapsed={this.state.collapsed}  onCollapse={this.onCollapse}>
          <Link prefetch href="/">
            <a>
              <img
                src="https://redpola-my.sharepoint.com/personal/phuc_tran_enhance_vn/Documents/Microsoft%20Teams%20Chat%20Files/g-suite%20logo%202.png"
                className="logo"
                alt="Hospital Review Logo"
              />
            </a>
          </Link>
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <TopHeader />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              height: '100vh',
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
