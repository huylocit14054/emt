import React, { Component } from 'react';
import { withRouter } from 'next/router';
import MyQuery from '../../MyQuery';
import UTMAnalysis from './utmAnalysisTab/UTMAnalysis';
import { utmAnalysis as UTM_ANALYSIS_QUERY } from '../../../graphql/queries.gql';

class UTMAnalysisTab extends Component {
  render() {
    const projectId = this.props.router.query.id;
    return (
      <React.Fragment>
        <MyQuery query={UTM_ANALYSIS_QUERY} variables={{ projectId: parseInt(projectId) }}>
          {({ utmAnalysis }) => <UTMAnalysis utmAnalysis={utmAnalysis} />}
        </MyQuery>
      </React.Fragment>
    );
  }
}

export default withRouter(UTMAnalysisTab);
