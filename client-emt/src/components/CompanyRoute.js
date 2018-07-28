import React from 'react';
import { Redirect } from 'react-router-dom';
import { getCompanyById as GET_COMPANY_BY_ID } from '../graphql/queries.gql';
import MyQueryWithLoadingLayout from './MyQueryWithLoadingLayout';
import PrivateRoute from './PrivateRoute';
import NavigationLayout from './NavigationLayout';
import CompanyMenu from './CompanyMenu';

const CompanyRoute = ({
  component: Component,
  computedMatch: {
    params: { companyId },
  },
  ...rest
}) => {
  return (
    <PrivateRoute
      {...rest}
      component={props => (
        <MyQueryWithLoadingLayout
          query={GET_COMPANY_BY_ID}
          variables={{ companyId: parseInt(companyId) }}
        >
          {({ company }) => {
            if (company)
              return (
                <NavigationLayout menu={<CompanyMenu />}>
                  <Component {...props} />
                </NavigationLayout>
              );

            return (
              <Redirect
                to={{
                  pathname: '/404',
                  state: { from: props.location },
                }}
              />
            );
          }}
        </MyQueryWithLoadingLayout>
      )}
    />
  );
};

export default CompanyRoute;
