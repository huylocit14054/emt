import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';
import UserProfile from '../components/profile/UserProfile';
import stylesheet from 'styles/projects.less';

export default class Projects extends React.Component {
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
        <UserProfile currentUser={this.props.currentUser} />
      </React.Fragment>
    );
  }
}
