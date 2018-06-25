import React from 'react';
import stylesheet from 'styles/login.less';
import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';
import UsersList from '../components/users/UsersList';

class Users extends React.Component {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (currentUser.role !== 'root_admin') {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, '/');
    }
    return {};
  }

  render() {
    return (
      <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <UsersList />
      </React.Fragment>
    );
  }
}

export default Users;
