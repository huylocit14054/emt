import { Layout } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

import TopHeader from './TopHeader';

const { Sider, Content } = Layout;

class NavigationLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { menu, children } = this.props;

    const { collapsed } = this.state;

    return (
      <Layout id="navigation-layout">
        <Sider collapsed={false} style={{ paddingTop: 0, height: '100vh', position: 'fixed' }}>
          {menu}
        </Sider>

        <Layout style={{ marginLeft: collapsed ? 82 : 202 }}>
          <TopHeader />

          <Content
            style={{
              margin: '15px 16px 16px 15px',
              padding: 24,
              background: '#fff',
              minHeight: '100vh',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
NavigationLayout.propTypes = {
  menu: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
export default NavigationLayout;
