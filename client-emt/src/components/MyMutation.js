import { Mutation } from 'react-apollo';
import React from 'react';
import { Modal } from 'antd';

function showErrorModal(errors) {
  Modal.error({
    title: 'Error',
    content: errors.graphQLErrors.map((error, i) => <div key={i}>{error.message}</div>),
  });
}
export default ({ children, ...props }) => (
  <Mutation {...props}>
    {(mutate, { loading, data, error }) => {
      if (error) console.log(error);
      return children(mutate, { loading, data });
    }}
  </Mutation>
);
