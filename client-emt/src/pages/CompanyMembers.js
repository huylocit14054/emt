import React from 'react';
import MembersList from './companyMembers/MembersList';
import MemberInvitationInput from './companyMembers/MemberInvitationInput';
// import '../styles/projects.less';

const CompanyMembers = () => (
  <React.Fragment>
    <MemberInvitationInput />
    <MembersList />
  </React.Fragment>
);

export default CompanyMembers;
