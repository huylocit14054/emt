import React, { Component } from 'react';
import { withRouter } from 'next/router';
import MyQuery from '../../MyQuery';
import UTMHistory from './utmHistoryTab/UTMHistory';

class UTMHistoryTab extends Component {
  render() {
    const projectId = this.props.router.query.id;
    return (
      <React.Fragment>
        <UTMHistory />
      </React.Fragment>
    );
  }
}

export default withRouter(UTMHistoryTab);
