import React from 'react';
import { Table } from 'antd';
import TimeAgo from 'react-timeago';
import MyQuery from '../../components/MyQuery';
import { getAllServices as GET_ALL_SERVICES } from './queries.gql';
import CreateServiceDrawer from './servicesList/ServiceDrawer';
import ServiceAction from './servicesList/ServiceAction';

const { Column } = Table;

class ServicesList extends React.Component {
  render() {
    return (
      <MyQuery query={GET_ALL_SERVICES}>
        {({ services }) => (
          <React.Fragment>
            <CreateServiceDrawer />
            <br />
            <Table
              dataSource={services}
              rowKey="id"
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
          </React.Fragment>
        )}
      </MyQuery>
    );
  }
}

export default ServicesList;
