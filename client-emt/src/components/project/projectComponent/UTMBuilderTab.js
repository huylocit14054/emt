import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MyQuery from '../../MyQuery';
import { getAssignmentsOfCurrentMember as GET_ASSIGNMENTS_OF_CURRENT_MEMBER_QUERY } from '../../../graphql/queries.gql';

const UTMBuilder = require('./utmBuilderTab/UTMBuilder');

class UTMBuilderTab extends Component {
  render() {
    const { projectId } = this.props.match.params;
    return (
      <React.Fragment>
        <MyQuery
          query={GET_ASSIGNMENTS_OF_CURRENT_MEMBER_QUERY}
          variables={{ projectId: parseInt(projectId) }}
        >
          {({ assignments, currentAppliedRule }) => (
            <UTMBuilder
              assignments={assignments}
              currentAppliedRule={currentAppliedRule}
              projectId={projectId}
            />
          )}
        </MyQuery>
      </React.Fragment>
    );
  }
}

export default withRouter(UTMBuilderTab);
