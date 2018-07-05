import React from 'react';
import stylesheet from '../styles/login.less';
import LoginBox from '../components/login/LoginBox';
import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';

class Login extends React.Component {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (currentUser) {
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
        <LoginBox />
      </React.Fragment>
    );
  }
}

export default Login;
