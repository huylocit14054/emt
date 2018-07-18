import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MyQuery from '../../MyQuery';
import UTMHistory from './utmHistoryTab/UTMHistory';
import { currentMemberUtmHistory as CURRENT_MEMBER_UTM_HISTORY } from '../../../graphql/queries.gql';

class UTMHistoryTab extends Component {
  render() {
    const { projectId } = this.props.match.params;
    return (
      <React.Fragment>
        <MyQuery query={CURRENT_MEMBER_UTM_HISTORY} variables={{ projectId: parseInt(projectId) }}>
          {({ currentMemberUtmHistory }) => (
            <UTMHistory currentMemberUtmHistory={currentMemberUtmHistory} />
          )}
        </MyQuery>
      </React.Fragment>
    );
  }
}

export default withRouter(UTMHistoryTab);
