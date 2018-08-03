import { Query } from 'react-apollo';
import React from 'react';

export default ({ children, ...props }) => (
  <Query {...props}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }
      if (error) return `Error! ${error.message}`;
      return children(data);
    }}
  </Query>
);
