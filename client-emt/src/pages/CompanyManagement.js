import React from 'react';
import CreateCompanyDrawer from './companyManagement/CreateCompanyDrawer';
import CompanyList from './companyManagement/CompanyList';

const CompanyManagement = () => (
  <React.Fragment>
    <CreateCompanyDrawer />
    <br />
    <CompanyList />
  </React.Fragment>
);

export default CompanyManagement;
