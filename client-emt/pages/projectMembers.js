import ProjectLayout from '../components/project/ProjectLayout';
import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';

export default class ProjectMembers extends React.Component {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);
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
        <ProjectLayout activeKey="members" />
      </React.Fragment>
    );
  }
}
