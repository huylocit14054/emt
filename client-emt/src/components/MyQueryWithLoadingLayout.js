import { Query } from 'react-apollo';
import React from 'react';
import LoadingLayout from './LoadingLayout';

export default ({ children, ...props }) => (
  <Query {...props}>
    {({ loading, error, data }) => {
      if (loading) {
        return <LoadingLayout />;
      }
      if (error) return `Error! ${error.message}`;
      return children(data);
    }}
  </Query>
);
