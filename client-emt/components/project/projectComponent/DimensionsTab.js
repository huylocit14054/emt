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
      return <Tag color="#2db7f5">{category}</Tag>;
      break;
    case 'input':
      return <Tag color="#ffa940">{category}</Tag>;
      break;

    default:
      break;
  }
};

const randomColor = ['#faad14', '#13c2c2', '#eb2f96', '#52c41a'];

const renderOptions = options => (
  <React.Fragment>
    {options.map(option => (
      <Tag key={option.id} color={_.sample(randomColor)}>
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
        <br />
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
                  render={dimension => (<React.Fragment>
                    <span>{dimension.name}</span>
                    <UpdateDimensionModal dimension={dimension} />
                  </React.Fragment>
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
