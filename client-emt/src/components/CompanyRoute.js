import React from 'react';
import PrivateRoute from './PrivateRoute';
import NavigationLayout from './NavigationLayout';
import CompanyMenu from './CompanyMenu';

const CompanyRoute = ({ component: Component, ...rest }) => (
  <PrivateRoute
    {...rest}
    component={props => (
      <NavigationLayout menu={<CompanyMenu />}>
        <Component {...props} />
      </NavigationLayout>
    )}
  />
);

export default CompanyRoute;
