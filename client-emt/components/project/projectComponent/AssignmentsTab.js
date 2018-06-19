import AssignDimensionsModal from './assignmentsTab/AssignDimensionsModal';
import { withRouter } from 'next/router';

class AssignmentsTab extends React.Component {
  render() {
    const projectId = this.props.router.query.id;
    return (
      <div>
        <AssignDimensionsModal projectId={projectId}/>
      </div>
    );
  }
}

export default withRouter(AssignmentsTab);
