import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MembersList from './companyMembers/MembersList';
import MemberInvitationInput from './companyMembers/MemberInvitationInput';

// import '../styles/projects.less';

const CompanyMembers = ({ match, location: { pathname }}) => {
  const { companyId } = match.params;
  return(
    <React.Fragment>
    <MemberInvitationInput companyId={companyId}/>
    <MembersList companyId={companyId}/>
  </React.Fragment>
  )
  
}

export default withRouter(CompanyMembers);
