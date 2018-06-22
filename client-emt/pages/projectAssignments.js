import ProjectLayout from '../components/project/ProjectLayout';
import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';
import stylesheet from "styles/assignments.less";

export default class ProjectAssignments extends React.Component {
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
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <ProjectLayout activeKey="assignments" />
      </React.Fragment>
    );
  }
}