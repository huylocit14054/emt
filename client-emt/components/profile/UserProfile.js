import { Tabs } from 'antd';
import UpdateInfoForm from './userProfile/UpdateInfoForm';
import UpdateSecurityForm from './userProfile/UpdateSecurityForm';

const { TabPane } = Tabs;
class ProfileLayout extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
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
  }
}

export default ProfileLayout;
