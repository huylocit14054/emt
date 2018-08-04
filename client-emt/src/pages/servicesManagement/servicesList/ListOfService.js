import React from 'react';
import { Table } from 'antd';
import TimeAgo from 'react-timeago';
import { Query } from 'react-apollo';
import { getAllServices as GET_ALL_SERVICES } from '../graphql/queries.gql';
import ServiceAction from './ServiceAction';

const { Column } = Table;

class ListOfService extends React.Component {
  render() {
    return (
      <Query query={GET_ALL_SERVICES}>
        {({ loading, error, data }) => {
          if (error) return <div>Error! {error.message}</div>;
          return (
            <Table
              dataSource={data.services}
              rowKey="id"
              loading={loading}
              expandedRowRender={service => <p>{service.description}</p>}
              bordered
            >
              <Column title="Name" dataIndex="name" />
              <Column
                title="Created At"
                dataIndex="createdAt"
                render={date => <TimeAgo date={date} />}
              />
              <Column
                title="Action"
                key="action"
                render={(text, record) => (
                  <ServiceAction
                    id={record.id}
                    name={record.name}
                    description={record.description}
                  />
                )}
              />
            </Table>
          );
        }}
      </Query>
    );
  }
}

export default ListOfService;
