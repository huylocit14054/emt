import redirect from "../lib/redirect";
import checkLoggedIn from "../lib/checkLoggedIn";

export default class Projects extends React.Component {
  static async getInitialProps(context) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, "/login");
    }
    return {};
  }

  render() {
    return (
      <React.Fragment>
        <div>content</div>
      </React.Fragment>
    );
  }
}
