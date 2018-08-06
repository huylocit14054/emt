import { Drawer } from 'antd';
import React from 'react';
import MemberInvitationInput from '../../../companyMembers/MemberInvitationInput';
import MembersList from '../../../companyMembers/MembersList';

export default class CompanyMembersDrawer extends React.Component {
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
    const { companyId, companyName } = this.props;
    return (
      <div>
        <a type="primary" onClick={this.showDrawer}>
          View More ...
        </a>

        <Drawer
          title={`${companyName}'s Members`}
          width="100%"
          placement="right"
          closable
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <MemberInvitationInput companyId={companyId} />
          <MembersList companyId={companyId} />
        </Drawer>
      </div>
    );
  }
}
