import { Table, Icon, Tag, Button } from 'antd';
import { Query } from 'react-apollo';
import TimeAgo from 'react-timeago';
import { withRouter } from 'next/router';
import { getDimensionsByProjectId as GET_DIMENSIONS_BY_PROJECT_ID_QUERY } from '../../../graphql/queries.gql';
import CreateDimensionModal from './dimensionsTab/CreateDimensionModal';
import UpdateDimensionModal from './dimensionsTab/UpdateDimensionModal';
import CreateOptionsModal from './dimensionsTab/CreateOptionsModal';
import _ from 'lodash';

const { Column } = Table;

const renderCategory = category => {
  switch (category) {
    case 'selection':
      return <Tag color="#eb2f96">{category}</Tag>;
      break;
    case 'input':
      return <Tag color="#ffa940">{category}</Tag>;
      break;

    default:
      break;
  }
};

const renderOptions = options => (
  <React.Fragment>
    {options.map(option => (
      <Tag key={option.id} color='#d6e4ff' style={{
        color: '#333', height: 'auto', whiteSpace: 'pre-wrap'
      }}>
        {option.name}
      </Tag>
    ))}
  </React.Fragment>
);

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
              <Table bordered pagination={{ pageSize: 7 }} dataSource={data.projectDimensions} rowKey="id">
                <Column
                  title="Name"
                  key="name"
                  render={dimension => (                 
                    <UpdateDimensionModal dimension={dimension} />
               )}
                />
                <Column
                  title="Category"
                  key="category"
                  render={dimension => renderCategory(dimension.category)}
                />
                <Column
                  title="Options"
                  key="option"
                  render={dimension => (
                    <React.Fragment>
                      {renderOptions(dimension.options)}
                        {dimension.category === 'selection' && (
                        <CreateOptionsModal dimension={dimension} />
                      )}
                    </React.Fragment>
                    
                  )}
                />
                <Column
                  title="Created At"
                  key="createdAt"
                  render={dimension => <TimeAgo date={dimension.createdAt} />}
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
