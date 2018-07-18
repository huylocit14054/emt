import { Tabs } from 'antd';
import React from 'react';
import UpdateInfoForm from './userProfile/UpdateInfoForm';
import UpdateSecurityForm from './userProfile/UpdateSecurityForm';

const { TabPane } = Tabs;

const ProfileLayout = () => (
  <React.Fragment>
    <h2>Your Profile</h2>

    <Tabs defaultActiveKey="profile">
      <TabPane tab="Profile" key="profile">
        <UpdateInfoForm />
      </TabPane>
      <TabPane tab="Security" key="security">
        <UpdateSecurityForm />
      </TabPane>
    </Tabs>
  </React.Fragment>
);

export default ProfileLayout;
