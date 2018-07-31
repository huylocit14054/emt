import { Mutation } from 'react-apollo';
import React from 'react';
import { Modal } from 'antd';

function showErrorModal(errors) {
  Modal.error({
    title: 'This is an error message',
    content: errors.graphQLErrors.map((error, i) => <div key={i}>{error.message}</div>),
  });
}
export default ({ children, ...props }) => (
  <Mutation {...props} error={error => showErrorModal(error)}>
    {(mutate, { loading, data }) => {
      return children(mutate, { loading, data });
    }}
  </Mutation>
);
