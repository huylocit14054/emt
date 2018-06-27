import { withRouter } from 'next/router';
import AssignDimensionsModal from './assignmentsTab/AssignDimensionsModal';
import AssignmentsList from './assignmentsTab/AssignmentsList';

class AssignmentsTab extends React.Component {
  render() {
    const projectId = this.props.router.query.id;
    return (
      <div>
        <AssignDimensionsModal projectId={projectId} />
        <AssignmentsList projectId={projectId} />
      </div>
    );
  }
}

export default withRouter(AssignmentsTab);
