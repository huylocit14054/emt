import React from 'react';
import { withRouter } from 'react-router-dom';
import AssignDimensionsModal from './assignmentsTab/AssignDimensionsModal';
import AssignmentsList from './assignmentsTab/AssignmentsList';

class AssignmentsTab extends React.Component {
  render() {
    const { projectId } = this.props.match.params;
    return (
      <div>
        <AssignDimensionsModal projectId={projectId} />
        <AssignmentsList projectId={projectId} />
      </div>
    );
  }
}

export default withRouter(AssignmentsTab);
