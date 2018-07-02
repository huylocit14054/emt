import React, { Component } from 'react';
import { withRouter } from 'next/router';
import MyQuery from '../../MyQuery';
import { getAssignmentsOfCurrentMember as GET_ASSIGNMENTS_OF_CURRENT_MEMBER_QUERY } from '../../../graphql/queries.gql';

const UTMBuilder = require('./utmBuilderTab/UTMBuilder');

class UTMBuilderTab extends Component {
  render() {
    const projectId = this.props.router.query.id;
    return (
      <React.Fragment>
        <MyQuery
          query={GET_ASSIGNMENTS_OF_CURRENT_MEMBER_QUERY}
          variables={{ projectId: parseInt(projectId) }}
        >
          {({ assignments, currentAppliedRule }) => (
            <UTMBuilder assignments={assignments} currentAppliedRule={currentAppliedRule} />
          )}
        </MyQuery>
      </React.Fragment>
    );
  }
}

export default withRouter(UTMBuilderTab);
