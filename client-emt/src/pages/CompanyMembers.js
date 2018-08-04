import React from 'react';
import { withRouter } from 'react-router-dom';
import MembersList from './companyMembers/MembersList';
import MemberInvitationInput from './companyMembers/MemberInvitationInput';

// import '../styles/projects.less';

const CompanyMembers = ({ match }) => {
  const { companyId } = match.params;
  return (
    <React.Fragment>
      <MemberInvitationInput companyId={companyId} />
      <MembersList companyId={companyId} />
    </React.Fragment>
  );
};

export default withRouter(CompanyMembers);
