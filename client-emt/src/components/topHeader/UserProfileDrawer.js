import React, { Component } from 'react';
import { Drawer, Menu, Icon, Button } from 'antd';
import UserProfile from './userProfileDrawer/UserProfile';

class UserProfileDrawer extends Component {
  state = { visible: false };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div onClick={this.showDrawer}>
          <Icon type="profile" /> Profile
        </div>

        <Drawer
          title="Your Profile"
          width="80%"
          placement="right"
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
          <UserProfile />
        </Drawer>
      </React.Fragment>
    );
  }
}

export default UserProfileDrawer;
