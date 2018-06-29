import React from 'react';
import stylesheet from '../styles/projectRules.less';
import ProjectLayout from '../components/project/ProjectLayout';
import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';

export default class ProjectUTMBuilder extends React.Component {
  static async getInitialProps(context) {
    const { apolloClient } = context;
    const { currentUser } = await checkLoggedIn(apolloClient);
    if (!currentUser) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, '/');
    }
    return { currentUser };
  }

  render() {
    return (
      <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <ProjectLayout activeKey="utm_builder" />
      </React.Fragment>
    );
  }
}
