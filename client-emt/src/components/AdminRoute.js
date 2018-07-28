import React from 'react';
import PrivateRoute from './PrivateRoute';
import NavigationLayout from './NavigationLayout';
import AdminMenu from './AdminMenu';

const AdminRoute = ({ component: Component, ...rest }) => (
  <PrivateRoute
    {...rest}
    component={props => (
      <NavigationLayout menu={<AdminMenu />}>
        <Component {...props} />
      </NavigationLayout>
    )}
  />
);

export default AdminRoute;
