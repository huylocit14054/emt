import { Table, Icon, Tag } from 'antd';
import { Query } from 'react-apollo';
import TimeAgo from 'react-timeago';
import { withRouter } from 'next/router';
import { getDimensionsByProjectId as GET_DIMENSIONS_BY_PROJECT_ID_QUERY } from '../../../graphql/queries.gql';
import CreateDimensionModal from './dimensionsTab/CreateDimensionModal';
import UpdateDimensionModal from './dimensionsTab/UpdateDimensionModal';

const { Column } = Table;
class DimensionsTab extends React.Component {
  render() {
    const projectId = this.props.router.query.id;
    return (
      <React.Fragment>
        <CreateDimensionModal projectId={projectId} />
        <Query query={GET_DIMENSIONS_BY_PROJECT_ID_QUERY} variables={{ projectId }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (
              <Table pagination={{ pageSize: 7 }} dataSource={data.projectDimensions} rowKey="id">
                <Column
                  title="Name"
                  key="name"
                  render={dimension => <span>{dimension.name}</span>}
                />
                <Column
                  title="Category"
                  key="category"
                  render={dimension => <span>{dimension.category}</span>}
                />
                <Column
                  title="Created At"
                  key="createdAt"
                  render={dimension => <TimeAgo date={dimension.createdAt} />}
                />
                <Column
                  title="Action"
                  key="action"
                  render={dimension => (
                    <span>
                      <UpdateDimensionModal dimension={dimension} />
                    </span>
                  )}
                />
              </Table>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default withRouter(DimensionsTab);
