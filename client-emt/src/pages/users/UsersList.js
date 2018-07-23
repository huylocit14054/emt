import React from 'react';

import CreateUserModal from './userLists/CreateUserModal';
import ListOfUsers from './userLists/ListOfUsers';

export default class UsersList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CreateUserModal />
        <ListOfUsers />
      </React.Fragment>
    );
  }
}
