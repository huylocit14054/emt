import AssignDimensionsModal from './assignmentsTab/AssignDimensionsModal';
import AssignmentsList from './assignmentsTab/AssignmentsList';

import { withRouter } from 'next/router';

class AssignmentsTab extends React.Component {
  render() {
    const projectId = this.props.router.query.id;
    return (
      <div>
        
        <AssignDimensionsModal projectId={projectId}/>
        <AssignmentsList projectId={projectId} />
      </div>
    );
  }
}

export default withRouter(AssignmentsTab);
