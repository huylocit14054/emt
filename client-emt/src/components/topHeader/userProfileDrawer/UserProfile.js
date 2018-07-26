import { Tabs } from 'antd';
import React from 'react';
import UpdateInfoForm from './userProfile/UpdateInfoForm';
import UpdateSecurityForm from './userProfile/UpdateSecurityForm';

const { TabPane } = Tabs;

const ProfileLayout = () => (
  <Tabs defaultActiveKey="profile" tabPosition="left">
    <TabPane tab="Profile" key="profile">
      <UpdateInfoForm />
    </TabPane>
    <TabPane tab="Security" key="security">
      <UpdateSecurityForm />
    </TabPane>
  </Tabs>
);

export default ProfileLayout;
